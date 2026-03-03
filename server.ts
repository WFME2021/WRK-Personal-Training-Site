import "dotenv/config";
import express from "express";
import { createServer as createViteServer } from "vite";
import { Octokit } from "octokit";
import path from "path";
import fs from "fs";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Parse JSON bodies
  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Contact Form Submission
  app.post("/api/contact", async (req, res) => {
    const { name, email, phone, message, interest, referralSource } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      // Lazy load nodemailer
      let nodemailer;
      try {
        nodemailer = await import("nodemailer");
      } catch (importError) {
        console.error("Failed to import nodemailer:", importError);
        throw new Error("Internal Server Error: Email module missing");
      }

      const port = Number(process.env.SMTP_PORT) || 587;
      
      // Fix for "wrong version number" error:
      // Port 587 MUST use secure: false (STARTTLS)
      // Port 465 MUST use secure: true (Implicit SSL)
      const isSecure = port === 465;

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: port,
        secure: isSecure,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: process.env.SMTP_FROM || '"WRK Website" <no-reply@wrkpersonaltraining.co.nz>',
        to: process.env.CONTACT_EMAIL || "info@wrkpersonaltraining.co.nz",
        subject: `New Inquiry from ${name} - ${interest || 'General'}`,
        text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Interest: ${interest}
Referral Source: ${referralSource}

Message:
${message}
        `,
        html: `
<h3>New Inquiry from Website</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>
<p><strong>Interest:</strong> ${interest}</p>
<p><strong>Referral Source:</strong> ${referralSource}</p>
<br/>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br/>')}</p>
        `,
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
      }

      // --- MailerLite Integration ---
      const rawKey = process.env.MAILERLITE_API_KEY || "";
      const MAILERLITE_API_KEY = rawKey.replace(/^"|"$/g, '').trim();
      const MAILERLITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID;

      if (MAILERLITE_API_KEY) {
        try {
          // 1. Create/Update Subscriber
          const fields: any = {
            name: name,
            phone: phone,
          };

          // Map Interest to Custom Fields
          switch (interest) {
            case '1:1 Coaching (Christchurch)':
              fields['11_coaching_christchurch'] = 'Yes';
              break;
            case 'Online Coaching':
              fields['online_coaching'] = 'Yes';
              break;
            case 'Corporate Wellness':
              fields['corporate_wellness'] = 'Yes';
              break;
            case '42-Day Reset':
              fields['42_day_reset'] = 'Yes';
              break;
            case 'Not sure yet':
              fields['not_sure_yet'] = 'Yes';
              break;
          }

          const subscriberPayload = {
            email: email,
            fields: fields,
            groups: MAILERLITE_GROUP_ID ? [MAILERLITE_GROUP_ID.toString()] : []
          };

          const mlResponse = await fetch('https://connect.mailerlite.com/api/subscribers', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
              'Accept': 'application/json'
            },
            body: JSON.stringify(subscriberPayload)
          });

          if (!mlResponse.ok) {
            const errorText = await mlResponse.text();
            console.error('MailerLite API Error:', errorText);
          } else {
            console.log('Successfully added to MailerLite');
          }
        } catch (mlError: any) {
          console.error('MailerLite Integration Failed:', mlError.message);
        }
      }

      res.json({ success: true, message: "Processed inquiry" });
    } catch (error: any) {
      console.error("General error in /api/contact:", error);
      res.status(500).json({ error: "Failed to process request" });
    }
  });

  // GitHub Publish Endpoint
  app.post("/api/admin/publish", async (req, res) => {
    const { content } = req.body;
    
    if (!content) {
      return res.status(400).json({ error: "No content provided" });
    }

    const token = process.env.GITHUB_TOKEN;
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;

    if (!token || !owner || !repo) {
      const missing = [];
      if (!token) missing.push("GITHUB_TOKEN");
      if (!owner) missing.push("GITHUB_OWNER");
      if (!repo) missing.push("GITHUB_REPO");

      console.error("Missing GitHub credentials:", missing.join(", "));
      return res.status(500).json({ 
        error: "GitHub credentials not configured.",
        details: `Missing variables: ${missing.join(", ")}`,
        debug: {
          hasToken: !!token,
          hasOwner: !!owner,
          hasRepo: !!repo
        }
      });
    }

    try {
      const octokit = new Octokit({ auth: token });
      const path = "public/content.json";
      
      // 1. Get current SHA of the file
      let sha;
      try {
        const { data } = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
          owner,
          repo,
          path,
        });
        if (!Array.isArray(data)) {
          sha = data.sha;
        }
      } catch (e) {
        // File might not exist yet, which is fine
        console.log("File not found, creating new one.");
      }

      // 2. Update file content
      // Convert content to Base64
      const contentString = JSON.stringify(content, null, 2);
      const contentEncoded = Buffer.from(contentString).toString('base64');

      await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
        owner,
        repo,
        path,
        message: `Update content via CMS - ${new Date().toISOString()}`,
        content: contentEncoded,
        sha, // Required if updating existing file
      });

      res.json({ success: true, message: "Content published to GitHub successfully!" });
    } catch (error: any) {
      console.error("GitHub API Error:", error);
      res.status(500).json({ error: `Failed to publish to GitHub: ${error.message}` });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production: Serve static files from dist
    const distPath = path.resolve("dist");
    if (fs.existsSync(distPath)) {
      app.use(express.static(distPath));
      // SPA Fallback
      app.get("*", (req, res) => {
        res.sendFile(path.join(distPath, "index.html"));
      });
    } else {
      console.error("dist folder not found. Run 'npm run build' first.");
    }
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

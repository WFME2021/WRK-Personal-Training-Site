import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email } = req.body || {};

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ error: 'A valid email address is required' });
  }

  const cleanEmail = email.trim().toLowerCase();
  const pdfDownloadUrl = 'https://wrkpersonaltraining.co.nz/docs/14%20Day%20Fat%20Loss%20Foundation%20Nutrition%20Basics%20(2).pdf';

  // Always respond with success so user client is never blocked
  try {
    // 1. Send Email Notification & Delivery (HTML only, no heavy raw binary attachments)
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const port = Number(process.env.SMTP_PORT) || 587;
        const isSecure = port === 465;

        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || 'smtp.gmail.com',
          port: port,
          secure: isSecure,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS?.replace(/^"|"$/g, '').trim(),
          },
          connectionTimeout: 8000,
          greetingTimeout: 5000,
          socketTimeout: 8000
        });

        // Admin Notification
        const adminMail = {
          from: process.env.SMTP_FROM || process.env.SMTP_USER || '"WRK Website" <info@wrkpersonaltraining.co.nz>',
          to: `${process.env.CONTACT_EMAIL || 'wfme2021@gmail.com'}, info@wrkpersonaltraining.co.nz`,
          replyTo: cleanEmail,
          subject: `📘 New Lead: 14-Day Fat Loss Foundations Guide - ${cleanEmail}`,
          text: `A new user requested the 14-Day Fat Loss Foundations: Nutrition Basics Guide (PDF):\n\nEmail: ${cleanEmail}\nTimestamp: ${new Date().toISOString()}\nResource: 14-Day Fat Loss Foundations Guide (PDF)`,
          html: `
            <h3>📘 New Lead: 14-Day Fat Loss Foundations Guide</h3>
            <p><strong>Email:</strong> ${cleanEmail}</p>
            <p><strong>Resource:</strong> 14-Day Fat Loss Foundations: Nutrition Basics Guide (PDF)</p>
            <p><strong>Timestamp:</strong> ${new Date().toLocaleString('en-NZ', { timeZone: 'Pacific/Auckland' })}</p>
          `
        };

        // User Delivery Email (Lightweight HTML with direct PDF link)
        const userMail = {
          from: process.env.SMTP_FROM || process.env.SMTP_USER || '"WRK Personal Training" <info@wrkpersonaltraining.co.nz>',
          to: cleanEmail,
          subject: `Your 14-Day Fat Loss Foundations Guide | WRK Personal Training`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; color: #2C3539; line-height: 1.6; padding: 20px;">
              <h2 style="color: #2C3539; margin-bottom: 16px;">14-Day Fat Loss Foundations: Nutrition Basics</h2>
              <p>Hi there,</p>
              <p>Thank you for downloading our <strong>14-Day Fat Loss Foundations: Nutrition Basics Guide</strong> from WRK Personal Training.</p>
              <p>Sustainable fat loss doesn't require extreme restriction or an immaculate diet. It requires a repeatable, calm structure that protects your metabolic rate and lean muscle tissue.</p>
              
              <!-- Direct PDF Download Banner -->
              <div style="background-color: #ffffff; border: 2px solid #8A9A86; border-radius: 12px; padding: 24px; margin: 24px 0; text-align: center;">
                <h3 style="margin-top: 0; font-size: 20px; color: #2C3539;">📥 Download Your Official Guide</h3>
                <p style="margin-bottom: 16px; font-size: 15px; color: #64748b;">Click below to access your complete copy of the 14-Day Fat Loss Foundations (PDF):</p>
                <a href="${pdfDownloadUrl}" style="display: inline-block; background: #8A9A86; color: #ffffff; padding: 14px 28px; border-radius: 8px; font-weight: 700; text-decoration: none; font-size: 16px;">
                  Download 14-Day Guide (PDF) &darr;
                </a>
              </div>

              <div style="background-color: #F6F5F2; padding: 24px; border-radius: 12px; margin: 24px 0; border-left: 4px solid #8A9A86;">
                <h3 style="margin-top: 0; font-size: 18px; color: #2C3539;">The 6 Non-Negotiable Nutrition Fundamentals</h3>
                <ol style="margin: 0; padding-left: 20px; font-size: 15px; line-height: 1.8;">
                  <li><strong>3 Solid Meals Per Day:</strong> Build regular eating intervals that eliminate perpetual snacking and provide stable blood glucose.</li>
                  <li><strong>Protein at Every Meal (30/40/30 Balance):</strong> Aim for a balanced plate of roughly 30% high-quality protein, 40% unrefined carbohydrates, and 30% healthy fats to maintain muscle protein synthesis.</li>
                  <li><strong>High-Fibre Fruits & Vegetables:</strong> Prioritise whole vegetables and fruits to optimize gut motility, micronutrient intake, and fullness.</li>
                  <li><strong>Planned Snacks Over Grazing:</strong> If snacking, choose intentional protein anchors (cottage cheese, Greek yoghurt, boiled eggs) rather than impulsive grazing.</li>
                  <li><strong>Eliminating Liquid Calories:</strong> Replace sweetened drinks, commercial fruit juices, and syrup-laden coffees with water, black coffee, or unsweetened tea.</li>
                  <li><strong>Whole-Food Swaps Over Ultra-Processed Foods:</strong> Prioritise single-ingredient, minimally processed pantry and fridge staples over hyper-palatable packaged items.</li>
                </ol>
              </div>

              <h4 style="color: #2C3539; margin-top: 24px; margin-bottom: 8px;">The 30/40/30 Plate-Building Template</h4>
              <p style="font-size: 15px;">When plating lunch or dinner, use this quick visual reference:</p>
              <ul style="font-size: 15px; line-height: 1.6; margin-bottom: 20px;">
                <li><strong>Palm of Protein (30%):</strong> Lean Canterbury beef, chicken breast, salmon, eggs, or tofu.</li>
                <li><strong>Fist of Complex Carbs (40%):</strong> Kumara, potatoes, brown rice, quinoa, or whole oats.</li>
                <li><strong>Thumb of Healthy Fats (30%):</strong> Extra virgin olive oil, avocado, or raw nuts.</li>
                <li><strong>2 Cupped Hands of Greens:</strong> Leafy spinach, broccoli, beans, or seasonal salad.</li>
              </ul>

              <div style="background: #0f172a; color: #ffffff; padding: 20px; border-radius: 10px; margin: 28px 0; text-align: center;">
                <p style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">Need coach-led support and a progressive strength routine?</p>
                <a href="https://wrkpersonaltraining.co.nz/personal-training" style="display: inline-block; background: #ffffff; color: #0f172a; padding: 10px 20px; border-radius: 6px; font-weight: bold; text-decoration: none; font-size: 14px;">Explore In-Person Coaching in Addington &rarr;</a>
              </div>

              <p style="margin-top: 24px; font-size: 14px; color: #64748b;">
                The Coaching Team at WRK Personal Training<br/>
                12 Show Place, Addington, Christchurch<br/>
                <a href="https://wrkpersonaltraining.co.nz" style="color: #2C3539;">wrkpersonaltraining.co.nz</a>
              </p>
            </div>
          `
        };

        await Promise.allSettled([
          transporter.sendMail(adminMail),
          transporter.sendMail(userMail)
        ]);
        console.log("14-Day Fat Loss Foundations emails dispatched successfully");
      } catch (mailErr: any) {
        console.error("Nodemailer error in fat-loss-guide API:", mailErr?.message || mailErr);
      }
    }

    // 2. MailerLite Sync
    const rawKey = process.env.MAILERLITE_API_KEY || "";
    const MAILERLITE_API_KEY = rawKey.replace(/^"|"$/g, '').trim();
    const MAILERLITE_PROSPECT_GROUP = "195641787200570883";

    if (MAILERLITE_API_KEY) {
      try {
        const payload = {
          email: cleanEmail,
          fields: {
            interest: "14-Day Fat Loss Foundations PDF"
          },
          groups: [MAILERLITE_PROSPECT_GROUP]
        };

        const mlRes = await fetch('https://connect.mailerlite.com/api/subscribers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        if (!mlRes.ok && mlRes.status !== 401) {
          await fetch('https://connect.mailerlite.com/api/subscribers', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
              'Accept': 'application/json'
            },
            body: JSON.stringify({ email: cleanEmail, groups: [MAILERLITE_PROSPECT_GROUP] })
          });
        }
        console.log("MailerLite lead sync completed for:", cleanEmail);
      } catch (mlErr: any) {
        console.error("MailerLite sync error:", mlErr?.message || mlErr);
      }
    }

    // 3. Google Sheets Webhook
    const sheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (sheetsWebhookUrl) {
      try {
        await fetch(sheetsWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'fat_loss_foundations_lead_magnet',
            date: new Date().toISOString(),
            email: cleanEmail
          })
        });
        console.log("Google Sheets logged for:", cleanEmail);
      } catch (sheetsErr: any) {
        console.error("Google Sheets sync error:", sheetsErr?.message || sheetsErr);
      }
    }
  } catch (overallErr: any) {
    console.error("Background error in fat-loss-guide handler:", overallErr?.message || overallErr);
  }

  // Always return 200 OK
  return res.status(200).json({
    success: true,
    message: "14-Day Fat Loss Foundations Guide requested successfully",
    downloadUrl: pdfDownloadUrl
  });
}

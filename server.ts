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
      console.error("Missing GitHub credentials");
      return res.status(500).json({ 
        error: "GitHub credentials not configured. Please set GITHUB_TOKEN, GITHUB_OWNER, and GITHUB_REPO environment variables." 
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

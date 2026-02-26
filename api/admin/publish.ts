import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Octokit } from "octokit";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

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
}

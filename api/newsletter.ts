import type { VercelRequest, VercelResponse } from '@vercel/node';
import { subscribeToNewsletter } from '../services/newsletter.js';

export const maxDuration = 30;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, error: 'Method not allowed.' });
  }
  const result = await subscribeToNewsletter(req.body?.email, process.env.MAILERLITE_API_KEY);
  return res.status(result.status).json(result.body);
}

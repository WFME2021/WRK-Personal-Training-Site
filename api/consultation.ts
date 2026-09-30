import type { VercelRequest, VercelResponse } from '@vercel/node';
import * as nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, phone, coachingInterest, notes } = req.body || {};

  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Name, email, and phone number are required.' });
  }

  const cleanName = String(name).trim();
  const cleanEmail = String(email).trim().toLowerCase();
  const cleanPhone = String(phone).trim();
  const cleanInterest = coachingInterest ? String(coachingInterest).trim() : 'General Inquiry';
  const cleanNotes = notes ? String(notes).trim() : '';

  try {
    const port = Number(process.env.SMTP_PORT) || 587;
    const isSecure = port === 465;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'mail.privateemail.com',
      port: port,
      secure: isSecure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS?.replace(/^"|"$/g, '').trim(),
      },
    });

    const primaryFrom = process.env.SMTP_FROM || process.env.SMTP_USER || '"WRK Personal Training" <info@wrkpersonaltraining.co.nz>';
    const recipient = process.env.CONTACT_EMAIL || 'info@wrkpersonaltraining.co.nz';

    const mailOptions = {
      from: primaryFrom,
      to: recipient,
      replyTo: cleanEmail,
      subject: `🚨 New Studio Consultation Request: ${cleanName}`,
      text: `
New Studio Consultation Request

Name: ${cleanName}
Email: ${cleanEmail}
Phone Number to Call: ${cleanPhone}
Focus Area: ${cleanInterest}
Notes / Goals: ${cleanNotes || 'None provided'}

Submitted from /personal-training via WRK Consultation Engine
      `.trim(),
      html: `
<h2>New Studio Consultation Request</h2>
<p><strong>Name:</strong> ${cleanName}</p>
<p><strong>Email:</strong> <a href="mailto:${cleanEmail}">${cleanEmail}</a></p>
<p><strong>Phone Number to Call:</strong> <a href="tel:${cleanPhone}">${cleanPhone}</a></p>
<p><strong>Focus Area:</strong> ${cleanInterest}</p>
<p><strong>Notes / Goals:</strong> ${cleanNotes ? cleanNotes.replace(/\n/g, '<br/>') : 'None provided'}</p>
<p style="color: #64748b; font-size: 12px; margin-top: 20px;">Submitted from /personal-training via WRK Consultation Engine</p>
      `.trim(),
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Studio consultation notification email dispatched successfully');
    } catch (emailError: any) {
      console.error('Failed to send consultation email on primary envelope:', emailError?.message);
      // Fallback envelope handling if Namecheap rejects custom From header
      if (process.env.SMTP_USER && primaryFrom !== process.env.SMTP_USER) {
        try {
          await transporter.sendMail({
            ...mailOptions,
            from: process.env.SMTP_USER,
          });
          console.log('Studio consultation notification sent via fallback SMTP_USER envelope');
        } catch (fallbackError: any) {
          console.error('Fallback consultation email dispatch also failed:', fallbackError?.message);
        }
      }
    }

    // --- MailerLite Integration ---
    const rawKey = process.env.MAILERLITE_API_KEY || '';
    const MAILERLITE_API_KEY = rawKey.replace(/^"|"$/g, '').trim();
    // Default prospect group: 195641787200570883
    const MAILERLITE_PROSPECT_GROUP = '195641787200570883';

    if (MAILERLITE_API_KEY) {
      try {
        const fields: Record<string, any> = {
          name: cleanName,
          phone: cleanPhone,
          interest: cleanInterest,
          lead_source: 'studio_consultation',
        };

        const subscriberPayload = {
          email: cleanEmail,
          fields: fields,
          groups: [MAILERLITE_PROSPECT_GROUP],
        };

        const mlRes = await fetch('https://connect.mailerlite.com/api/subscribers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
            'Accept': 'application/json',
          },
          body: JSON.stringify(subscriberPayload),
        });

        if (!mlRes.ok && mlRes.status !== 401) {
          // Minimal fallback
          await fetch('https://connect.mailerlite.com/api/subscribers', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
              'Accept': 'application/json',
            },
            body: JSON.stringify({ email: cleanEmail, groups: [MAILERLITE_PROSPECT_GROUP] }),
          });
        }
        console.log('MailerLite subscriber synced for consultation lead:', cleanEmail);
      } catch (mlErr: any) {
        console.error('MailerLite sync error:', mlErr?.message || mlErr);
      }
    }

    // --- Google Sheets Webhook Integration ---
    const sheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (sheetsWebhookUrl) {
      try {
        await fetch(sheetsWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            type: 'Studio Consultation',
            name: cleanName,
            email: cleanEmail,
            phone: cleanPhone,
            coachingInterest: cleanInterest,
            notes: cleanNotes,
            source: '/personal-training',
          }),
        });
        console.log('Google Sheets synced for consultation request');
      } catch (sheetErr: any) {
        console.error('Google Sheets sync error:', sheetErr?.message || sheetErr);
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Consultation request received successfully.',
    });
  } catch (err: any) {
    console.error('General error handling studio consultation:', err);
    return res.status(500).json({ error: 'Failed to process consultation request.' });
  }
}

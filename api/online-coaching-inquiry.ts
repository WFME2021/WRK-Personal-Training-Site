import type { VercelRequest, VercelResponse } from '@vercel/node';
import * as nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, phone, coachingFocus, trainingLocation, notes } = req.body || {};

  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Name, email, and phone are required.' });
  }

  const cleanName = String(name).trim();
  const cleanEmail = String(email).trim().toLowerCase();
  const cleanPhone = String(phone).trim();
  const cleanFocus = coachingFocus ? String(coachingFocus).trim() : 'glp1';
  const cleanLocation = trainingLocation ? String(trainingLocation).trim() : 'gym';
  const cleanNotes = notes ? String(notes).trim() : '';

  const focusLabels: Record<string, string> = {
    glp1: 'GLP-1 Medication Muscle Defense',
    'fat-loss': 'Fat Loss & Joint-Safe Strength',
    menopause: 'Midlife & Menopause Resistance',
    hypertrophy: 'Muscle Hypertrophy / Recomposition',
  };

  const locationLabels: Record<string, string> = {
    gym: 'Commercial Gym Membership',
    'home-dumbbells': 'Home (Dumbbells / Bands)',
    'home-barbell': 'Home (Full Rack / Barbell)',
    bodyweight: 'Bodyweight Only / Starting Out',
  };

  const displayFocus = focusLabels[cleanFocus] || cleanFocus;
  const displayLocation = locationLabels[cleanLocation] || cleanLocation;

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

    const primaryFrom = process.env.SMTP_FROM || process.env.SMTP_USER || '"WRK Online Coaching" <info@wrkpersonaltraining.co.nz>';
    const recipient = process.env.CONTACT_EMAIL || 'info@wrkpersonaltraining.co.nz';

    const mailOptions = {
      from: primaryFrom,
      to: recipient,
      replyTo: cleanEmail,
      subject: `🚨 New Online Coaching Application: ${cleanName}`,
      text: `
New Online Coaching Application

Name: ${cleanName}
Email: ${cleanEmail}
Phone Number to Call: ${cleanPhone}
Primary Focus: ${displayFocus}
Training Setup: ${displayLocation}
Current Situation & Goals:
${cleanNotes || 'None provided'}

Submitted from /online-coaching via WRK Coaching Engine
      `.trim(),
      html: `
<h2>New Online Coaching Application</h2>
<p><strong>Name:</strong> ${cleanName}</p>
<p><strong>Email:</strong> <a href="mailto:${cleanEmail}">${cleanEmail}</a></p>
<p><strong>Phone Number to Call:</strong> <a href="tel:${cleanPhone}">${cleanPhone}</a></p>
<p><strong>Primary Focus:</strong> ${displayFocus}</p>
<p><strong>Training Setup:</strong> ${displayLocation}</p>
<p><strong>Current Situation & Goals:</strong></p>
<p>${cleanNotes ? cleanNotes.replace(/\n/g, '<br/>') : 'None provided'}</p>
<p style="color: #64748b; font-size: 12px; margin-top: 20px;">Submitted from /online-coaching via WRK Coaching Engine</p>
      `.trim(),
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Online coaching application email dispatched successfully');
    } catch (emailError: any) {
      console.error('Failed to send application email on primary envelope:', emailError?.message);
      if (process.env.SMTP_USER && primaryFrom !== process.env.SMTP_USER) {
        try {
          await transporter.sendMail({
            ...mailOptions,
            from: process.env.SMTP_USER,
          });
          console.log('Online coaching application sent via fallback SMTP_USER envelope');
        } catch (fallbackError: any) {
          console.error('Fallback email dispatch also failed:', fallbackError?.message);
        }
      }
    }

    // --- MailerLite Integration ---
    const rawKey = process.env.MAILERLITE_API_KEY || '';
    const MAILERLITE_API_KEY = rawKey.replace(/^"|"$/g, '').trim();
    const MAILERLITE_PROSPECT_GROUP = '195641787200570883';

    if (MAILERLITE_API_KEY) {
      try {
        const fields: Record<string, any> = {
          name: cleanName,
          phone: cleanPhone,
          interest: displayFocus,
          lead_source: 'online_coaching_application',
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
        console.log('MailerLite subscriber synced for online coaching applicant:', cleanEmail);
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
            type: 'Online Coaching Application',
            name: cleanName,
            email: cleanEmail,
            phone: cleanPhone,
            focus: displayFocus,
            trainingLocation: displayLocation,
            notes: cleanNotes,
            source: '/online-coaching',
          }),
        });
        console.log('Google Sheets synced for online coaching application');
      } catch (sheetErr: any) {
        console.error('Google Sheets sync error:', sheetErr?.message || sheetErr);
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Online coaching application received successfully.',
    });
  } catch (err: any) {
    console.error('General error handling online coaching application:', err);
    return res.status(500).json({ error: 'Failed to process application.' });
  }
}

import { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, answers, intervention, challenge, riskProfile, tag } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER || '"WRK Website" <info@wrkpersonaltraining.co.nz>',
      to: process.env.CONTACT_EMAIL || "info@wrkpersonaltraining.co.nz",
      subject: `New Medical Weight Loss Assessment — ${name}`,
      text: `=== New Assessment Unlocked ===
Name: ${name}
Email: ${email}
Intervention Path: ${intervention || (answers && answers.path) || 'Unknown'}
Risk Profile: ${riskProfile || 'Unknown'}
Tag: ${tag || 'Unknown'}
      `,
    };

    try {
      if (process.env.SMTP_USER) {
        await transporter.sendMail(mailOptions);
        console.log("Assessment email sent successfully");
      }
    } catch (emailError) {
      console.error("Failed to send assessment email:", emailError);
    }

    // --- MailerLite Integration ---
    const rawKey = process.env.MAILERLITE_API_KEY || "";
    const MAILERLITE_API_KEY = rawKey.replace(/^"|"$/g, '').trim();
    const rawGroupId = process.env.MAILERLITE_GROUP_ID || "";
    const MAILERLITE_GROUP_ID = rawGroupId.replace(/^"|"$/g, '').trim();

    if (MAILERLITE_API_KEY) {
      try {
        const subscriberPayloadV3 = {
          email: email,
          fields: {
            name: name
          },
          groups: MAILERLITE_GROUP_ID ? [MAILERLITE_GROUP_ID] : []
        };

        let mlResponse = await fetch('https://connect.mailerlite.com/api/subscribers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
            'Accept': 'application/json'
          },
          body: JSON.stringify(subscriberPayloadV3)
        });

        if (!mlResponse.ok && mlResponse.status === 401) {
          console.log('MailerLite v3 failed with 401, trying v2 API...');
          const subscriberPayloadV2 = {
            email: email,
            name: name,
            fields: {
              name: name
            }
          };
          
          const v2Endpoint = MAILERLITE_GROUP_ID 
            ? `https://api.mailerlite.com/api/v2/groups/${MAILERLITE_GROUP_ID}/subscribers`
            : 'https://api.mailerlite.com/api/v2/subscribers';

          mlResponse = await fetch(v2Endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-MailerLite-ApiKey': MAILERLITE_API_KEY,
              'Accept': 'application/json'
            },
            body: JSON.stringify(subscriberPayloadV2)
          });
        }

        if (!mlResponse.ok) {
          const errorText = await mlResponse.text();
          console.error('MailerLite API Error:', mlResponse.status, errorText);
        } else {
          console.log('Successfully added assessment lead to MailerLite');
        }
      } catch (mlError: any) {
        console.error('MailerLite Integration Failed:', mlError.message);
      }
    }

    // --- Google Sheets Webhook Integration ---
    const sheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (sheetsWebhookUrl) {
      try {
        const sheetPayload = {
          timestamp: new Date().toISOString(),
          type: "Assessment",
          name: name,
          email: email,
          intervention: intervention || (answers && answers.path),
          riskProfile: riskProfile,
          tag: tag
        };

        const sheetResponse = await fetch(sheetsWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(sheetPayload)
        });
        
        if (!sheetResponse.ok) {
          console.error('Google Sheets Webhook Error:', sheetResponse.status);
        } else {
          console.log('Successfully sent assessment to Google Sheets');
        }
      } catch (sheetError: any) {
        console.error('Google Sheets Integration Failed:', sheetError.message);
      }
    }

    res.json({ success: true, message: "Assessment results sent successfully" });
  } catch (error: any) {
    console.error("General error in /api/assessment:", error);
    res.status(500).json({ error: "Failed to process request" });
  }
}

import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, phone, message, interest, referralSource } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const port = Number(process.env.SMTP_PORT) || 587;
    const isSecure = port === 465;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: port,
      secure: isSecure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS?.replace(/^"|"$/g, ''),
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER || '"WRK Website" <info@wrkpersonaltraining.co.nz>',
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

    await transporter.sendMail(mailOptions);

    // --- MailerLite Integration ---
    const rawKey = process.env.MAILERLITE_API_KEY || "";
    const MAILERLITE_API_KEY = rawKey.replace(/^"|"$/g, '').trim();
    const rawGroupId = process.env.MAILERLITE_GROUP_ID || "";
    const MAILERLITE_GROUP_ID = rawGroupId.replace(/^"|"$/g, '').trim();

    if (MAILERLITE_API_KEY) {
      try {
        const fields: any = {
          name: name,
          phone: phone,
        };

        const subscriberPayloadV3 = {
          email: email,
          fields: fields,
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
            fields: fields
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
          console.log('Successfully added to MailerLite');
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
          type: "Contact Form",
          name: name,
          email: email,
          phone: phone || "",
          interest: interest || "",
          referralSource: referralSource || "",
          message: message
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
          console.log('Successfully sent to Google Sheets');
        }
      } catch (sheetError: any) {
        console.error('Google Sheets Integration Failed:', sheetError.message);
      }
    }

    res.json({ success: true, message: "Message sent successfully" });
  } catch (error: any) {
    console.error("General error in /api/contact:", error);
    res.status(500).json({ error: "Failed to process request" });
  }
}

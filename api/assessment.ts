import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import { calculateAssessmentResult } from '../assessment/scoring';
import { ASSESSMENT_QUESTIONS } from '../assessment/questions';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  const { name, email, phone, answers, preferred_format } = req.body || {};
  const triage = req.query.triage === '1';
  if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      typeof name !== 'string' || !name.trim() || typeof phone !== 'string' || !phone.trim() ||
      !answers || ASSESSMENT_QUESTIONS.some(q => {
        const selected = answers[q.id];
        return q.type === 'multiple'
          ? !Array.isArray(selected) || !selected.length || selected.some(id => !q.options.some(o => o.id === id))
          : typeof selected !== 'string' || !q.options.some(o => o.id === selected);
      }) || (triage && !['online', 'in_person'].includes(preferred_format))) {
    return res.status(400).json({ success: false, error: 'Please complete the assessment and contact details.' });
  }
  const result = calculateAssessmentResult(answers);
  const answerText = ASSESSMENT_QUESTIONS.map(q => {
    const selected = Array.isArray(answers[q.id]) ? answers[q.id] : [answers[q.id]];
    return `${q.question}\n${selected.map(id => q.options.find(o => o.id === id)?.label).join(', ')}`;
  }).join('\n\n');
  try {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) throw new Error('Email transport not configured');
    const port = Number(process.env.SMTP_PORT) || 587;
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS.replace(/^"|"$/g, '').trim() },
      connectionTimeout: 10000, greetingTimeout: 5000, socketTimeout: 10000
    });
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'info@wrkpersonaltraining.co.nz',
      replyTo: email.trim(),
      subject: `${triage ? 'PRIORITY REVIEW' : 'New GLP-1 Fitness Assessment'} - ${name.replace(/[\r\n]/g, ' ')} (${result.overallScore}/100)`,
      text: `${triage ? 'PRIORITY COACHING REVIEW REQUEST' : 'NEW ASSESSMENT'}
Name: ${name}
Email: ${email}
Phone: ${phone}
${triage ? `Preferred Format: ${preferred_format === 'online' ? 'Remote / Online Coaching' : 'In-Person (Addington Studio)'}` : ''}
Overall Score: ${result.overallScore}/100 (${result.overallLabel})
Priorities: ${result.primaryFocus}, ${result.secondaryFocus}, ${result.thirdFocus}
Version: ${result.assessmentVersion}

PILLAR SCORES
${result.domainScores.map(d => `${d.domain}: ${d.score}/100 (${d.label})`).join('\n')}

ALL ASSESSMENT ANSWERS
${answerText}

ACTION PLAN
${result.recommendations.map(r => `${r.domain}: ${r.headline}\n${r.explanation}\nFirst step: ${r.firstStep}`).join('\n\n')}

NEXT 7 DAYS
${result.sevenDayPlan.map(d => `${d.label}: ${d.action}`).join('\n')}`
    });
    if (triage) return res.status(200).json({ success: true });
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
          phone,
          score: result.overallScore,
          answers,
          result,
          intervention: result.primaryFocus,
          riskProfile: result.overallLabel,
          tag: result.assessmentVersion
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

const fetch = require('node-fetch');

async function run() {
  const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY?.replace(/^"|"$/g, '').trim();
  const MAILERLITE_PROSPECT_GROUP = "195641787200570883";
  
  const subscriberPayloadV3 = {
    email: 'test_prospect_123@example.com',
    groups: [MAILERLITE_PROSPECT_GROUP]
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
  
  if (!mlResponse.ok) {
    console.error("MailerLite v3 failed:", mlResponse.status, await mlResponse.text());
  } else {
    console.log("MailerLite v3 success:", await mlResponse.text());
  }
}
run();

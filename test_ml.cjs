const fetch = require('node-fetch');

async function run() {
  const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY?.replace(/^"|"$/g, '').trim();
  const MAILERLITE_PROSPECT_GROUP = process.env.MAILERLITE_GROUP_PROSPECT || process.env.MAILERLITE_GROUP_ID || "";
  
  console.log("Using ML Key:", MAILERLITE_API_KEY ? "EXISTS" : "MISSING");
  
  const fields = {
    glp1_fitness_score: 50,
    primary_focus: 'nutrition'
  };

  const subscriberPayloadV3 = {
    email: 'test_ml_api@example.com',
    fields: fields
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

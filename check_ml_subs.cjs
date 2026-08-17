const fetch = require('node-fetch');

async function run() {
  const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY?.replace(/^"|"$/g, '').trim();
  const MAILERLITE_PROSPECT_GROUP = "195641787200570883";
  
  const v2Endpoint = `https://api.mailerlite.com/api/v2/groups/${MAILERLITE_PROSPECT_GROUP}/subscribers`;
  
  const response = await fetch(v2Endpoint, {
    headers: {
      'X-MailerLite-ApiKey': MAILERLITE_API_KEY,
      'Accept': 'application/json'
    }
  });
  
  if (response.ok) {
    const data = await response.json();
    console.log("Recent Subscribers:");
    data.slice(0,3).forEach(s => console.log(s.email));
  }
}
run();

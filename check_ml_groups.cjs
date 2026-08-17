const fetch = require('node-fetch');

async function run() {
  const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY?.replace(/^"|"$/g, '').trim();
  
  const response = await fetch('https://connect.mailerlite.com/api/groups', {
    headers: {
      'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
      'Accept': 'application/json'
    }
  });
  
  if (response.ok) {
    const data = await response.json();
    console.log("Groups:", JSON.stringify(data.data.map(g => ({ id: g.id, name: g.name })), null, 2));
  } else {
    console.log("Error:", response.status, await response.text());
  }
}
run();

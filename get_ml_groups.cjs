const fetch = require('node-fetch');
async function test() {
    const rawKey = process.env.MAILERLITE_API_KEY || "";
    const MAILERLITE_API_KEY = rawKey.replace(/^"|"$/g, '').trim();
    
    const res = await fetch('https://connect.mailerlite.com/api/groups', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
            'Accept': 'application/json'
        }
    });
    
    console.log("Status:", res.status);
    console.log("Text:", await res.text());
}
test();

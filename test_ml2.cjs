const fetch = require('node-fetch');
async function test() {
    const rawKey = process.env.MAILERLITE_API_KEY || "";
    const MAILERLITE_API_KEY = rawKey.replace(/^"|"$/g, '').trim();

    const fields = {
      name: "Test User",
      interest: "test",
      referral_source: "test",
      notes: "test",
      message: "test"
    };
    const payload = {
        email: "random293847@example.com",
        fields: fields,
        groups: ["195641787200570883"]
    };
    
    const res = await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
            'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    
    console.log("Status:", res.status);
    console.log("Text:", await res.text());
}
test();

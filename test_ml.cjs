const fetch = require('node-fetch');
async function test() {
    const rawKey = process.env.MAILERLITE_API_KEY || "";
    const MAILERLITE_API_KEY = rawKey.replace(/^"|"$/g, '').trim();
    const MAILERLITE_GROUP_CONTACT = process.env.MAILERLITE_GROUP_CONTACT?.replace(/^"|"$/g, '').trim();

    console.log("Key length:", MAILERLITE_API_KEY.length);
    console.log("Group:", MAILERLITE_GROUP_CONTACT);

    const fields = {
      name: "Test User",
      interest: "test",
      referral_source: "test",
      notes: "test",
      message: "test"
    };
    const payload = {
        email: "test@example.com",
        fields: fields,
        groups: MAILERLITE_GROUP_CONTACT ? [MAILERLITE_GROUP_CONTACT] : []
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

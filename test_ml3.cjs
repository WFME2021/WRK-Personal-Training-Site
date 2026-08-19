const fetch = require('node-fetch');
async function test() {
    const rawKey = process.env.MAILERLITE_API_KEY || "";
    const MAILERLITE_API_KEY = rawKey.replace(/^"|"$/g, '').trim();

    const fields = {
              glp1_fitness_score: 72,
              primary_focus: "test",
              secondary_focus: "test",
              third_focus: "test",
              primary_goal: "test",
              glp1_status: "test",
              assessment_version: "test",
              assessment_date: "2026-08-19"
    };
    const payload = {
        email: "random2938479@example.com",
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

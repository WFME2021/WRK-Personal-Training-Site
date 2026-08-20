const fetch = require('node-fetch');

async function test() {
    const res = await fetch('https://wrkpersonaltraining.co.nz/api/assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: "Assessment Test User",
          email: "client.surfbreak.test@gmail.com",
          riskProfile: "High",
          tag: "Assessment"
        })
    });
    console.log(res.status, await res.text());
}
test();

const fetch = require('node-fetch');
async function test() {
    const res = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: "Test No Message",
          email: "test_no_message@example.com",
          message: ""
        })
    });
    console.log(res.status, await res.text());
}
test();

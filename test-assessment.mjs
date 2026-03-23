import fetch from 'node-fetch';

async function test() {
  const res = await fetch('http://localhost:3000/api/assessment', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Test User',
      email: 'test@example.com',
      answers: {
        'q1_location': 'chch',
        'q2_goal': 'build_muscle'
      }
    })
  });
  console.log(res.status);
  console.log(await res.text());
}
test();

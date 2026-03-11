async function check() {
  const res = await fetch("https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1920&q=80", { method: 'HEAD' });
  console.log(res.headers.get('content-type'));
}
check();

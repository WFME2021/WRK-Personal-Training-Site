async function check() {
  const res = await fetch('https://i.postimg.cc/fyFscJdc/pexels-allan-mas-5383718.jpg');
  const text = await res.text();
  console.log(res.status);
  console.log(text.substring(0, 100));
}
check();

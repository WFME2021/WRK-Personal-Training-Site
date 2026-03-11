const urls = [
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1517836357463-c25dfe94c0de?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1591035897819-f4bdf739f446?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1476480868291-40c4370371f3?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1501554697317-40c68b949325?auto=format&fit=crop&w=1920&q=80"
];

async function check() {
  for (const url of urls) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      const contentType = res.headers.get('content-type');
      if (!contentType || !contentType.startsWith('image/')) {
        console.log(url, 'Not an image:', contentType);
      }
    } catch (e) {
      console.log(url, 'Error');
    }
  }
}
check();

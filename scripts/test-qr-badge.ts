import QRCode from 'qrcode';
import sharp from 'sharp';
import fs from 'fs';

async function testQrBadge() {
  const qrSvg = await QRCode.toString('https://wrkpt.co.nz/assessment?src=handout', {
    type: 'svg',
    margin: 0,
    color: {
      dark: '#111827',
      light: '#ffffff00',
    },
  });

  const qrBase64 = Buffer.from(qrSvg).toString('base64');

  const w = 400;
  const h = 520;
  const cx = 200;
  const cy = 185;
  const outerR = 145;
  const textR = 126;
  const qrSize = 152;

  const circlePath = `M ${cx} ${cy - textR} A ${textR} ${textR} 0 1 1 ${cx - 0.1} ${cy - textR}`;

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
    <!-- White background with rounded corners and green border -->
    <rect x="6" y="6" width="${w - 12}" height="${h - 12}" rx="28" fill="#ffffff" stroke="#10b981" stroke-width="4" />

    <!-- Outer dashed circle -->
    <circle cx="${cx}" cy="${cy}" r="${outerR}" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6,5" />

    <!-- Circular text path definition -->
    <defs>
      <path id="textCircle" d="${circlePath}" />
    </defs>

    <!-- Circular text: • SCAN HERE • SCAN HERE • SCAN HERE • SCAN HERE • -->
    <text font-family="Helvetica, Arial, sans-serif" font-size="14.5" font-weight="bold" fill="#1f2937" letter-spacing="3.5">
      <textPath href="#textCircle" startOffset="0%">
        • SCAN HERE • SCAN HERE • SCAN HERE • SCAN HERE •
      </textPath>
    </text>

    <!-- Inner circle backing for QR code -->
    <circle cx="${cx}" cy="${cy}" r="92" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />

    <!-- Center QR code -->
    <image href="data:image/svg+xml;base64,${qrBase64}" x="${cx - qrSize / 2}" y="${cy - qrSize / 2}" width="${qrSize}" height="${qrSize}" />

    <!-- Bottom text -->
    <text x="${cx}" y="420" font-family="Helvetica, Arial, sans-serif" font-size="20" font-weight="bold" fill="#111827" text-anchor="middle">
      Scan for Free Assessment
    </text>
    <text x="${cx}" y="455" font-family="Helvetica, Arial, sans-serif" font-size="16" font-weight="bold" fill="#10b981" text-anchor="middle">
      wrkpersonaltraining.co...
    </text>
  </svg>
  `;

  const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();
  fs.writeFileSync('public/docs/qr-badge-test.png', pngBuffer);
  console.log('Badge generated successfully, size:', pngBuffer.length);
}

testQrBadge().catch(console.error);

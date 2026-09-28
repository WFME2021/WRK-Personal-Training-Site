import { PDFDocument, rgb, StandardFonts, PDFPage, RGB } from 'pdf-lib';
import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path';

async function generateHandout() {
  // A4 Size in points: 595.28 x 841.89
  const width = 595.28;
  const height = 841.89;

  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([width, height]);

  // Load standard fonts
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Color Palette matching the design
  const darkCharcoal = rgb(17 / 255, 24 / 255, 39 / 255);       // #111827
  const bodyText = rgb(55 / 255, 65 / 255, 81 / 255);           // #374151
  const mutedText = rgb(107 / 255, 114 / 255, 128 / 255);       // #6b7280
  const emeraldDark = rgb(6 / 255, 78 / 255, 59 / 255);         // #064e3b
  const emeraldMid = rgb(16 / 255, 185 / 255, 129 / 255);       // #10b981
  const emeraldLight = rgb(236 / 255, 253 / 255, 245 / 255);    // #ecfdf5
  const emeraldBorder = rgb(167 / 255, 243 / 255, 208 / 255);   // #a7f3d0
  const mintGreen = rgb(52 / 255, 211 / 255, 153 / 255);        // #34d399
  const spruceBg = rgb(11 / 255, 47 / 255, 36 / 255);           // #0b2f24
  const redText = rgb(220 / 255, 38 / 255, 38 / 255);           // #dc2626
  const borderGrey = rgb(229 / 255, 231 / 255, 235 / 255);      // #e5e7eb
  const cardBg = rgb(249 / 255, 250 / 255, 251 / 255);          // #f9fafb
  const white = rgb(1, 1, 1);

  const marginX = 36;
  const contentWidth = width - marginX * 2; // 523.28

  // Helper to wrap text
  function wrapText(text: string, maxWidth: number, font: typeof fontRegular, fontSize: number): string[] {
    const words = text.split(' ');
    const lines: string[] = [];
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const testWidth = font.widthOfTextAtSize(testLine, fontSize);
      if (testWidth <= maxWidth) {
        currentLine = testLine;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
  }

  // Helper to draw a crisp vector checkmark
  function drawCheckmark(p: PDFPage, x: number, y: number, size: number, color: RGB, thickness: number = 1.5) {
    p.drawLine({
      start: { x: x, y: y + size * 0.4 },
      end: { x: x + size * 0.35, y: y },
      thickness,
      color,
    });
    p.drawLine({
      start: { x: x + size * 0.35, y: y },
      end: { x: x + size, y: y + size * 0.85 },
      thickness,
      color,
    });
  }

  // Helper to draw a crisp lightning bolt
  function drawLightning(p: PDFPage, x: number, y: number, color: RGB) {
    p.drawLine({ start: { x: x + 6, y: y + 14 }, end: { x: x + 1, y: y + 6 }, thickness: 1.5, color });
    p.drawLine({ start: { x: x + 1, y: y + 6 }, end: { x: x + 5, y: y + 6 }, thickness: 1.5, color });
    p.drawLine({ start: { x: x + 5, y: y + 6 }, end: { x: x + 2, y: y }, thickness: 1.5, color });
  }

  // Helper to draw clock icon
  function drawClock(p: PDFPage, x: number, y: number, r: number, color: RGB) {
    p.drawCircle({ x, y, size: r, color: emeraldLight, borderColor: color, borderWidth: 1 });
    p.drawLine({ start: { x, y }, end: { x, y: y + r * 0.6 }, thickness: 0.8, color });
    p.drawLine({ start: { x, y }, end: { x: x + r * 0.5, y }, thickness: 0.8, color });
  }

  // --- TOP HEADER ---
  let cursorY = height - 42;

  // Provided by healthcare team badge
  const badgeW = 202;
  const badgeH = 22;
  page.drawRectangle({
    x: marginX,
    y: cursorY - badgeH,
    width: badgeW,
    height: badgeH,
    color: emeraldLight,
    borderColor: emeraldBorder,
    borderWidth: 1,
  });

  page.drawCircle({
    x: marginX + 13,
    y: cursorY - badgeH / 2,
    size: 5.5,
    color: emeraldDark,
  });
  drawCheckmark(page, marginX + 10, cursorY - badgeH / 2 - 2, 5.5, white, 1.2);

  page.drawText('PROVIDED BY YOUR HEALTHCARE TEAM', {
    x: marginX + 25,
    y: cursorY - badgeH + 7,
    font: fontBold,
    size: 7.5,
    color: emeraldDark,
  });

  // Top Right Logo: WRK. Personal Training
  const logoText = 'WRK.';
  const logoSub1 = 'PERSONAL TRAINING';
  const logoSub2 = 'Addington, Christchurch';
  page.drawText(logoText, {
    x: width - marginX - fontBold.widthOfTextAtSize(logoText, 19),
    y: cursorY - 14,
    font: fontBold,
    size: 19,
    color: darkCharcoal,
  });
  page.drawText(logoSub1, {
    x: width - marginX - fontBold.widthOfTextAtSize(logoSub1, 7.5),
    y: cursorY - 24,
    font: fontBold,
    size: 7.5,
    color: bodyText,
  });
  page.drawText(logoSub2, {
    x: width - marginX - fontRegular.widthOfTextAtSize(logoSub2, 7.5),
    y: cursorY - 33,
    font: fontRegular,
    size: 7.5,
    color: mutedText,
  });

  cursorY -= 48;

  // H1 Title
  page.drawText('Protecting Your Muscle & Energy on GLP-1 Therapy', {
    x: marginX,
    y: cursorY,
    font: fontBold,
    size: 20,
    color: darkCharcoal,
  });

  cursorY -= 17;
  page.drawText('Essential lifestyle support for patients on semaglutide, tirzepatide, or medical weight care.', {
    x: marginX,
    y: cursorY,
    font: fontRegular,
    size: 9.5,
    color: mutedText,
  });

  cursorY -= 14;

  // Divider
  page.drawLine({
    start: { x: marginX, y: cursorY },
    end: { x: width - marginX, y: cursorY },
    thickness: 0.75,
    color: borderGrey,
  });

  cursorY -= 12;

  // --- THE CLINICAL RATIONALE BANNER ---
  const bannerH = 68;
  const bannerY = cursorY - bannerH;
  page.drawRectangle({
    x: marginX,
    y: bannerY,
    width: contentWidth,
    height: bannerH,
    color: spruceBg,
    borderColor: spruceBg,
    borderWidth: 0,
  });

  // Icon badge left
  page.drawRectangle({
    x: marginX + 14,
    y: bannerY + 20,
    width: 26,
    height: 28,
    color: rgb(18 / 255, 68 / 255, 52 / 255),
    borderColor: rgb(34 / 255, 95 / 255, 75 / 255),
    borderWidth: 1,
  });
  drawLightning(page, marginX + 22, bannerY + 27, mintGreen);

  // Clinical rationale text
  page.drawText('THE CLINICAL RATIONALE', {
    x: marginX + 48,
    y: bannerY + 47,
    font: fontBold,
    size: 8.5,
    color: mintGreen,
  });

  page.drawText('During rapid weight loss, up to 25% to 40% of weight lost can come from muscle rather than fat.', {
    x: marginX + 48,
    y: bannerY + 31,
    font: fontRegular,
    size: 8.5,
    color: white,
  });
  page.drawText('Preserving muscle keeps your metabolism high and prevents long-term rebound.', {
    x: marginX + 48,
    y: bannerY + 18,
    font: fontRegular,
    size: 8.5,
    color: rgb(209 / 255, 250 / 255, 229 / 255),
  });

  // Divider inside banner
  const divX = width - marginX - 110;
  page.drawLine({
    start: { x: divX, y: bannerY + 10 },
    end: { x: divX, y: bannerY + bannerH - 10 },
    thickness: 1,
    color: rgb(24 / 255, 80 / 255, 62 / 255),
  });

  // 2-3x Weekly Strength
  page.drawText('2-3x', {
    x: divX + 26,
    y: bannerY + 34,
    font: fontBold,
    size: 20,
    color: mintGreen,
  });
  page.drawText('Weekly Strength', {
    x: divX + 16,
    y: bannerY + 20,
    font: fontRegular,
    size: 8.5,
    color: white,
  });

  cursorY = bannerY - 24;

  // --- SECTION: WHY PRESERVING MUSCLE MATTERS ---
  page.drawRectangle({
    x: marginX,
    y: cursorY - 1,
    width: 3.5,
    height: 12,
    color: emeraldMid,
  });
  page.drawText('WHY PRESERVING MUSCLE MATTERS', {
    x: marginX + 10,
    y: cursorY,
    font: fontBold,
    size: 9.5,
    color: darkCharcoal,
  });

  cursorY -= 14;

  const colGap = 12;
  const colWidth = (contentWidth - colGap * 2) / 3;
  const colH = 92;
  const colY = cursorY - colH;

  const musclePillars = [
    {
      title: 'Protects Metabolism',
      text: 'Muscle burns calories even at rest. Protecting it makes maintaining your goal weight significantly easier.',
    },
    {
      title: 'Guards Joints & Spine',
      text: 'Stronger muscles absorb impact, relieving strain from sensitive knees, hips, and lower back.',
    },
    {
      title: 'Everyday Vitality',
      text: 'Keeps daily life effortless-carrying groceries, climbing stairs, and staying active with family.',
    },
  ];

  musclePillars.forEach((pillar, i) => {
    const cardX = marginX + i * (colWidth + colGap);
    page.drawRectangle({
      x: cardX,
      y: colY,
      width: colWidth,
      height: colH,
      color: emeraldLight,
      borderColor: emeraldBorder,
      borderWidth: 0.75,
    });

    // Icon circle
    page.drawCircle({
      x: cardX + 18,
      y: colY + colH - 18,
      size: 9,
      color: white,
      borderColor: emeraldBorder,
      borderWidth: 0.5,
    });
    drawCheckmark(page, cardX + 13.5, colY + colH - 22, 8, emeraldMid, 1.3);

    // Title
    page.drawText(pillar.title, {
      x: cardX + 12,
      y: colY + colH - 40,
      font: fontBold,
      size: 9.5,
      color: darkCharcoal,
    });

    // Body
    const lines = wrapText(pillar.text, colWidth - 24, fontRegular, 8);
    lines.forEach((line, lineIdx) => {
      page.drawText(line, {
        x: cardX + 12,
        y: colY + colH - 55 - lineIdx * 11,
        font: fontRegular,
        size: 8,
        color: bodyText,
      });
    });
  });

  cursorY = colY - 24;

  // --- SECTION: 3 COMMON ROADBLOCKS (AND HOW WE SOLVE THEM) ---
  page.drawRectangle({
    x: marginX,
    y: cursorY - 1,
    width: 3.5,
    height: 12,
    color: emeraldMid,
  });
  page.drawText('3 COMMON ROADBLOCKS (AND HOW WE SOLVE THEM)', {
    x: marginX + 10,
    y: cursorY,
    font: fontBold,
    size: 9.5,
    color: darkCharcoal,
  });

  cursorY -= 14;

  const roadblocks = [
    {
      concern: '"I\'ve never lifted weights and commercial gyms intimidate me."',
      help: 'We train in a quiet, private Addington studio with only a few people around. No loud music, mirrors, or crowds. Simple, joint-friendly movements at your pace.',
    },
    {
      concern: '"I have zero appetite and eating protein makes me feel nauseous."',
      help: 'When full meals feel impossible, we introduce gentle "protein pacing"-small, easy-to-digest whole foods and liquid options that protect muscle without nausea.',
    },
    {
      concern: '"Some days I feel fatigued or low on energy from medication."',
      help: 'Every session is adjusted on the day. If your energy is low, we scale it right back. You are never pushed to exhaustion. Consistency beats intensity every time.',
    },
  ];

  const roadblockCardH = 54;
  const roadblockGap = 8;

  roadblocks.forEach((item) => {
    const cardY = cursorY - roadblockCardH;

    page.drawRectangle({
      x: marginX,
      y: cardY,
      width: contentWidth,
      height: roadblockCardH,
      color: white,
      borderColor: borderGrey,
      borderWidth: 0.75,
    });

    // Left Column: The Concern
    const leftColW = 210;

    // Red dot
    page.drawCircle({
      x: marginX + 16,
      y: cardY + roadblockCardH - 14,
      size: 3.5,
      color: redText,
    });
    page.drawText('THE CONCERN', {
      x: marginX + 24,
      y: cardY + roadblockCardH - 16,
      font: fontBold,
      size: 7.5,
      color: redText,
    });

    const concernLines = wrapText(item.concern, leftColW - 20, fontBold, 8.5);
    concernLines.forEach((cline, cidx) => {
      page.drawText(cline, {
        x: marginX + 16,
        y: cardY + roadblockCardH - 29 - cidx * 11,
        font: fontBold,
        size: 8.5,
        color: darkCharcoal,
      });
    });

    // Vertical separator
    page.drawLine({
      start: { x: marginX + leftColW, y: cardY + 6 },
      end: { x: marginX + leftColW, y: cardY + roadblockCardH - 6 },
      thickness: 0.5,
      color: borderGrey,
    });

    // Right Column: How WRK Helps
    const rightColX = marginX + leftColW + 16;
    const rightColW = contentWidth - leftColW - 28;

    drawCheckmark(page, rightColX, cardY + roadblockCardH - 16, 7, emeraldMid, 1.4);
    page.drawText('HOW WRK HELPS', {
      x: rightColX + 12,
      y: cardY + roadblockCardH - 16,
      font: fontBold,
      size: 7.5,
      color: emeraldMid,
    });

    const helpLines = wrapText(item.help, rightColW, fontRegular, 8);
    helpLines.forEach((hline, hidx) => {
      page.drawText(hline, {
        x: rightColX,
        y: cardY + roadblockCardH - 29 - hidx * 10.5,
        font: fontRegular,
        size: 8,
        color: bodyText,
      });
    });

    cursorY = cardY - roadblockGap;
  });

  cursorY -= 8;

  // --- SECTION: COACH CREDENTIALS RIBBON ---
  const coachRibbonH = 46;
  const coachY = cursorY - coachRibbonH;

  page.drawRectangle({
    x: marginX,
    y: coachY,
    width: contentWidth,
    height: coachRibbonH,
    color: cardBg,
    borderColor: borderGrey,
    borderWidth: 0.75,
  });

  // Black WRK circle
  page.drawCircle({
    x: marginX + 22,
    y: coachY + coachRibbonH / 2,
    size: 14,
    color: darkCharcoal,
  });
  page.drawText('WRK', {
    x: marginX + 13,
    y: coachY + coachRibbonH / 2 - 3,
    font: fontBold,
    size: 7.5,
    color: white,
  });

  // Header and pills
  const credX = marginX + 44;
  page.drawText('Coached by WRK Personal Training', {
    x: credX,
    y: coachY + coachRibbonH - 16,
    font: fontBold,
    size: 9,
    color: darkCharcoal,
  });

  // Pill 1: 20+ Years Coaching
  const p1X = credX + fontBold.widthOfTextAtSize('Coached by WRK Personal Training', 9) + 12;
  page.drawRectangle({
    x: p1X,
    y: coachY + coachRibbonH - 20,
    width: 90,
    height: 14,
    color: rgb(243 / 255, 244 / 255, 246 / 255),
    borderColor: borderGrey,
    borderWidth: 0.5,
  });
  page.drawText('20+ Years Coaching', {
    x: p1X + 7,
    y: coachY + coachRibbonH - 16.5,
    font: fontRegular,
    size: 7,
    color: bodyText,
  });

  // Pill 2: Specialised Support
  const p2X = p1X + 96;
  page.drawRectangle({
    x: p2X,
    y: coachY + coachRibbonH - 20,
    width: 92,
    height: 14,
    color: emeraldLight,
    borderColor: emeraldBorder,
    borderWidth: 0.5,
  });
  page.drawText('Specialised Support', {
    x: p2X + 8,
    y: coachY + coachRibbonH - 16.5,
    font: fontBold,
    size: 7,
    color: emeraldDark,
  });

  // Scope assurance text
  const scopeText = 'We work strictly within safe exercise technique and daily lifestyle habits-supporting your doctor\'s treatment plan without ever interfering with your medical prescriptions.';
  page.drawText(scopeText, {
    x: credX,
    y: coachY + 12,
    font: fontRegular,
    size: 7.5,
    color: mutedText,
  });

  cursorY = coachY - 14;

  // --- BOTTOM CTA BANNER: FREE 3-MINUTE ONLINE CHECK ---
  const ctaH = 94;
  const ctaY = cursorY - ctaH;

  page.drawRectangle({
    x: marginX,
    y: ctaY,
    width: contentWidth,
    height: ctaH,
    color: emeraldLight,
    borderColor: emeraldMid,
    borderWidth: 1.25,
  });

  // Left CTA Content
  const ctaContentW = contentWidth - 110;

  drawClock(page, marginX + 22, ctaY + ctaH - 14, 5, emeraldDark);
  page.drawText('FREE 3-MINUTE ONLINE CHECK', {
    x: marginX + 32,
    y: ctaY + ctaH - 17,
    font: fontBold,
    size: 8,
    color: emeraldDark,
  });

  // CTA Title
  page.drawText('Take the Free GLP-1 Muscle & Protein Score Assessment', {
    x: marginX + 16,
    y: ctaY + ctaH - 33,
    font: fontBold,
    size: 11,
    color: darkCharcoal,
  });

  // CTA Description
  const ctaDesc = 'Answer a few quick questions to assess your current training, protein intake, and recovery habits. You can also arrange a complimentary 20-minute discovery chat with our team at the Addington studio.';
  const descLines = wrapText(ctaDesc, ctaContentW - 20, fontRegular, 8);
  descLines.forEach((dline, didx) => {
    page.drawText(dline, {
      x: marginX + 16,
      y: ctaY + ctaH - 46 - didx * 10.5,
      font: fontRegular,
      size: 8,
      color: bodyText,
    });
  });

  // Contact line
  const contY = ctaY + 12;
  page.drawText('Call/Txt: 021 393 160', {
    x: marginX + 16,
    y: contY,
    font: fontBold,
    size: 8,
    color: emeraldDark,
  });

  page.drawText('Email: info@wrkpersonaltraining.co.nz', {
    x: marginX + 115,
    y: contY,
    font: fontRegular,
    size: 8,
    color: bodyText,
  });

  page.drawText('Studio: 12 Show Place, Addington', {
    x: marginX + 270,
    y: contY,
    font: fontRegular,
    size: 8,
    color: bodyText,
  });

  // Right QR Code
  const qrX = width - marginX - 86;
  const qrY = ctaY + 18;
  const qrSize = 68;

  // White box container for QR code
  page.drawRectangle({
    x: qrX - 4,
    y: ctaY + 8,
    width: qrSize + 8,
    height: ctaH - 16,
    color: white,
    borderColor: emeraldBorder,
    borderWidth: 0.75,
  });

  // Generate QR code data buffer
  const qrDataUrl = await QRCode.toDataURL('https://wrkpt.co.nz/assessment?src=patient-handout', {
    margin: 1,
    width: 256,
    color: {
      dark: '#111827',
      light: '#ffffff',
    },
  });
  const base64Data = qrDataUrl.replace(/^data:image\/png;base64,/, '');
  const qrImageBuffer = Buffer.from(base64Data, 'base64');
  const qrImage = await pdfDoc.embedPng(qrImageBuffer);

  page.drawImage(qrImage, {
    x: qrX,
    y: qrY,
    width: qrSize,
    height: qrSize,
  });

  // QR subtext
  page.drawText('Scan for Free Assessment', {
    x: qrX - 2,
    y: ctaY + 10,
    font: fontBold,
    size: 5.5,
    color: emeraldDark,
  });

  // Save PDF to /public/docs/WRK-GLP1-Patient-Handout.pdf and /public/docs/WRK-Clinician-Summary.pdf
  const pdfBytes = await pdfDoc.save();

  const outDir = path.resolve(process.cwd(), 'public/docs');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const targetPath1 = path.join(outDir, 'WRK-GLP1-Patient-Handout.pdf');
  const targetPath2 = path.join(outDir, 'WRK-Clinician-Summary.pdf');

  fs.writeFileSync(targetPath1, pdfBytes);
  fs.writeFileSync(targetPath2, pdfBytes);

  console.log(`Generated patient handout PDF successfully at: ${targetPath1} and ${targetPath2}`);
}

generateHandout().catch((err) => {
  console.error('Failed to generate PDF:', err);
  process.exit(1);
});

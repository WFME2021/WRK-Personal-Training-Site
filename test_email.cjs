const nodemailer = require("nodemailer");

async function run() {
  const port = Number(process.env.SMTP_PORT) || 587;
  const isSecure = port === 465;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: port,
    secure: isSecure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS ? process.env.SMTP_PASS.replace(/^"|"$/g, '') : '',
    },
  });

  const mailOptions = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER || '"WRK Website" <info@wrkpersonaltraining.co.nz>',
    to: process.env.SMTP_USER,
    subject: "Test Email",
    text: "Test"
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent!");
  } catch (e) {
    console.error("Email failed:", e);
  }
}
run();

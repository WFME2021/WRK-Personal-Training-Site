const nodemailer = require("nodemailer");

async function run() {
  const port = 465;
  const isSecure = true;

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
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    subject: "Test Email 465",
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

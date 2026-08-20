const nodemailer = require('nodemailer');
async function test() {
    console.log("SMTP_HOST:", process.env.SMTP_HOST);
    console.log("SMTP_PORT:", process.env.SMTP_PORT);
    console.log("SMTP_USER:", process.env.SMTP_USER);
    // Don't log pass obviously
}
test();

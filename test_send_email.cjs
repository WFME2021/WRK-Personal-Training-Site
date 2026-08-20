const nodemailer = require('nodemailer');
async function test() {
    try {
        const port = Number(process.env.SMTP_PORT) || 587;
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: port,
            secure: port === 465,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS?.replace(/^"|"$/g, '').trim(),
            },
            debug: true,
            logger: true
        });
        
        await transporter.verify();
        console.log("Transporter verification successful");
        
        const mailOptions = {
            from: process.env.SMTP_USER,
            to: "wfme2021@gmail.com",
            subject: "Test email from dev environment",
            text: "This is a test to see if SMTP is working."
        };
        
        const info = await transporter.sendMail(mailOptions);
        console.log("Sent successfully:", info.messageId);
    } catch (e) {
        console.error("Error:", e);
    }
}
test();

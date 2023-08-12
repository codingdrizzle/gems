import nodemailer from 'nodemailer';

const smtpConfig = {
    host: 'smtp.gmail.com',
    secure: false, // use SSL
    auth: {
        user: process.env.GMAIL_ADDRESS,
        pass: process.env.GMAIL_PASSWORD,
    },
}

const transporter = nodemailer.createTransport(smtpConfig);

export async function sendMail({ from, to, subject, html }) {
    try {
        await transporter.sendMail({
            from,
            to,
            subject,
            html,
        });
    } catch (e) {
        throw new Error(`Could not send email: ${e.message}`);
    }
}

import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const { EMAIL_HOST, EMAIL_PORT, EMAIL_USERNAME, EMAIL_PASSWORD } = process.env;

export default async function sendEmail(email: string, subject: string, html: string): Promise<boolean> {
    try {
        const transporter = nodemailer.createTransport({
            host: EMAIL_HOST,
            port: Number(EMAIL_PORT),
            auth: {
                type: 'login',
                user: EMAIL_USERNAME,
                pass: EMAIL_PASSWORD,
            },
            secure: true,
        });

        await transporter.verify();

        const mailOptions = {
            from: EMAIL_USERNAME,
            to: email,
            subject,
            text: '',
            html,
        };

        await transporter.sendMail(mailOptions);
        return true;
    } catch (error) {
        console.error('Email error:', error);
        return false;
    }
};


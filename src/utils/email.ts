import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ErrorType = {
    message?: string;
    code?: string;
    response?: string;
    responseCode?: number;
};

const { EMAIL_HOST, EMAIL_PORT, EMAIL_USERNAME, EMAIL_PASSWORD } = process.env;

export default async function sendEmail(
    email: string,
    subject: string,
    html: string
): Promise<boolean | ErrorType> {
    try {
        const transporter = nodemailer.createTransport({
            host: EMAIL_HOST,
            port: Number(EMAIL_PORT),
            auth: {
                type: 'login',
                user: EMAIL_USERNAME,
                pass: EMAIL_PASSWORD,
            },
            secure: false,
            tls: {
                ciphers: 'SSLv3',
            },
        });

        // await transporter.verify();

        const mailOptions = {
            from: EMAIL_USERNAME,
            to: email,
            subject,
            text: '',
            html,
        };

        await transporter.sendMail(mailOptions);
        return true;
    } catch (err) {
        const error = err as Partial<ErrorType>;


        return {
            message: error.message,
            code: error.code,
            response: error.response,
            responseCode: error.responseCode,
        };
    }
}

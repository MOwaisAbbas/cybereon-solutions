import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

type ErrorType = {
    message?: string;
    code?: string;
    response?: string;
    responseCode?: number;
};

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = process.env.EMAIL_USERNAME; // e.g. 'info@mydomain.com'

export default async function sendEmail(
    email: string,
    subject: string,
    html: string
): Promise<boolean | ErrorType> {
    try {
        const response = await resend.emails.send({
            from: FROM_EMAIL!,
            to: email,
            subject,
            html,
        });

        if (response.error) {
            return {
                message: response.error.message,
                response: response.error.name,
            };
        }

        return true;
    } catch (err: any) {
        return {
            message: err.message,
            code: err.code,
            response: err.response,
            responseCode: err.responseCode,
        };
    }
}
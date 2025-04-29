import dbConnect from '@/lib/mongodb';
import Newsletter from '@/models/newsletter.model';
import { newsLetterMailContent } from '@/utils/constant';
import sendEmail from '@/utils/email';
import { NextResponse } from 'next/server';

// GET all newsletters
export async function GET() {
    try {
        await dbConnect();
        const newsletters = await Newsletter.find();
        return NextResponse.json({ success: true, newsletters });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: 'Failed to fetch newsletters' }, { status: 500 });
    }
}

// CREATE a new newsletter subscription
export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json({ success: false, message: 'Email required' }, { status: 400 });
        }

        await dbConnect();
        const newsletter = await Newsletter.create({ email });

        await sendEmail(email, "Thanks to subscribe our newsletter.", newsLetterMailContent);
        await sendEmail(process.env.EMAIL_USERNAME, 'Someone is follow our Newsletter!', `Email : ${email}`);


        return NextResponse.json({ success: true, newsletter }, { status: 201 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: 'Failed to subscribe Newsletter' }, { status: 500 });
    }
}
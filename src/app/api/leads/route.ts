import dbConnect from '@/lib/mongodb';
import Lead from '@/models/leads.model';
import sendEmail from '@/utils/email';
import { NextResponse } from 'next/server';

// GET all leads
export async function GET() {
    try {
        await dbConnect();
        const leads = await Lead.find();
        return NextResponse.json({ success: true, leads });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: 'Failed to fetch leads' }, { status: 500 });
    }
}

// CREATE a new lead
export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json({ success: false, message: 'All fields are required' }, { status: 400 });
        }

        const HTMLcontent = `
        <div style="background-color: #f9f9f9; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 2rem;">
  <div style="max-width: 500px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); overflow: hidden;">
    
    <!-- Header / Branding -->
    <div style="background-color: #16364D; color: #fff; padding: 1.5rem; text-align: center;">
      <h2 style="margin: 0;">🌟 CyberEon Solutions</h2>
    </div>
    
    <!-- Message Body -->
    <div style="padding: 1.5rem; color: #16364D;">
      <p><strong>Name:</strong> <span style="margin-left: 8px;">${name || ''}</span></p>
      <p><strong>Email:</strong> <span style="margin-left: 8px;">${email || ''}</span></p>
      <p><strong>Message:</strong> <br><span style="display: block; margin-top: 5px;">${message || ''}</span></p>
    </div>

    <!-- Footer / Social Handles -->
    <div style="background-color: #f1f1f1; padding: 1rem; text-align: center; font-size: 14px; color: #777;">
      <p style="margin-top: 10px;">&copy; ${new Date().getFullYear()} YourCompany. All rights reserved.</p>
    </div>
    
  </div>
</div>

    `
        await dbConnect();
        const lead = await Lead.create({ name, email, message });


        await sendEmail(email, "Thanks for contacting us!", HTMLcontent);
        await sendEmail(process.env.EMAIL_USERNAME, "New message from Contact Us form", HTMLcontent);



        return NextResponse.json({ success: true, lead }, { status: 201 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: 'Failed to create lead' }, { status: 500 });
    }
}

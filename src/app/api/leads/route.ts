import dbConnect from '@/lib/mongodb';
import Lead from '@/models/leads.model';
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

        await dbConnect();
        const lead = await Lead.create({ name, email, message });

        return NextResponse.json({ success: true, lead }, { status: 201 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: 'Failed to create lead' }, { status: 500 });
    }
}

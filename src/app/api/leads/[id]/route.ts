import dbConnect from '@/lib/mongodb';
import Newsletter from '@/models/newsletter.model';
import { NextResponse } from 'next/server';

interface Params {
    params: { id: string };
}

// GET single newsletter subscription by ID
export async function GET(_: Request, { params }: Params) {
    try {
        await dbConnect();
        const newsletter = await Newsletter.findById(params.id);
        if (!newsletter) {
            return NextResponse.json({ success: false, message: 'Newsletter subscription not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, newsletter });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Invalid ID or server error' }, { status: 400 });
    }
}

// UPDATE newsletter subscription by ID
export async function PUT(request: Request, { params }: Params) {
    try {
        const { email } = await request.json();
        if (!email) {
            return NextResponse.json({ success: false, message: 'Email is required' }, { status: 400 });
        }

        await dbConnect();
        const updatedNewsletter = await Newsletter.findByIdAndUpdate(params.id, { email }, { new: true });

        if (!updatedNewsletter) {
            return NextResponse.json({ success: false, message: 'Newsletter subscription not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, newsletter: updatedNewsletter });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Failed to update subscription' }, { status: 400 });
    }
}

// DELETE newsletter subscription by ID
export async function DELETE(_: Request, { params }: Params) {
    try {
        await dbConnect();
        const deletedNewsletter = await Newsletter.findByIdAndDelete(params.id);

        if (!deletedNewsletter) {
            return NextResponse.json({ success: false, message: 'Newsletter subscription not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, message: 'Subscription deleted' });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Failed to delete subscription' }, { status: 400 });
    }
}

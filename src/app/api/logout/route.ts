import { NextResponse } from 'next/server';

export async function GET() {
    const response = NextResponse.json({ success: true });

    // Expire the 'role' cookie
    response.cookies.set('role', '', {
        path: '/',
        expires: new Date(0),
    });

    return response;
}

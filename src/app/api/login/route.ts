// app/api/login/route.ts

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const body = await request.json();

    const { email, password, role = 'user' } = body;

    if (!password || !email) {
        return NextResponse.json({ success: false, message: 'All fields are required' }, { status: 400 });
    }

    if (process.env.admin_email === email && process.env.admin_password === password) {
        const response = NextResponse.json({ success: true });
        response.cookies.set('role', role, { path: '/' });
        return response;
    }

    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
}

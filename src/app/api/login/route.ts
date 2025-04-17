// app/api/login/route.ts

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const body = await request.json();
    const response = NextResponse.json({ success: true });
    response.cookies.set('role', body.role || 'user');

    return response;
}

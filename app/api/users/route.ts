import { NextRequest, NextResponse } from 'next/server';
import { getUsers, addUser, getUserByEmail } from '../../../lib/db-users';

export const runtime = 'nodejs';

export async function GET() {
  try {
    const users = await getUsers();
    const publicUsers = users.map(user => ({
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    }));

    return NextResponse.json(
      publicUsers,
      { headers: { 'Cache-Control': 'no-store' } }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: `Failed to fetch users: ${message}` }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body?.id || !body?.password || !body?.name) {
      return NextResponse.json({ error: 'Missing required fields: id, password, name' }, { status: 400 });
    }

    // Auto-generate email from customer id
    const email = `${body.id}@xiimba.local`;

    // Check if email already exists
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return NextResponse.json({ error: 'Customer ID already exists' }, { status: 400 });
    }

    // TODO: Hash password before storing (use bcrypt)
    // For now, storing plaintext - DO NOT USE IN PRODUCTION
    const newUser = await addUser({
      email: email,
      password: body.password,
      name: body.name,
      role: body.role || 'customer',
    });

    return NextResponse.json({
      success: true,
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        role: newUser.role,
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: `Unable to create user: ${message}` }, { status: 500 });
  }
}

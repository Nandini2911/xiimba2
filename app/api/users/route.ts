import { NextRequest, NextResponse } from 'next/server';
import { getUsers, addUser, findUser, User } from '../../../lib/users';

export const runtime = 'nodejs';

export async function GET() {
  const users = getUsers();
  return NextResponse.json(users.map(({ password, ...user }) => user));
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body?.id || !body?.password || !body?.name) {
    return NextResponse.json({ error: 'Missing required user fields' }, { status: 400 });
  }

  if (findUser(body.id)) {
    return NextResponse.json({ error: 'User ID already exists' }, { status: 400 });
  }

  const user: User = {
    id: body.id,
    password: body.password,
    name: body.name,
    role: 'customer',
  };

  addUser(user);
  return NextResponse.json({ success: true, user: { id: user.id, name: user.name, role: user.role } });
}

import { NextRequest, NextResponse } from 'next/server';
import { findUser } from '../../../../lib/users';

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body?.id || !body?.password) {
    return NextResponse.json({ error: 'Missing credentials' }, { status: 400 });
  }

  const user = findUser(body.id);
  if (!user || user.password !== body.password) {
    return NextResponse.json({ error: 'Invalid username or password' }, { status: 401 });
  }

  return NextResponse.json({
    success: true,
    user: {
      id: user.id,
      name: user.name,
      role: user.role,
    },
  });
}

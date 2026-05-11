import { NextRequest, NextResponse } from 'next/server';
import { findUser } from '../../../../lib/users';
import { getUserByEmail } from '../../../../lib/db-users';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body?.id || !body?.password) {
      return NextResponse.json(
        { error: 'Missing credentials' },
        { status: 400 }
      );
    }

    // FIRST: check old admin/staff login
    const localUser = findUser(body.id);

    if (localUser && localUser.password === body.password) {
      return NextResponse.json({
        success: true,
        user: {
          id: localUser.id,
          name: localUser.name,
          role: localUser.role,
        },
      });
    }

    // SECOND: check database customer login
    const email = `${body.id}@xiimba.local`;

    const dbUser = await getUserByEmail(email);

    if (!dbUser || dbUser.password !== body.password) {
      return NextResponse.json(
        { error: 'Invalid username or password' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      user: {
        id: dbUser.customerId,
        name: dbUser.name,
        role: dbUser.role,
      },
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Unknown error';

    return NextResponse.json(
      { error: `Login failed: ${message}` },
      { status: 500 }
    );
  }
}
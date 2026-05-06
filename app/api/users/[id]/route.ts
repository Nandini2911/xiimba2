import { NextRequest, NextResponse } from 'next/server';
import { findUser, deleteUser } from '../../../../lib/users';

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const user = findUser(params.id);
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  deleteUser(params.id);
  return NextResponse.json({ success: true });
}

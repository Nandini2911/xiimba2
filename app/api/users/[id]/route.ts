import { NextRequest, NextResponse } from 'next/server';
import { findUser, deleteUser } from '../../../../lib/users';

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const user = findUser(id);
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  deleteUser(id);
  return NextResponse.json({ success: true });
}

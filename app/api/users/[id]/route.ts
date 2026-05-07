import { NextRequest, NextResponse } from 'next/server';
import { findUser, deleteUser } from '../../../../lib/users';
import { deleteOrdersByCustomerId } from '../../../../lib/orders';

export const runtime = 'nodejs';

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const user = findUser(id);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    deleteUser(id);
    deleteOrdersByCustomerId(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: `Unable to delete customer: ${message}` }, { status: 500 });
  }
}

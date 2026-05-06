import { NextRequest, NextResponse } from 'next/server';
import { updateOrder } from '../../../../lib/orders';

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { status, location } = await request.json();
  updateOrder(id, status, location);
  return NextResponse.json({ success: true });
}
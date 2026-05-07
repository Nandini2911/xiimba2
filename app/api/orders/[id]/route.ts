import { NextRequest, NextResponse } from 'next/server';
import { updateOrder } from '../../../../lib/orders';

export const runtime = 'nodejs';

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const { status, location } = await request.json();
    updateOrder(id, status, location);
    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: `Unable to update order: ${message}` }, { status: 500 });
  }
}

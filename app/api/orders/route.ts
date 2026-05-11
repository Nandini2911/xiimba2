import { NextRequest, NextResponse } from 'next/server';
import { getOrders, addOrder } from '../../../lib/db-orders';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const customerId = searchParams.get('customerId') || undefined;

    const orders = await getOrders(customerId);
    return NextResponse.json(orders, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: `Failed to fetch orders: ${message}` }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body?.customerId || !body?.location || !Array.isArray(body.items) || body.items.length === 0) {
      return NextResponse.json(
        { error: 'Missing required fields: customerId, location, items (array)' },
        { status: 400 }
      );
    }

    const newOrder = await addOrder({
      customerId: body.customerId,
      status: body.status || 'pending',
      location: body.location,
      items: body.items,
    });

    return NextResponse.json({ success: true, order: newOrder });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: `Unable to create order: ${message}` }, { status: 500 });
  }
}

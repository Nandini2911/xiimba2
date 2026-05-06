import { NextRequest, NextResponse } from 'next/server';
import { getOrders, addOrder } from '../../../lib/orders';
import type { Order } from '../../../lib/orders';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const customerId = searchParams.get('customerId');

  const orders = getOrders(customerId || undefined);
  return NextResponse.json(orders);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body?.id || !body?.customerId || !body?.status || !body?.location || !Array.isArray(body.items)) {
    return NextResponse.json({ error: 'Missing required order fields' }, { status: 400 });
  }

  const order: Order = {
    id: body.id,
    customerId: body.customerId,
    status: body.status,
    location: body.location,
    items: body.items,
  };

  addOrder(order);
  return NextResponse.json({ success: true, order });
}
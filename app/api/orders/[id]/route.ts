import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Dummy DB functions
async function getOrderById(id: string) {
  return {
    id,
    status: "Processing",
  };
}

async function updateOrder(id: string, data: any) {
  return {
    id,
    ...data,
  };
}

async function deleteOrder(id: string) {
  return true;
}

type Context = {
  params: Promise<{
    id: string;
  }>;
};

// GET
export async function GET(
  request: Request,
  context: Context
) {
  try {
    const { id } = await context.params;

    const order = await getOrderById(id);

    if (!order) {
      return NextResponse.json(
        { error: "Order not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(order);

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch order" },
      { status: 500 }
    );
  }
}

// PUT
export async function PUT(
  request: Request,
  context: Context
) {
  try {
    const { id } = await context.params;

    const body = await request.json();

    const updatedOrder = await updateOrder(id, body);

    return NextResponse.json({
      success: true,
      order: updatedOrder,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to update order" },
      { status: 500 }
    );
  }
}

// DELETE
export async function DELETE(
  request: Request,
  context: Context
) {
  try {
    const { id } = await context.params;

    await deleteOrder(id);

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to delete order" },
      { status: 500 }
    );
  }
}
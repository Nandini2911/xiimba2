import { NextResponse } from "next/server";
import {
  getOrderById,
  updateOrder,
  deleteOrder,
} from "../../../../lib/db-orders";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

// GET Order
export async function GET(
  req: Request,
  context: RouteContext
) {
  try {
    const { id } = await context.params;

    const order = await getOrderById(id);

    if (!order) {
      return NextResponse.json(
        {
          error: "Order not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(order);

  } catch (error) {
    console.error("GET ORDER ERROR:", error);

    return NextResponse.json(
      {
        error: "Unable to fetch order",
      },
      {
        status: 500,
      }
    );
  }
}

// UPDATE Order
export async function PUT(
  req: Request,
  context: RouteContext
) {
  try {
    const { id } = await context.params;

    const body = await req.json();

    const order = await getOrderById(id);

    if (!order) {
      return NextResponse.json(
        {
          error: "Order not found",
        },
        {
          status: 404,
        }
      );
    }

    const updatedOrder = await updateOrder(id, body);

    return NextResponse.json({
      success: true,
      order: updatedOrder,
    });

  } catch (error) {
    console.error("UPDATE ORDER ERROR:", error);

    return NextResponse.json(
      {
        error: "Unable to update order",
      },
      {
        status: 500,
      }
    );
  }
}

// DELETE Order
export async function DELETE(
  req: Request,
  context: RouteContext
) {
  try {
    const { id } = await context.params;

    const order = await getOrderById(id);

    if (!order) {
      return NextResponse.json(
        {
          error: "Order not found",
        },
        {
          status: 404,
        }
      );
    }

    await deleteOrder(id);

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error("DELETE ORDER ERROR:", error);

    return NextResponse.json(
      {
        error: "Unable to delete order",
      },
      {
        status: 500,
      }
    );
  }
}
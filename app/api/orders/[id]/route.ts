import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET all orders
export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      orders: [],
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch orders",
      },
      {
        status: 500,
      }
    );
  }
}

// CREATE order
export async function POST(req: Request) {
  try {
    const body = await req.json();

    return NextResponse.json({
      success: true,
      order: body,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to create order",
      },
      {
        status: 500,
      }
    );
  }
}
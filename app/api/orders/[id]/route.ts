import fs from "fs/promises";
import path from "path";

export interface Order {
  id: string;
  status?: string;
  location?: string;
  items?: any[];
}

const filePath = path.join(process.cwd(), "data", "orders.json");

// Read orders
async function readOrders(): Promise<Order[]> {
  try {
    const data = await fs.readFile(filePath, "utf-8");

    return JSON.parse(data || "[]");
  } catch (error) {
    console.error("READ ORDERS ERROR:", error);

    return [];
  }
}

// Write orders
async function writeOrders(orders: Order[]) {
  await fs.writeFile(
    filePath,
    JSON.stringify(orders, null, 2)
  );
}

// Get order by ID
export async function getOrderById(id: string) {
  const orders = await readOrders();

  return orders.find((order) => order.id === id);
}

// Update order
export async function updateOrder(
  id: string,
  updatedData: Partial<Order>
) {
  const orders = await readOrders();

  const index = orders.findIndex(
    (order) => order.id === id
  );

  if (index === -1) {
    return null;
  }

  orders[index] = {
    ...orders[index],
    ...updatedData,
  };

  await writeOrders(orders);

  return orders[index];
}

// Delete order
export async function deleteOrder(id: string) {
  const orders = await readOrders();

  const filteredOrders = orders.filter(
    (order) => order.id !== id
  );

  await writeOrders(filteredOrders);

  return true;
}
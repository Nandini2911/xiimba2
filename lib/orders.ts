import { readJsonFile, writeJsonFile } from './json-store';

export interface OrderItem {
  name: string;
  quantity: number;
}

export interface Order {
  id: string;
  status: string;
  location: string;
  customerId: string;
  items: OrderItem[];
}

const ordersFileName = 'orders.json';

const readOrders = () => readJsonFile<Order[]>(ordersFileName, []);

const writeOrders = (orders: Order[]) => {
  writeJsonFile(ordersFileName, orders);
};

export const getOrders = (customerId?: string) => {
  const orders = readOrders();
  if (customerId) {
    return orders.filter(order => order.customerId === customerId);
  }
  return orders;
};

export const addOrder = (order: Order) => {
  const orders = readOrders();
  orders.push(order);
  writeOrders(orders);
};

export const updateOrder = (id: string, status?: string, location?: string, items?: OrderItem[]) => {
  const orders = readOrders();
  const updatedOrders = orders.map(order => {
    if (order.id !== id) {
      return order;
    }

    return {
      ...order,
      status: status || order.status,
      location: location || order.location,
      items: Array.isArray(items) && items.length > 0 ? items : order.items,
    };
  });

  writeOrders(updatedOrders);
};

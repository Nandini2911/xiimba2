// In-memory store for demo purposes
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

let orders: Order[] = [

  
];

export const getOrders = (customerId?: string) => {
  if (customerId) {
    return orders.filter(order => order.customerId === customerId);
  }
  return orders;
};

export const addOrder = (order: Order) => {
  orders.push(order);
};

export const updateOrder = (id: string, status?: string, location?: string, items?: OrderItem[]) => {
  const order = orders.find(o => o.id === id);
  if (order) {
    if (status) order.status = status;
    if (location) order.location = location;
    if (Array.isArray(items) && items.length > 0) order.items = items;
  }
};
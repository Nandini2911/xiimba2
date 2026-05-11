import prisma from './prisma';

export interface OrderItem {
  name: string;
  quantity: number;
  price?: number;
}

export interface Order {
  id: string;
  status: string;
  location: string;
  customerId: string;
  items: OrderItem[];
}

export const getOrders = async (customerId?: string) => {
  if (customerId) {
    return await prisma.order.findMany({
      where: { customerId },
      include: { items: true },
    });
  }
  return await prisma.order.findMany({
    include: { items: true },
  });
};

export const getOrderById = async (id: string) => {
  return await prisma.order.findUnique({
    where: { id },
    include: { items: true },
  });
};

export const addOrder = async (orderData: {
  customerId: string;
  status?: string;
  location: string;
  items: OrderItem[];
}) => {
  return await prisma.order.create({
    data: {
      customerId: orderData.customerId,
      status: orderData.status || 'pending',
      location: orderData.location,
      items: {
        create: orderData.items,
      },
    },
    include: { items: true },
  });
};

export const updateOrder = async (
  id: string,
  orderData: {
    status?: string;
    location?: string;
    items?: OrderItem[];
  }
) => {
  return await prisma.order.update({
    where: { id },
    data: {
      ...(orderData.status && { status: orderData.status }),
      ...(orderData.location && { location: orderData.location }),
      ...(orderData.items && {
        items: {
          deleteMany: {},
          create: orderData.items,
        },
      }),
    },
    include: { items: true },
  });
};

export const deleteOrder = async (id: string) => {
  return await prisma.order.delete({
    where: { id },
  });
};

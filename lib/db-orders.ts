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

  orderDate?: string;
  deliveryDate?: string;

  price?: number;
  fabricWidth?: string;

  paymentTerms?: string;
  paymentStatus?: string;

  advanceAmount?: number;
  dueAmount?: number;

  items: OrderItem[];
}

export const getOrders = async (customerId?: string) => {
  return await prisma.order.findMany({
    where: customerId
      ? {
          customer: {
            customerId: customerId,
          },
        }
      : undefined,

    include: {
      customer: true,
      items: true,
    },

    orderBy: {
      createdAt: 'desc',
    },
  });
};

export const getOrderById = async (id: string) => {
  return await prisma.order.findUnique({
    where: { id },

    include: {
      customer: true,
      items: true,
    },
  });
};

export const addOrder = async (orderData: {
  customerId: string;

  status?: string;
  location: string;

  orderDate?: string;
  deliveryDate?: string;

  price?: number;
  fabricWidth?: string;

  paymentTerms?: string;
  paymentStatus?: string;

  advanceAmount?: number;
  dueAmount?: number;

  items: OrderItem[];
}) => {
  return await prisma.order.create({
    data: {
      customerId: orderData.customerId,

      status: orderData.status || 'pending',
      location: orderData.location,

      orderDate: orderData.orderDate,
      deliveryDate: orderData.deliveryDate,

      price: orderData.price,
      fabricWidth: orderData.fabricWidth,

      paymentTerms: orderData.paymentTerms,
      paymentStatus: orderData.paymentStatus || 'Pending',

      advanceAmount: orderData.advanceAmount,
      dueAmount: orderData.dueAmount,

      items: {
        create: orderData.items.map((item) => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price,
        })),
      },
    },

    include: {
      customer: true,
      items: true,
    },
  });
};

export const updateOrder = async (
  id: string,
  orderData: {
    status?: string;
    location?: string;

    orderDate?: string;
    deliveryDate?: string;

    price?: number;
    fabricWidth?: string;

    paymentTerms?: string;
    paymentStatus?: string;

    advanceAmount?: number;
    dueAmount?: number;

    items?: OrderItem[];
  }
) => {
  return await prisma.order.update({
    where: { id },

    data: {
      ...(orderData.status && {
        status: orderData.status,
      }),

      ...(orderData.location && {
        location: orderData.location,
      }),

      ...(orderData.orderDate && {
        orderDate: orderData.orderDate,
      }),

      ...(orderData.deliveryDate && {
        deliveryDate: orderData.deliveryDate,
      }),

      ...(orderData.price !== undefined && {
        price: orderData.price,
      }),

      ...(orderData.fabricWidth && {
        fabricWidth: orderData.fabricWidth,
      }),

      ...(orderData.paymentTerms && {
        paymentTerms: orderData.paymentTerms,
      }),

      ...(orderData.paymentStatus && {
        paymentStatus: orderData.paymentStatus,
      }),

      ...(orderData.advanceAmount !== undefined && {
        advanceAmount: orderData.advanceAmount,
      }),

      ...(orderData.dueAmount !== undefined && {
        dueAmount: orderData.dueAmount,
      }),

      ...(orderData.items && {
        items: {
          deleteMany: {},
          create: orderData.items,
        },
      }),
    },

    include: {
      customer: true,
      items: true,
    },
  });
};

export const deleteOrder = async (id: string) => {
  return await prisma.order.delete({
    where: { id },
  });
};
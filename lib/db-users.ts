import prisma from './prisma';

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: 'customer' | 'staff';
}

export const getUsers = async () => {
  return await prisma.user.findMany();
};

export const getUserById = async (id: string) => {
  return await prisma.user.findUnique({
    where: { id },
  });
};

export const getUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: { email },
  });
};

export const addUser = async (userData: {
  email: string;
  password: string;
  name: string;
  role?: 'customer' | 'staff';
}) => {
  return await prisma.user.create({
    data: {
      email: userData.email,
      password: userData.password,
      name: userData.name,
      role: userData.role || 'customer',
    },
  });
};

export const updateUser = async (
  id: string,
  userData: {
    email?: string;
    password?: string;
    name?: string;
    role?: 'customer' | 'staff';
  }
) => {
  return await prisma.user.update({
    where: { id },
    data: userData,
  });
};

export const deleteUser = async (id: string) => {
  return await prisma.user.delete({
    where: { id },
  });
};

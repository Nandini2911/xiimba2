import prisma from './prisma';

export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const saveContactSubmission = async (data: ContactSubmission) => {
  return await prisma.contactSubmission.create({
    data,
  });
};

export const getContactSubmissions = async () => {
  return await prisma.contactSubmission.findMany({
    orderBy: { createdAt: 'desc' },
  });
};

export const deleteContactSubmission = async (id: string) => {
  return await prisma.contactSubmission.delete({
    where: { id },
  });
};

import { readJsonFile, writeJsonFile } from './json-store';

export interface User {
  id: string;
  password: string;
  name: string;
  role: 'customer' | 'staff';
}

const usersFileName = 'users.json';

const defaultUsers: User[] = [
  { id: 'user123', password: 'pass1', name: 'Customer 1', role: 'customer' },
  { id: 'user2', password: 'pass2', name: 'Customer 2', role: 'customer' },
  { id: 'admin', password: 'admin', name: 'Admin', role: 'staff' },
];

const readUsers = () => readJsonFile<User[]>(usersFileName, defaultUsers);

const writeUsers = (users: User[]) => {
  writeJsonFile(usersFileName, users);
};

export const getUsers = () => readUsers();

export const addUser = (user: User) => {
  const users = readUsers();
  users.push(user);
  writeUsers(users);
};

export const deleteUser = (id: string) => {
  const users = readUsers().filter(user => user.id !== id);
  writeUsers(users);
};

export const findUser = (id: string) => readUsers().find(user => user.id === id);

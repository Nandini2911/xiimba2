// In-memory store for users - edit this file to add real users
export interface User {
  id: string;
  password: string;
  name: string;
  role: 'customer' | 'staff';
}

let users: User[] = [
  // Add your real users here
  // Example format:
  // { id: 'john_doe', password: 'securePass123', name: 'John Doe', role: 'customer' },
  // { id: 'admin_staff', password: 'adminSecure456', name: 'Admin Staff', role: 'staff' },

  // Demo users - replace with real ones
  { id: 'user123', password: 'pass1', name: 'Customer 1', role: 'customer' },
  { id: 'user2', password: 'pass2', name: 'Customer 2', role: 'customer' },
  { id: 'admin', password: 'admin', name: 'Admin', role: 'staff' },
];

export const getUsers = () => users;

export const addUser = (user: User) => {
  users.push(user);
};

export const deleteUser = (id: string) => {
  users = users.filter(user => user.id !== id);
};

export const findUser = (id: string) => users.find(user => user.id === id);
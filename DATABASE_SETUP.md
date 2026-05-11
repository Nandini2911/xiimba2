# Database Setup Guide - Neon + Prisma

## Step 1: Set Up Neon Database

1. **Sign up for Neon** (free tier available):
   - Go to https://neon.tech
   - Create a new project
   - Copy your connection string

2. **Add to .env.local**:
   - Open `.env.local` in your project
   - Replace the `DATABASE_URL` with your actual Neon connection string
   - Example: `postgresql://user:password@host.neon.tech/xiimba_db?sslmode=require`

## Step 2: Push Schema to Database

Run this command to create all tables in your Neon database:

```bash
npx prisma migrate deploy
```

Or if this is your first time, use:

```bash
npx prisma db push
```

## Step 3: Generate Prisma Client

The client is already installed, but you can regenerate it:

```bash
npx prisma generate
```

## Step 4: Verify Database Connection

You can open Prisma Studio to view your database:

```bash
npx prisma studio
```

This opens a web UI at http://localhost:5555 where you can view and manage your data.

## Database Schema Overview

### User Table
- `id`: Unique identifier
- `email`: User email (unique)
- `password`: Hashed password
- `name`: Full name
- `role`: 'customer' or 'staff'
- `createdAt`, `updatedAt`: Timestamps

### Order Table
- `id`: Unique identifier
- `customerId`: Links to User
- `status`: 'pending', 'processing', 'shipped', 'delivered', 'cancelled'
- `location`: Shipping location
- `items`: Array of OrderItems
- `createdAt`, `updatedAt`: Timestamps

### OrderItem Table
- `id`: Unique identifier
- `name`: Item name
- `quantity`: Quantity ordered
- `price`: Price per unit (optional)
- `orderId`: Links to Order

### Product Table
- `id`: Unique identifier
- `name`: Product/Fabric name
- `description`: Product description
- `category`: Product category
- `price`: Product price
- `stock`: Stock quantity
- `image`: Image URL

### ContactSubmission Table
- `id`: Unique identifier
- `name`: Submitter name
- `email`: Submitter email
- `subject`: Message subject
- `message`: Message content
- `createdAt`: Submission timestamp

## Usage in API Routes

Instead of importing from `lib/users.ts` and `lib/orders.ts`, use the new database functions:

```typescript
import { getUsers, addUser, getUserById } from '@/lib/db-users';
import { getOrders, addOrder, updateOrder } from '@/lib/db-orders';

// Example: Get all users
const users = await getUsers();

// Example: Create new user
const newUser = await addUser({
  email: 'user@example.com',
  password: 'hashedPassword',
  name: 'John Doe',
  role: 'customer'
});
```

## Important Notes

⚠️ **Security**: 
- Always hash passwords before storing (use bcrypt or similar)
- Never store plain text passwords
- Use environment variables for sensitive data

⚠️ **Authentication**:
- Consider using NextAuth.js for complete auth solution
- Implement proper session management
- Add CSRF protection

## Migration from JSON to Database

Your existing JSON files (users.json, orders.json) can be migrated:

1. Read data from JSON files
2. Transform to match database schema
3. Insert into database using Prisma

Migration scripts have been created in `scripts/migrate.ts` (if needed).

## Next Steps

1. Update your API routes to use the new database functions
2. Implement password hashing with bcrypt
3. Consider adding authentication middleware
4. Set up environment variables for production
5. Test all API endpoints with real database

## Troubleshooting

**Connection Error**: 
- Verify DATABASE_URL is correct in .env.local
- Check Neon dashboard for active connections

**Migration Issues**:
- Run `npx prisma migrate reset` to reset database (dev only)
- Use `npx prisma studio` to inspect data

**Type Issues**:
- Regenerate Prisma client: `npx prisma generate`
- Clear node_modules and reinstall: `npm install`

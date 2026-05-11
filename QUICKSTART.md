# 🚀 Database Setup Quick Start

Your Next.js application is now configured to use **Neon PostgreSQL** with **Prisma ORM**. Follow these steps to get up and running.

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## Step 1️⃣: Create Neon Database Account

1. Go to **https://neon.tech**
2. Sign up with your email (free tier available)
3. Create a new project named `xiimba`
4. Copy your connection string (it looks like: `postgresql://user:password@host.neon.tech/xiimba_db?sslmode=require`)

## Step 2️⃣: Configure Environment Variables

1. Open `.env.local` in your project root
2. Replace the `DATABASE_URL` with your Neon connection string:

```bash
DATABASE_URL="postgresql://user:password@host.neon.tech/xiimba_db?sslmode=require"
```

**⚠️ Important**: 
- Keep this file SECRET - never commit it to Git
- It's already in `.gitignore`
- Don't share it with anyone

## Step 3️⃣: Push Database Schema

Run this command to create all tables in your Neon database:

```bash
npx prisma db push
```

You should see output like:
```
✓ Database synced with schema
✓ 5 tables created
```

## Step 4️⃣: (Optional) Migrate Existing JSON Data

If you want to move your existing users and orders from JSON files to the database:

```bash
npx ts-node scripts/migrate-data.ts
```

This will:
- Read data from `data/users.json`
- Read data from `data/orders.json`
- Insert everything into your PostgreSQL database
- Keep JSON files as backup

## Step 5️⃣: Test the Setup

Start your development server:

```bash
npm run dev
```

Test your API endpoints:

### Create a new user:
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123",
    "name": "Test User",
    "role": "customer"
  }'
```

### Get all users:
```bash
curl http://localhost:3000/api/users
```

### Create an order:
```bash
curl -X POST http://localhost:3000/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "customerId": "user123",
    "location": "New York, USA",
    "items": [
      {"name": "Fabric A", "quantity": 10, "price": 25.00},
      {"name": "Fabric B", "quantity": 5, "price": 35.00}
    ]
  }'
```

## Step 6️⃣: View Your Database

Open Prisma Studio to view and manage your data in a user-friendly UI:

```bash
npx prisma studio
```

This opens http://localhost:5555 in your browser.

---

## 📋 What's Changed

### New Files Created:
- `prisma/schema.prisma` - Database schema definition
- `.env.local` - Environment variables
- `lib/db-users.ts` - Database functions for users
- `lib/db-orders.ts` - Database functions for orders
- `lib/db-contact.ts` - Database functions for contact submissions
- `lib/prisma.ts` - Prisma client singleton
- `scripts/migrate-data.ts` - Migration script

### Updated Files:
- `app/api/users/route.ts` - Uses database instead of JSON
- `app/api/users/[id]/route.ts` - Uses database with GET, PUT, DELETE
- `app/api/orders/route.ts` - Uses database instead of JSON
- `app/api/orders/[id]/route.ts` - Uses database with GET, PUT, DELETE
- `app/api/contact/route.ts` - Saves submissions to database
- `package.json` - Added Prisma dependencies

### Old Files (Still Available):
- `lib/users.ts` - Can be removed after migration
- `lib/orders.ts` - Can be removed after migration
- `lib/json-store.ts` - Can be removed after migration
- `data/users.json` - Kept as backup
- `data/orders.json` - Kept as backup

---

## 🔐 Security & Production Checklist

Before deploying to production:

- [ ] **Hash passwords**: Install `bcrypt` and hash passwords before storing
- [ ] **Add authentication**: Implement login/session management
- [ ] **Environment variables**: Use proper secrets management
- [ ] **HTTPS**: Enable SSL/TLS
- [ ] **Database backups**: Set up automated backups in Neon
- [ ] **Rate limiting**: Add rate limit to API routes
- [ ] **Input validation**: Validate all inputs server-side
- [ ] **CORS**: Configure CORS properly

### Install bcrypt for password hashing:
```bash
npm install bcrypt
npm install -D @types/bcrypt
```

### Update password handling:
```typescript
import bcrypt from 'bcrypt';

// When creating user:
const hashedPassword = await bcrypt.hash(password, 10);
const user = await addUser({
  email,
  password: hashedPassword,
  name,
});

// When verifying password:
const isValid = await bcrypt.compare(plainPassword, hashedPassword);
```

---

## 🐛 Troubleshooting

### Error: "Unable to connect to database"
- ✓ Check `DATABASE_URL` is correct in `.env.local`
- ✓ Ensure your Neon project is active
- ✓ Check your internet connection

### Error: "PrismaClientInitializationError"
- ✓ Run `npx prisma generate` to regenerate Prisma client
- ✓ Delete `node_modules/.prisma` folder
- ✓ Run `npm install` again

### Error: "Table does not exist"
- ✓ Run `npx prisma db push` to create tables
- ✓ Check that migration completed successfully

### Prisma Studio won't open
- ✓ Make sure you have a working database connection
- ✓ Try killing the process and restarting

---

## 📚 Useful Commands

```bash
# View your database in UI
npx prisma studio

# Check database status
npx prisma db execute --stdin < query.sql

# Reset database (dev only!)
npx prisma migrate reset

# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate deploy

# View migration history
npx prisma migrate status
```

---

## 📖 Resources

- **Neon Docs**: https://neon.tech/docs
- **Prisma Docs**: https://www.prisma.io/docs
- **PostgreSQL**: https://www.postgresql.org/docs
- **Next.js API Routes**: https://nextjs.org/docs/app/building-your-application/routing/route-handlers

---

## 🆘 Need Help?

1. Check `DATABASE_SETUP.md` for detailed schema information
2. Review API route examples above
3. Open an issue or check community forums

Happy coding! 🎉

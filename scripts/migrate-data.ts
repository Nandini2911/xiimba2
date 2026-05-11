#!/usr/bin/env node

/**
 * Migration script to move data from JSON files to Neon PostgreSQL database
 * Run with: npx ts-node scripts/migrate-data.ts
 * 
 * This script:
 * 1. Reads users from data/users.json
 * 2. Reads orders from data/orders.json
 * 3. Inserts them into the PostgreSQL database via Prisma
 */

import prisma from '../lib/prisma';
import { readFileSync } from 'fs';
import { resolve } from 'path';

interface OldUser {
  id: string;
  password: string;
  name: string;
  role: 'customer' | 'staff';
}

interface OldOrder {
  id: string;
  status: string;
  location: string;
  customerId: string;
  items: Array<{
    name: string;
    quantity: number;
  }>;
}

async function migrateData() {
  try {
    console.log('🚀 Starting migration from JSON to PostgreSQL...\n');

    // Read users from JSON
    const usersPath = resolve(process.cwd(), 'data', 'users.json');
    const ordersPath = resolve(process.cwd(), 'data', 'orders.json');

    let users: OldUser[] = [];
    let orders: OldOrder[] = [];

    try {
      const usersData = readFileSync(usersPath, 'utf-8');
      users = JSON.parse(usersData);
      console.log(`✓ Read ${users.length} users from users.json`);
    } catch (error) {
      console.warn('⚠️  Could not read users.json - skipping user migration');
    }

    try {
      const ordersData = readFileSync(ordersPath, 'utf-8');
      orders = JSON.parse(ordersData);
      console.log(`✓ Read ${orders.length} orders from orders.json`);
    } catch (error) {
      console.warn('⚠️  Could not read orders.json - skipping order migration');
    }

    // Migrate users
    if (users.length > 0) {
      console.log('\n📝 Migrating users...');
      for (const user of users) {
        try {
          await prisma.user.create({
            data: {
              id: user.id,
              email: `${user.id}@xiimba.local`, // Generate email from id
              password: user.password,
              name: user.name,
              role: user.role || 'customer',
            },
          });
          console.log(`  ✓ Migrated user: ${user.name} (${user.id})`);
        } catch (error: any) {
          if (error.code === 'P2002') {
            console.log(`  ⚠️  User ${user.id} already exists - skipping`);
          } else {
            console.error(`  ✗ Error migrating user ${user.id}:`, error.message);
          }
        }
      }
    }

    // Migrate orders
    if (orders.length > 0) {
      console.log('\n📦 Migrating orders...');
      for (const order of orders) {
        try {
          // Check if customer exists
          const customer = await prisma.user.findUnique({
            where: { id: order.customerId },
          });

          if (!customer) {
            console.log(`  ⚠️  Customer ${order.customerId} not found - creating temporary user`);
            // Create a temporary customer if it doesn't exist
            await prisma.user.create({
              data: {
                id: order.customerId,
                email: `${order.customerId}@xiimba.local`,
                password: 'temp',
                name: `Customer ${order.customerId}`,
                role: 'customer',
              },
            });
          }

          await prisma.order.create({
            data: {
              id: order.id,
              customerId: order.customerId,
              status: order.status,
              location: order.location,
              items: {
                create: order.items.map((item) => ({
                  name: item.name,
                  quantity: item.quantity,
                })),
              },
            },
          });
          console.log(`  ✓ Migrated order: ${order.id}`);
        } catch (error: any) {
          if (error.code === 'P2002') {
            console.log(`  ⚠️  Order ${order.id} already exists - skipping`);
          } else {
            console.error(`  ✗ Error migrating order ${order.id}:`, error.message);
          }
        }
      }
    }

    console.log('\n✅ Migration complete!');
    console.log('\nNext steps:');
    console.log('1. Test your API endpoints with the migrated data');
    console.log('2. Run: npx prisma studio (to view data in UI)');
    console.log('3. Update any frontend code that references the JSON files');

  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

migrateData();

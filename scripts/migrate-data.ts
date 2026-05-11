#!/usr/bin/env node

/**
 * Migration script to move data from JSON files to Neon PostgreSQL database
 * Run with: npx ts-node scripts/migrate-data.ts
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
    console.log('🚀 Starting migration...\n');

    const usersPath = resolve(
      process.cwd(),
      'data',
      'users.json'
    );

    const ordersPath = resolve(
      process.cwd(),
      'data',
      'orders.json'
    );

    let users: OldUser[] = [];
    let orders: OldOrder[] = [];

    // READ USERS

    try {
      const usersData = readFileSync(
        usersPath,
        'utf-8'
      );

      users = JSON.parse(usersData);

      console.log(
        `✓ Read ${users.length} users`
      );
    } catch {
      console.warn(
        '⚠️ Could not read users.json'
      );
    }

    // READ ORDERS

    try {
      const ordersData = readFileSync(
        ordersPath,
        'utf-8'
      );

      orders = JSON.parse(ordersData);

      console.log(
        `✓ Read ${orders.length} orders`
      );
    } catch {
      console.warn(
        '⚠️ Could not read orders.json'
      );
    }

    // MIGRATE USERS

    if (users.length > 0) {
      console.log('\n📝 Migrating users...\n');

      for (const user of users) {
        try {
          await prisma.user.create({
            data: {
              id: user.id,

              customerId: user.id,

              email: `${user.id}@xiimba.local`,

              password: user.password,

              name: user.name,

              role: user.role || 'customer',
            },
          });

          console.log(
            `✓ Migrated user: ${user.name}`
          );
        } catch (error: any) {
          if (error.code === 'P2002') {
            console.log(
              `⚠️ User ${user.id} already exists`
            );
          } else {
            console.error(
              `✗ Error migrating user ${user.id}:`,
              error.message
            );
          }
        }
      }
    }

    // MIGRATE ORDERS

    if (orders.length > 0) {
      console.log('\n📦 Migrating orders...\n');

      for (const order of orders) {
        try {
          // CHECK CUSTOMER

          const customer =
            await prisma.user.findUnique({
              where: {
                id: order.customerId,
              },
            });

          // CREATE TEMP CUSTOMER IF NOT EXISTS

          if (!customer) {
            console.log(
              `⚠️ Customer ${order.customerId} not found`
            );

            await prisma.user.create({
              data: {
                id: order.customerId,

                customerId: order.customerId,

                email: `${order.customerId}@xiimba.local`,

                password: 'temp',

                name: `Customer ${order.customerId}`,

                role: 'customer',
              },
            });
          }

          // CREATE ORDER

          await prisma.order.create({
            data: {
              id: order.id,

              customerId: order.customerId,

              status: order.status,

              location: order.location,

              items: {
                create: order.items.map(
                  (item) => ({
                    name: item.name,

                    quantity:
                      item.quantity,
                  })
                ),
              },
            },
          });

          console.log(
            `✓ Migrated order: ${order.id}`
          );
        } catch (error: any) {
          if (error.code === 'P2002') {
            console.log(
              `⚠️ Order ${order.id} already exists`
            );
          } else {
            console.error(
              `✗ Error migrating order ${order.id}:`,
              error.message
            );
          }
        }
      }
    }

    console.log('\n✅ Migration complete!\n');
  } catch (error) {
    console.error(
      '❌ Migration failed:',
      error
    );

    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

migrateData();
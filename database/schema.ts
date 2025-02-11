import { integer, pgEnum, pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';

export const CATEGORY_ENUM = pgEnum('category', [
  'GAME',
  'BOOKS',
  'PET_SUPPLIES',
  'TOYS',
  'STATIONERY',
  'CLOTHING',
  'ELECTRONICS',
  'HOME',
  'OTHER',
]);

export const products = pgTable('products', {
  id: uuid('id').notNull().primaryKey().defaultRandom().unique(),
  title: varchar('title').notNull(),
  category: CATEGORY_ENUM('category').default('BOOKS'),
  description: text('description').notNull(),
  price: integer('price').notNull(),
  imageUrl: text('image_url').notNull(),
  rating: integer('rating').notNull(),
  stock: integer('stock').notNull().default(1),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updateddAt: timestamp('updated_at')
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

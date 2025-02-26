import { asc, desc } from 'drizzle-orm';

import { db } from '@/database';
import { products } from '@/database/schema';

export async function getSortedProducts(sort?: string) {
  let orderByCondition;

  switch (sort) {
    case 'price-desc':
      orderByCondition = desc(products.price);
      break;
    case 'price-asc':
      orderByCondition = asc(products.price);
      break;
    case 'name-asc':
      orderByCondition = asc(products.title);
      break;
    case 'name-desc':
      orderByCondition = desc(products.title);
      break;
    default:
      orderByCondition = desc(products.createdAt);
  }

  return await db.select().from(products).orderBy(orderByCondition);
}

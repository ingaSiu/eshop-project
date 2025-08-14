import { CATEGORY_ENUM, products } from '@/database/schema';
import { asc, count, desc, inArray } from 'drizzle-orm';

import { db } from '@/database';

export async function getSortedProducts(sort?: string, categories?: string[], page: number = 1, limit: number = 10) {
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

  const validCategories = categories?.filter((cat): cat is (typeof CATEGORY_ENUM.enumValues)[number] =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    CATEGORY_ENUM.enumValues.includes(cat as any),
  );

  const whereCondition =
    validCategories && validCategories.length > 0 ? inArray(products.category, validCategories) : undefined;

  const offset = (page - 1) * limit;

  const [items, totalCountResult] = await Promise.all([
    db.select().from(products).where(whereCondition).orderBy(orderByCondition).limit(limit).offset(offset),
    db.select({ count: count() }).from(products).where(whereCondition),
  ]);

  const totalCount = Number(totalCountResult[0]?.count ?? 0);

  return {
    items,
    totalCount,
  };
}

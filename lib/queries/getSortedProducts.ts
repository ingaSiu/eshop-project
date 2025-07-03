import { CATEGORY_ENUM, products } from '@/database/schema';
import { asc, desc, inArray } from 'drizzle-orm';

import { db } from '@/database';

export async function getSortedProducts(sort?: string, categories?: string[]) {
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

  const query = db
    .select()
    .from(products)
    .where(validCategories && validCategories.length > 0 ? inArray(products.category, validCategories) : undefined)
    .orderBy(orderByCondition);

  return await query;
}

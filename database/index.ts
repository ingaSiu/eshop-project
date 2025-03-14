import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';

config({ path: '.env.local' });

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined. Check your .env file.');
}

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle({ client: sql });

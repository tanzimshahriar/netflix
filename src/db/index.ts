import { sql } from '@vercel/postgres'
import { drizzle } from 'drizzle-orm/vercel-postgres'
// import { migrate } from 'drizzle-orm/vercel-postgres/migrator'

export const db = drizzle(sql)

// migrate(db, { migrationsFolder: './drizzle' })

import type { Config } from 'drizzle-kit'
import 'dotenv/config'

if (!process.env.POSTGRES_URL) {
  throw new Error('POSTGRES_URL is missing')
}
console.log('POSTGRES URL IS: ', process.env.POSTGRES_URL)
export default {
  schema: './src/db/schema.ts',
  out: './src/db/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL,
  },
} satisfies Config

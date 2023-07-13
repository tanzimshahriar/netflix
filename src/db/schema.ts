import {
  date,
  index,
  integer,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/pg-core'

export const accounts = pgTable(
  'accounts',
  {
    id: varchar('id', { length: 255 }).primaryKey().notNull(),
    userId: varchar('userId', { length: 255 }).notNull(),
    type: varchar('type', { length: 255 }).notNull(),
    provider: varchar('provider', { length: 255 }).notNull(),
    providerAccountId: varchar('providerAccountId', { length: 255 }).notNull(),
    access_token: text('access_token'),
    expires_in: integer('expires_in'),
    id_token: text('id_token'),
    refresh_token: text('refresh_token'),
    refresh_token_expires_in: integer('refresh_token_expires_in'),
    scope: varchar('scope', { length: 255 }),
    token_type: varchar('token_type', { length: 255 }),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
    // updatedAt: timestamp('updatedAt').defaultNow().onUpdateNow().notNull(),
    // TODO: test if updatedAt is updated
    updatedAt: timestamp('updatedAt').defaultNow().notNull(),
  },
  (account) => ({
    providerProviderAccountIdIndex: uniqueIndex(
      'accounts__provider__providerAccountId__idx',
    ).on(account.provider, account.providerAccountId),
    userIdIndex: index('accounts__userId__idx').on(account.userId),
  }),
)

export const sessions = pgTable(
  'sessions',
  {
    id: varchar('id', { length: 255 }).primaryKey().notNull(),
    sessionToken: varchar('sessionToken', { length: 255 }).notNull(),
    userId: varchar('userId', { length: 255 }).notNull(),
    expires: date('expires').notNull(),
    created_at: timestamp('created_at').notNull().defaultNow(),
    // updatedAt: timestamp('updatedAt').defaultNow().onUpdateNow().notNull(),
    // TODO: test if updatedAt is updated
    updatedAt: timestamp('updatedAt').defaultNow().notNull(),
  },
  (session) => ({
    sessionTokenIndex: uniqueIndex('sessions__sessionToken__idx').on(
      session.sessionToken,
    ),
    userIdIndex: index('sessions__userId__idx').on(session.userId),
  }),
)

export const users = pgTable(
  'users',
  {
    id: varchar('id', { length: 255 }).primaryKey().notNull(),
    name: varchar('name', { length: 255 }),
    email: varchar('email', { length: 255 }).notNull(),
    emailVerified: timestamp('emailVerified'),
    image: varchar('image', { length: 255 }),
    created_at: timestamp('created_at').notNull().defaultNow(),
    // updatedAt: timestamp('updatedAt').defaultNow().onUpdateNow().notNull(),
    // TODO: test if updatedAt is updated
    updatedAt: timestamp('updatedAt').defaultNow().notNull(),
  },
  (user) => ({
    emailIndex: uniqueIndex('users__email__idx').on(user.email),
  }),
)

export const verificationTokens = pgTable(
  'verification_tokens',
  {
    identifier: varchar('identifier', { length: 255 }).primaryKey().notNull(),
    token: varchar('token', { length: 255 }).notNull(),
    expires: date('expires').notNull(),
    created_at: timestamp('created_at').notNull().defaultNow(),
    // updatedAt: timestamp('updatedAt').defaultNow().onUpdateNow().notNull(),
    // TODO: test if updatedAt is updated
    updatedAt: timestamp('updatedAt').defaultNow().notNull(),
  },
  (verificationToken) => ({
    tokenIndex: uniqueIndex('verification_tokens__token__idx').on(
      verificationToken.token,
    ),
  }),
)

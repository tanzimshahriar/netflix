import { db } from '@/db'
import { DrizzleAdapter } from '@/lib/auth/drizzle-adapter'
import { eq } from 'drizzle-orm'
import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { users } from '@/db/schema'
import { compare } from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'

export const authOptions: NextAuthOptions = {
  adapter: DrizzleAdapter(db),
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/signin',
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials: any) {
        if (!credentials?.username || !credentials.password) {
          throw new Error('Sorry, please provide user credentials.')
        }

        const user = await db
          .select({
            id: users.id,
            password: users.password,
            name: users.name,
            email: users.email,
          })
          .from(users)
          .where(eq(users.email, credentials.username))

        if (!user || !user[0]) {
          throw new Error(
            "Sorry, but we can't find an account with this email address.",
          )
        }

        if (!(await compare(credentials.password, user[0].password || ''))) {
          throw new Error('Invalid password.')
        }

        return {
          id: user[0].id,
          email: user[0].email,
          name: user[0].name,
          randomKey: uuidv4(),
        }
      },
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey,
        },
      }
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
        }
      }
      return token
    },
  },
}

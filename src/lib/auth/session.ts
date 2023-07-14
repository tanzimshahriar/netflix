import { Session, getServerSession } from 'next-auth'
import { eq } from 'drizzle-orm'
import { authOptions } from '@/lib/auth/auth-options'
import { db } from '@/db'
import { users } from '@/db/schema'

export const getSession = async () => {
  const session = await getServerSession(authOptions)
  return session
}

export const getCurrentUser = async () => {
  const session: (Session & { user: { id: any } }) | null =
    await getServerSession(authOptions)

  if (!session) {
    return null
  }

  const [currentUser] = await db
    .select({
      userId: users.id,
      email: users.email,
      name: users.name,
      image: users.image,
      createdAt: users.created_at,
    })
    .from(users)
    .where(eq(users.id, session.user.id))

  return currentUser
}

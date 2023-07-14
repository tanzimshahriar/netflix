import { redirect } from 'next/navigation'
import { getCurrentUser, getSession } from './auth/session'

export const applyAuthContext = async () => {
  const session = await getSession()

  if (null === session) {
    redirect('/')
  }
}

export const applyUnauthContext = async () => {
  const session = await getSession()
  const currentUser = await getCurrentUser()
  if (session) {
    redirect('/browse')
  }
}

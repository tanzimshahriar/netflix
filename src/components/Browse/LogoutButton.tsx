'use client'

import { signOut } from 'next-auth/react'

const LogoutButton = () => {
  return (
    <button
      className="rounded-md bg-red-600 px-4 py-1.5 text-sm font-semibold text-white"
      onClick={() => signOut()}
    >
      Logout
    </button>
  )
}

export default LogoutButton

'use client'
import Logo from '../Logo'
import { signIn } from 'next-auth/react'

const Navbar = () => {
  return (
    <nav className="flex justify-between py-4">
      <div className="w-24 lg:w-32">
        <Logo />
      </div>
      <button
        className="rounded-md bg-red-600 px-4 py-1.5 text-sm font-semibold text-white"
        onClick={() => signIn()}
      >
        Sign In
      </button>
    </nav>
  )
}

export default Navbar

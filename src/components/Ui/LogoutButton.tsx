'use client'

import { signOut } from 'next-auth/react'
import Image from 'next/image'

const LogoutButton = () => {
  return (
    <div className="group relative h-9 w-9 cursor-pointer">
      <div className="absolute right-0 h-9 w-9">
        <Image
          className="rounded-md"
          src="/bojack.png"
          alt="profile picture"
          width={36}
          height={36}
        />
      </div>
      <div className="absolute right-0 top-0 hidden pt-12 group-hover:block">
        <button
          className="w-40 bg-zinc-800 p-3 text-xs font-light text-white group-hover:block"
          onClick={() => signOut()}
        >
          Sign out of netflix
        </button>
      </div>
    </div>
  )
}

export default LogoutButton

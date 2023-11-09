'use client'

import { signOut } from 'next-auth/react'
import Image from 'next/image'

const LogoutButton = () => {
  return (
    <div className="group relative h-36 w-10 cursor-pointer lg:w-40">
      <div className="absolute bottom-12 right-0 h-10 w-10">
        <Image
          className="rounded-md"
          src="/bojack.png"
          alt="profile picture"
          width={40}
          height={40}
        />
      </div>
      <button
        className="absolute bottom-0 right-0 hidden w-40 bg-zinc-800 p-3 text-xs font-light text-white group-hover:block"
        onClick={() => signOut()}
      >
        Sign out of netflix
      </button>
    </div>
  )
}

export default LogoutButton

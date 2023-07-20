'use client'
import { useState } from 'react'
import Logo from '../Logo'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import Spinning from '../Ui/Spinning'

const Navbar = () => {
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(
    window !== undefined &&
      sessionStorage.getItem('disclaimerAccepted') === 'true',
  )
  const [signingIn, setSigningIn] = useState(false)
  return (
    <nav className="flex justify-between py-4">
      <div className="w-24 lg:w-32">
        <Logo />
      </div>
      <button
        className="flex items-center rounded-md bg-red-600 px-4 py-1.5 text-sm font-semibold text-white duration-300 hover:bg-red-500"
        onClick={() => {
          setSigningIn(true)
          signIn()
        }}
        disabled={signingIn}
      >
        {signingIn && <Spinning />}
        Sign In
      </button>
      {!disclaimerAccepted && (
        <div className="fixed left-0 top-0 z-20 flex h-screen w-screen items-center justify-center bg-zinc-800 bg-opacity-50 backdrop-blur">
          <div className="h-min w-1/3 rounded-md bg-black p-12 ">
            <div className="text-4xl font-bold underline">Disclaimer</div>
            <div className="space-y-2 pt-4 text-sm font-light">
              <p>
                This is a{' '}
                <span className="font-medium text-red-600">Netflix clone</span>{' '}
                created for educational purposes only. It is not affiliated with
                or endorsed by Netflix Inc.
              </p>
              <p>
                The purpose of this project is to demonstrate web development
                skills and showcase the ability to replicate the user interface
                and functionality of popular streaming platforms. Any
                resemblance to Netflix's trademarks, logos, or copyrighted
                content is purely coincidental. We do not provide any
                copyrighted content, and all videos and images used on this
                website are for demonstration purposes only. To access the
                official Netflix service, please visit
                <Link
                  className="pl-2 font-medium text-blue-600 hover:underline"
                  href="https://www.netflix.com"
                >
                  www.netflix.com
                </Link>
                .
              </p>
            </div>
            <button
              className="mt-6 w-full rounded-md bg-red-600 p-3 text-base font-bold duration-300 hover:bg-red-500"
              onClick={() => {
                setDisclaimerAccepted(true)
                sessionStorage.setItem('disclaimerAccepted', 'true')
              }}
            >
              I understand
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

'use client'
import { useState } from 'react'
import Logo from '../Logo'
import { signIn } from 'next-auth/react'
import Link from 'next/link'

const Navbar = () => {
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(
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
        {signingIn && (
          <svg
            aria-hidden="true"
            role="status"
            className="mr-2 inline h-4 w-4 animate-spin text-white"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
        )}
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

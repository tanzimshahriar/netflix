'use client'
import Link from 'next/link'
import ParagraphWithButton from './ParagraphWithButton'
import { useState } from 'react'
import { SignInResponse, signIn } from 'next-auth/react'

const SigninForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const validateAndLogin = () => {
    console.log('validate and login')
    signIn('credentials', { username: email, password })
      .then((res: SignInResponse | undefined) => {
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        // TODO handle login failure
      })
  }

  return (
    <div className="h-[660px] w-[450px] rounded-md bg-black bg-opacity-70 p-14">
      <h1 className="pb-8 text-3xl font-medium">Sign in</h1>
      <div className="flex flex-col space-y-4">
        <div className="group relative">
          <input
            type="email"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="peer h-14 w-full rounded-md bg-zinc-800 px-4 pt-3 text-sm outline-none focus:bg-zinc-700"
          />
          <label
            htmlFor="email"
            className="absolute left-0 top-0 flex h-full transform items-center pl-4 text-sm text-zinc-400 transition-all group-focus-within:h-1/2 group-focus-within:-translate-y-0.5 group-focus-within:text-[10px] peer-valid:h-1/2 peer-valid:-translate-y-0.5 peer-valid:text-[10px]"
          >
            Email
          </label>
        </div>
        <div className="group relative">
          <input
            type="password"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            className="peer h-14 w-full rounded-md bg-zinc-800 px-4 pt-3 text-sm outline-none focus:bg-zinc-700"
          />
          <label
            htmlFor="password"
            className="absolute left-0 top-0 flex h-full transform items-center pl-4 text-sm text-zinc-400 transition-all group-focus-within:h-1/2 group-focus-within:-translate-y-0.5 group-focus-within:text-[10px] peer-valid:h-1/2 peer-valid:-translate-y-0.5 peer-valid:text-[10px]"
          >
            Password
          </label>
        </div>
      </div>
      <div className="flex w-full pt-10">
        <button
          className="h-12 flex-1 rounded-md bg-red-600 text-sm font-medium"
          onClick={validateAndLogin}
        >
          Sign in
        </button>
      </div>
      <div className="flex justify-between py-4 text-xs text-zinc-400">
        <div className="flex items-center gap-1.5">
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            value="Bike"
            className="h-4 w-4 accent-zinc-500"
          />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
        <button>Need help?</button>
      </div>
      <div className="pt-16">
        <div className="flex font-light text-zinc-400">
          <p>New to Netflix?</p>
          <Link href="/signup" className="pl-1.5 text-white">
            Sign up now
          </Link>
          .
        </div>
        <ParagraphWithButton />
      </div>
    </div>
  )
}

export default SigninForm

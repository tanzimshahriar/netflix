'use client'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ZodError, z } from 'zod'
import Spinning from '../Spinning'
import ParagraphWithButton from './ParagraphWithButton'
import { setZodErrors } from './SigninForm'

export const signupSchema = z.object({
  name: z.string().trim().min(1),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z
    .string()
    .min(4, {
      message: 'Your password must contain between 4 and 60 characters.',
    })
    .max(60, {
      message: 'Your password must contain between 4 and 60 characters.',
    }),
})

const REGISTER_ENDPOINT = `${process.env.NEXT_PUBLIC_API}/register`
const SignupForm = () => {
  const router = useRouter()
  const [signingUp, setSigningUp] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [validationErrors, setValidationErrors] = useState<
    Array<{ type: string; message: string }>
  >([])
  const [signupSuccess, setSigningUpSuccess] = useState(false)
  const [error, setError] = useState(false)

  const signup = async () => {
    setSigningUp(true)
    setError(false)
    //validate
    try {
      signupSchema.parse({
        name,
        email,
        password,
      })
      setValidationErrors([])
    } catch (err) {
      if (err instanceof ZodError) {
        setZodErrors(err.errors, setValidationErrors)
      }
      setSigningUp(false)
      return
    }

    //call api
    try {
      const res = await axios.post(REGISTER_ENDPOINT, {
        name,
        email,
        password,
      })
      setSigningUp(false)
      setError(false)
      setSigningUpSuccess(true)
      setTimeout(() => router.push('/signin'), 3000)
    } catch (err) {
      setError(true)
      setSigningUp(false)
    }
  }
  return (
    <div className="rounded-md bg-black px-0 py-14 md:h-[660px] md:w-[450px] md:bg-opacity-70 md:px-14">
      <h1 className="pb-8 text-3xl font-medium">Sign up</h1>
      <div className="flex flex-col">
        {error && (
          <p className="mb-4 rounded-md bg-orange-500 px-4 py-2 text-sm font-medium">
            User already exists
          </p>
        )}
        <div className="group relative">
          <input
            type="text"
            id="name"
            required
            className="peer h-14 w-full rounded-md bg-zinc-800 px-4 pt-3 text-sm outline-none focus:bg-zinc-700"
            onChange={(e) => setName(e.target.value)}
          />
          <label
            htmlFor="name"
            className="absolute left-0 top-0 flex h-full transform items-center pl-4 text-sm text-zinc-400 transition-all group-focus-within:h-1/2 group-focus-within:-translate-y-0.5 group-focus-within:text-[10px] peer-valid:h-1/2 peer-valid:-translate-y-0.5 peer-valid:text-[10px]"
          >
            Full name
          </label>
        </div>
        {validationErrors.find((e) => e.type === 'name') && (
          <p className="pt-1 text-xs text-orange-400">Please enter your name</p>
        )}
        <div className="group relative mt-4">
          <input
            type="email"
            id="email"
            required
            className={`peer h-14 w-full rounded-md bg-zinc-800 px-4 pt-3 text-sm outline-none focus:bg-zinc-700 ${
              validationErrors.find((e) => e.type === 'email')
                ? 'border-b-2 border-orange-400'
                : ''
            }`}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            htmlFor="email"
            className="absolute left-0 top-0 flex h-full transform items-center pl-4 text-sm text-zinc-400 transition-all group-focus-within:h-1/2 group-focus-within:-translate-y-0.5 group-focus-within:text-[10px] peer-valid:h-1/2 peer-valid:-translate-y-0.5 peer-valid:text-[10px]"
          >
            Email
          </label>
        </div>
        {validationErrors.find((e) => e.type === 'email') && (
          <p className="pt-1 text-xs text-orange-400">
            {validationErrors.find((e) => e.type === 'email')?.message}
          </p>
        )}
        <div className="group relative mt-4">
          <input
            type="password"
            id="password"
            required
            className="peer h-14 w-full rounded-md bg-zinc-800 px-4 pt-3 text-sm outline-none focus:bg-zinc-700"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label
            htmlFor="password"
            className="absolute left-0 top-0 flex h-full transform items-center pl-4 text-sm text-zinc-400 transition-all group-focus-within:h-1/2 group-focus-within:-translate-y-0.5 group-focus-within:text-[10px] peer-valid:h-1/2 peer-valid:-translate-y-0.5 peer-valid:text-[10px]"
          >
            Password
          </label>
        </div>
        {validationErrors.find((e) => e.type === 'email') && (
          <p className="pt-1 text-xs text-orange-400">
            {validationErrors.find((e) => e.type === 'password')?.message}
          </p>
        )}
      </div>
      <div className="flex w-full pt-10">
        <button
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-md bg-red-600 text-sm font-medium duration-300 hover:bg-red-500 disabled:bg-red-700"
          disabled={signingUp}
          onClick={signup}
        >
          Sign up
          {signingUp && <Spinning />}
        </button>
      </div>
      {signupSuccess && (
        <div className="py-2 text-sm text-zinc-400">
          Signed up successfully! Proceeding to login...
        </div>
      )}
      <div className="pt-16">
        <div className="flex font-light text-zinc-400">
          <p>Already have an account?</p>
          <Link href="/signin" className="pl-1.5 text-white">
            Sign in now
          </Link>
          .
        </div>
        <ParagraphWithButton />
      </div>
    </div>
  )
}

export default SignupForm

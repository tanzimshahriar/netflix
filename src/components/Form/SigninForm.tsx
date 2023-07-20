'use client'
import Link from 'next/link'
import ParagraphWithButton from './ParagraphWithButton'
import { Dispatch, SetStateAction, useState } from 'react'
import { SignInResponse, signIn } from 'next-auth/react'
import { ZodError, ZodIssue, z } from 'zod'
import Spinning from '../Ui/Spinning'
import { useRouter } from 'next/navigation'

const MOCK_USER = 'tanzim@yahoo.com'
const MOCK_PASSWORD = '123456'
export const UNKNOWN_ERROR = 'An Unknown error has occured. Please try again'

export const loginSchema = z.object({
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

export const setZodErrors = (
  errors: ZodIssue[],
  setValidationErrors: Dispatch<SetStateAction<any>>,
) => {
  setValidationErrors(
    errors.map((e) => {
      return {
        type: e.path[0].toString(),
        message: e.message,
      }
    }),
  )
}

const SigninForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [loadingMock, setLoadingMock] = useState(false)
  const [validationErrors, setValidationErrors] = useState<
    Array<{ type: string; message: string }>
  >([])
  const [loginErrorMessage, setLoginErrorMessage] = useState<String | null>(
    null,
  )
  const router = useRouter()

  const validateAndLogin = (isMock: boolean) => {
    if (isMock) {
      setLoadingMock(true)
    } else {
      setLoading(true)
      try {
        loginSchema.parse({
          email,
          password,
        })
        setValidationErrors([])
      } catch (err) {
        if (err instanceof ZodError) {
          setZodErrors(err.errors, setValidationErrors)
        }
        isMock ? setLoadingMock(false) : setLoading(false)
        return
      }
    }

    signIn('credentials', {
      redirect: false,
      username: isMock ? MOCK_USER : email,
      password: isMock ? MOCK_PASSWORD : password,
    })
      .then((res: SignInResponse | undefined) => {
        setLoading(false)
        if (res?.error) {
          setLoginErrorMessage(res.error)
        } else {
          setLoginErrorMessage(null)
          router.push('/browse')
        }
      })
      .catch((error) => {
        setLoading(false)
        setLoginErrorMessage(UNKNOWN_ERROR)
      })
  }

  return (
    <div className="h-[770px] w-[450px] rounded-md bg-black bg-opacity-70 p-14">
      <h1 className="pb-8 text-3xl font-medium">Sign in</h1>
      <div className="flex flex-col">
        {loginErrorMessage && (
          <p className="mb-4 rounded-md bg-orange-500 px-4 py-2 text-sm font-light">
            <span className="font-medium">{loginErrorMessage}</span> Please try
            again, or you can{' '}
            {loginErrorMessage.includes('email address') && (
              <button className="underline ">create a new acccount</button>
            )}
            {loginErrorMessage.includes('password') && (
              <button className="underline ">reset your password</button>
            )}
          </p>
        )}
        <div className="group relative">
          <input
            type="email"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className={`peer h-14 w-full rounded-md bg-zinc-800 px-4 pt-3 text-sm outline-none focus:bg-zinc-700 ${
              validationErrors.find((e) => e.type === 'email')
                ? 'border-b-2 border-orange-400'
                : ''
            }`}
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
            onChange={(e) => setPassword(e.target.value)}
            className={`peer h-14 w-full rounded-md bg-zinc-800 px-4 pt-3 text-sm outline-none focus:bg-zinc-700 ${
              validationErrors.find((e) => e.type === 'password')
                ? 'border-b-2 border-orange-400'
                : ''
            }`}
          />
          <label
            htmlFor="password"
            className="absolute left-0 top-0 flex h-full transform items-center pl-4 text-sm text-zinc-400 transition-all group-focus-within:h-1/2 group-focus-within:-translate-y-0.5 group-focus-within:text-[10px] peer-valid:h-1/2 peer-valid:-translate-y-0.5 peer-valid:text-[10px]"
          >
            Password
          </label>
        </div>
        {validationErrors.find((e) => e.type === 'password') && (
          <p className="pt-1 text-xs text-orange-400">
            {validationErrors.find((e) => e.type === 'password')?.message}
          </p>
        )}
      </div>
      <div className="flex w-full pt-10">
        <button
          className="h-12 flex-1 rounded-md bg-red-600 text-sm font-medium hover:bg-red-500 disabled:bg-red-800"
          onClick={() => validateAndLogin(false)}
          disabled={loading}
        >
          {loading && <Spinning />}
          Sign in
        </button>
      </div>
      <div className="flex w-full pt-4">
        <button
          className="h-12 flex-1 rounded-md bg-red-600 text-sm font-medium hover:bg-red-500 disabled:bg-red-800"
          onClick={() => validateAndLogin(true)}
          disabled={loadingMock}
        >
          {loadingMock && <Spinning />}
          Sign in with mock user
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

import ParagraphWithButton from '@/components/Form/ParagraphWithButton'
import Logo from '@/components/Logo'
import { applyUnauthContext } from '@/lib/authUtils'
import Image from 'next/image'
import Link from 'next/link'

const Signup = async () => {
  await applyUnauthContext()
  return (
    <main className="relative min-h-screen">
      <Image
        className="-z-10 h-screen w-screen bg-black object-cover brightness-[35%]"
        src="/login-bg.jpeg"
        alt="background-image"
        fill
      />

      <div className=" text-white">
        <div className="container">
          <Link href="/" className="block w-32 py-8 lg:w-44">
            <Logo />
          </Link>
          <div className="flex justify-center pb-24">
            <div className="h-[660px] w-[450px] rounded-md bg-black bg-opacity-70 p-14">
              <h1 className="pb-8 text-3xl font-medium">Sign up</h1>
              <div className="flex flex-col space-y-4">
                <div className="group relative">
                  <input
                    type="text"
                    id="name"
                    required
                    className="peer h-14 w-full rounded-md bg-zinc-800 px-4 pt-3 text-sm outline-none focus:bg-zinc-700"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 top-0 flex h-full transform items-center pl-4 text-sm text-zinc-400 transition-all group-focus-within:h-1/2 group-focus-within:-translate-y-0.5 group-focus-within:text-[10px] peer-valid:h-1/2 peer-valid:-translate-y-0.5 peer-valid:text-[10px]"
                  >
                    Full name
                  </label>
                </div>
                <div className="group relative">
                  <input
                    type="email"
                    id="email"
                    required
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
                <button className="h-12 flex-1 rounded-md bg-red-600 text-sm font-medium">
                  Sign up
                </button>
              </div>
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
          </div>
        </div>
      </div>
    </main>
  )
}

export default Signup

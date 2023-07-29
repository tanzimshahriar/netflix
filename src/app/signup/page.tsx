import Logo from '@/components/Logo'
import SignupForm from '@/components/Ui/Form/SignupForm'
import { applyUnauthContext } from '@/lib/authUtils'
import Image from 'next/image'
import Link from 'next/link'

const Signup = async () => {
  await applyUnauthContext()
  return (
    <main className="relative bg-black md:bg-transparent">
      <Image
        className="-z-10 hidden w-screen bg-black object-cover brightness-[35%] md:block"
        src="/login-bg.jpeg"
        alt="background-image"
        fill
      />

      <div className="text-white">
        <div className="container">
          <Link href="/" className="absolute block w-32 py-8 md:static lg:w-44">
            <Logo />
          </Link>
          <div className="w-full justify-center pt-12 md:flex md:pb-24 md:pt-0">
            <SignupForm />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Signup

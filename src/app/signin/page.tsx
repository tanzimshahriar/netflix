import Logo from '@/components/Logo'
import SigninForm from '@/components/Ui/Form/SigninForm'
import { applyUnauthContext } from '@/lib/authUtils'
import Image from 'next/image'
import Link from 'next/link'

const Signin = async () => {
  await applyUnauthContext()

  return (
    <main className="relative">
      <Image
        className="-z-10 w-screen bg-black object-cover brightness-[35%]"
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
            <SigninForm />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Signin

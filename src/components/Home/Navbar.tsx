import Link from 'next/link'
import Logo from '../Logo'

const Navbar = () => {
  return (
    <nav className="flex justify-between py-4">
      <div className="w-24 lg:w-32">
        <Logo />
      </div>
      <Link
        className="rounded-md bg-red-600 px-4 py-1.5 text-sm font-semibold text-white"
        href="/api/auth/login"
      >
        Sign In
      </Link>
    </nav>
  )
}

export default Navbar

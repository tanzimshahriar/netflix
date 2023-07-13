import Link from 'next/link'
import Logo from '../Logo'
import { headers } from 'next/headers'

const links = [
  {
    name: 'Home',
    url: '/browse',
  },
  {
    name: 'TV Shows',
    url: '/tv-shows',
  },
  {
    name: 'Movies',
    url: '/movies',
  },
  {
    name: 'New & Popular',
    url: '/latest',
  },
  {
    name: 'My list',
    url: '/my-list',
  },
  {
    name: 'Browse By Languages',
    url: '/original-audio',
  },
]

const Navbar = () => {
  const headersList = headers()
  const domain = headersList.get('host') || ''
  const fullUrl = headersList.get('referer') || ''
  const [, pathname] = fullUrl.match(new RegExp(`https?://${domain}(.*)`)) || []
  return (
    <div className="fixed top-0 w-full">
      <nav className="container flex h-16 items-center justify-between text-white">
        <div className="flex items-center gap-8">
          <div className="w-24 lg:w-32">
            <Logo />
          </div>
          <div className="flex items-center justify-center text-xs xl:text-sm">
            {links.map((link) => (
              <Link
                className={`p-4 duration-500 hover:text-zinc-400 ${
                  pathname === link.url ? 'font-medium' : 'font-light'
                }`}
                key={link.url}
                href={link.url}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <Link
          className="rounded-md bg-red-600 px-4 py-1.5 text-sm font-semibold text-white"
          href="/api/auth/logout"
        >
          Logout
        </Link>
      </nav>
    </div>
  )
}

export default Navbar

import Link from 'next/link'
import Logo from '../Logo'
import { headers } from 'next/headers'
import LogoutButton from '../Ui/LogoutButton'
import NavbarWrapper from './NavbarWrapper'

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
    <>
      <div className="fixed top-0 z-30 w-full">
        <NavbarWrapper>
          <div className="flex items-center gap-8">
            <div className="w-24 lg:w-32">
              <Logo />
            </div>
            <div className="hidden items-center justify-center text-xs lg:flex xl:text-sm">
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
          <LogoutButton />
        </NavbarWrapper>
      </div>
    </>
  )
}

export default Navbar

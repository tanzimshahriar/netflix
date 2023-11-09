import Link from 'next/link'
import Logo from '../Logo'
import { headers } from 'next/headers'
import LogoutButton from '../Ui/LogoutButton'
import NavbarWrapper from './NavbarWrapper'
import Image from 'next/image'

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
  // {
  //   name: 'New & Popular',
  //   url: '/latest',
  // },
  // {
  //   name: 'My list',
  //   url: '/my-list',
  // },
  // {
  //   name: 'Browse By Languages',
  //   url: '/original-audio',
  // },
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
            <div className="group absolute left-36 top-0 flex flex-col text-xs lg:static lg:flex-row lg:items-center lg:justify-center xl:text-sm">
              <div className="flex items-center justify-center  gap-1 p-2 pt-6 text-sm lg:hidden">
                <div className="text-xs">Browse</div>
                <Image
                  src="/down.svg"
                  width={10}
                  height={10}
                  alt="down"
                  className="invert"
                />
              </div>
              {links.map((link) => (
                <Link
                  className={`hidden bg-zinc-800 p-2 duration-500 group-hover:block hover:text-zinc-400 lg:block lg:p-4 ${
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

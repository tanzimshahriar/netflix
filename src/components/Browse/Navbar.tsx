'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '../Logo'
import LogoutButton from '../Ui/LogoutButton'
import SearchBar from '../Ui/SearchBar'
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
  const pathname = usePathname()

  return (
    <>
      <div className="fixed top-0 z-30 w-full">
        <NavbarWrapper>
          <div className="flex items-center gap-8">
            <div className="w-14 sm:w-24 lg:w-32">
              <Logo />
            </div>
            <div className="group absolute left-20 top-0 flex min-h-full flex-col text-xs sm:left-36 lg:static lg:flex-row lg:items-center lg:justify-center xl:text-sm">
              <div className="flex h-full gap-1 p-2 pt-5 text-sm sm:pt-6 lg:hidden">
                <div className="flex cursor-pointer text-[10px] sm:text-xs">
                  Browse
                </div>
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
                  className={`hidden bg-zinc-800 p-2 duration-500 group-hover:block hover:text-zinc-400 lg:block lg:bg-transparent lg:p-4 ${
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
          <div className="flex gap-2 sm:gap-4 lg:gap-6">
            <SearchBar />
            <LogoutButton />
          </div>
        </NavbarWrapper>
      </div>
    </>
  )
}

export default Navbar

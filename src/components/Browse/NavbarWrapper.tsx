'use client'

import { debounce } from '@/lib/utils'
import { useEffect, useState } from 'react'

const WINDOW_SCROLL_DEBOUNCE_DELAY = 100

export const NavbarWrapper = ({ children }: { children: any }) => {
  const [isNavDarkBg, setIsNavDarkBg] = useState(false)

  useEffect(() => {
    window.addEventListener(
      'scroll',
      debounce(controlNav, WINDOW_SCROLL_DEBOUNCE_DELAY),
    )
    return () => {
      window.removeEventListener(
        'scroll',
        debounce(controlNav, WINDOW_SCROLL_DEBOUNCE_DELAY),
      )
    }
  }, [])

  const controlNav = () => {
    if (window.scrollY != 0) {
      setIsNavDarkBg(true)
    } else {
      setIsNavDarkBg(false)
    }
  }

  return (
    <nav
      className={`${
        isNavDarkBg ? 'bg-black' : ''
      } flex h-16 items-center justify-between bg-opacity-80 px-4 text-white backdrop-blur duration-700 md:px-8 lg:px-12 xl:px-16`}
    >
      {children}
    </nav>
  )
}

export default NavbarWrapper

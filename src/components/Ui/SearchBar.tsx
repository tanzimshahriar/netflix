'use client'
import { useSearchInput } from '@/contexts/SearchInputContext'
import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChangeEvent, useEffect, useRef, useState } from 'react'

const SearchBar = () => {
  const [expanded, setExpanded] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()
  const inputRef = useRef<HTMLInputElement>(null)
  const { searchInput, setSearchInput } = useSearchInput()

  useEffect(() => {
    if (pathname === '/search') {
      setExpanded(true)
      setSearchInput(params.get('q') || '')
      inputRef?.current?.focus()
    } else {
      setExpanded(false)
      setSearchInput('')
    }
  }, [params, pathname, setSearchInput])

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
    if (pathname === '/search') {
      // TODO: Clearing search will navigate back to previous page and hide search input
      // currently navigates back to browse page when search is cleared
      if (e.target.value === '') {
        setExpanded(false)
        // router.back()
        router.push('/browse')
      } else {
        // window.history.replaceState({}, '', `/search?q=${e.target.value}`)
        window.history.pushState({}, '', `/search?q=${e.target.value}`)
      }
    } else {
      router.push(`/search?q=${e.target.value}`)
    }
  }
  return (
    <div
      className={`z-20 flex transform border-white bg-opacity-70 transition-all duration-300 ${
        expanded ? 'w-24 border bg-black sm:w-44 md:w-64 xl:w-72' : ''
      }`}
    >
      <button
        className={`flex items-center justify-center ${
          expanded ? 'sm:px-2' : 'px-2'
        }`}
        onClick={() => setExpanded(!expanded)}
      >
        <Image
          className={`${expanded ? 'hidden sm:block' : ''} invert sm:block`}
          src="/search.svg"
          alt="search"
          width={20}
          height={20}
        />
      </button>
      {expanded && (
        <div className="flex flex-1 items-start justify-center">
          <input
            className="h-full w-full bg-transparent px-2 text-[10px] outline-none sm:text-xs"
            type="text"
            placeholder="Movies, tv"
            aria-label="search"
            onChange={handleSearch}
            defaultValue={searchInput}
            ref={inputRef}
          />
        </div>
      )}
    </div>
  )
}

export default SearchBar

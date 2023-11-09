'use client'
import Image from 'next/image'
import { useState } from 'react'

const SearchBar = () => {
  const [expanded, setExpanded] = useState(false)
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
          />
        </div>
      )}
    </div>
  )
}

export default SearchBar

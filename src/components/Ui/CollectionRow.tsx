'use client'

import Image from 'next/image'
import { useRef } from 'react'
import TitleCard, { TitleData } from './TitleCard'

const CollectionRow = ({ titles }: { titles: any }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <div
        className="relative flex overflow-x-scroll scroll-smooth scrollbar-none"
        ref={containerRef}
      >
        <div className="flex gap-1">
          {titles.results.map((titleData: TitleData) => (
            <TitleCard key={titleData.backdrop_path} titleData={titleData} />
          ))}
        </div>
      </div>
      <button
        className="group absolute left-0 top-0 flex h-[135px] items-center justify-center bg-zinc-800 text-white md:w-8 lg:w-12 xl:w-16"
        onClick={() => {
          if (containerRef.current) containerRef.current.scrollLeft += -736
        }}
      >
        <Image
          className="rotate-180 invert duration-300 group-hover:scale-125"
          src="/right.png"
          alt="right-icon"
          width={30}
          height={30}
        />
      </button>
      <button
        className="group absolute right-0 top-0 flex h-[135px] items-center justify-center bg-zinc-800 text-white md:w-8 lg:w-12 xl:w-16"
        onClick={() => {
          if (containerRef.current) containerRef.current.scrollLeft += 736
        }}
      >
        <Image
          className="invert duration-300 group-hover:scale-125"
          src="/right.png"
          alt="right-icon"
          width={30}
          height={30}
        />
      </button>
    </>
  )
}

export default CollectionRow

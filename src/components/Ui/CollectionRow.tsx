'use client'

import Image from 'next/image'
import { MouseEvent, useRef, useState } from 'react'
import { TitleData } from './TitleCard'

const CollectionRow = ({
  titles,
  setHoverTitlePosition,
  setHoverTitle,
}: {
  titles: any
  setHoverTitlePosition: (position: number | null) => void
  setHoverTitle: (title: TitleData | null) => void
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <div
        className="flex overflow-y-visible overflow-x-scroll scroll-smooth scrollbar-none"
        ref={containerRef}
      >
        <div className="flex gap-1 overflow-y-visible bg-zinc-900">
          {titles.results.map((titleData: TitleData) => (
            <div
              key={titleData.backdrop_path}
              className="flex h-[135px] w-[240px] cursor-pointer flex-col rounded-sm"
              onMouseEnter={(e: MouseEvent) => {
                setHoverTitle(titleData)
                let target: any = e.target
                setHoverTitlePosition(target.offsetLeft)
              }}
            >
              <Image
                src={`https://image.tmdb.org/t/p/w200${titleData.backdrop_path}`}
                alt="title-image"
                width={240}
                height={135}
                className="rounded-sm object-cover group-hover:hidden"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className="group absolute left-0 top-0 z-10 flex h-full items-center justify-center bg-zinc-800 text-white md:w-8 lg:w-12 xl:w-16"
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
        className="group absolute right-0 top-0 z-10 flex h-full items-center justify-center bg-zinc-800 text-white md:w-8 lg:w-12 xl:w-16"
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

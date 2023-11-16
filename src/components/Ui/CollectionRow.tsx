'use client'

import Image from 'next/image'
import { Dispatch, SetStateAction, useRef } from 'react'
import { HoverDataType } from '../Browse/BrowsePageContent'
import NavigateRowButton from './NavigateRowButton'
import { TitleData } from './TitleCard'

const CollectionRow = ({
  titles,
  rowName,
  index,
  setHoverRowIndex,
  setSelectedTitle,
}: {
  titles: { results: Array<TitleData> }
  rowName: string
  index: number
  setHoverRowIndex: Dispatch<
    SetStateAction<{
      row: number
      col: number
      rowWidth: number
      scrollPosition: number
    }>
  >
  setSelectedTitle: Dispatch<
    SetStateAction<{
      row: number
      col: number
    }>
  >
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative overflow-y-visible px-4 md:px-8 lg:px-12 xl:px-16">
      <div
        className="flex overflow-y-visible overflow-x-scroll scroll-smooth scrollbar-none"
        ref={containerRef}
      >
        <div className="flex gap-1 overflow-y-visible bg-zinc-900">
          {titles?.results?.map((titleData: TitleData, idx: number) => (
            <div
              key={titleData.backdrop_path}
              className="flex h-[135px] w-[240px] flex-col rounded-sm"
              onMouseEnter={() =>
                setHoverRowIndex({
                  row: index,
                  col: idx,
                  rowWidth: containerRef.current?.clientWidth || -1,
                  scrollPosition: containerRef.current?.scrollLeft || 0,
                })
              }
              onClick={() =>
                setSelectedTitle({
                  row: index,
                  col: idx,
                })
              }
            >
              <Image
                src={`https://image.tmdb.org/t/p/w400${titleData.backdrop_path}`}
                alt={titleData.title || titleData.name || 'image not available'}
                width={240}
                height={135}
                className="cursor-pointer rounded-sm object-cover group-hover:hidden"
              />
            </div>
          ))}
        </div>
      </div>
      <NavigateRowButton type="left" containerRef={containerRef} />
      <NavigateRowButton type="right" containerRef={containerRef} />
      <div className="absolute -top-8 text-xl text-zinc-200">{rowName}</div>
    </div>
  )
}

export default CollectionRow

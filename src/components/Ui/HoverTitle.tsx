import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'
import { TitleData } from './TitleCard'

const HoverTitle = ({
  titles,
  hoverIndex,
  setHoverIndex,
}: {
  titles: Array<any>
  hoverIndex: any
  setHoverIndex: Dispatch<
    SetStateAction<{
      row: number
      col: number
    }>
  >
}) => {
  const title = titles[hoverIndex.row].results[hoverIndex.col]
  // console.log(title)
  return (
    <div
      className="absolute top-0 z-10 flex w-[240px] scale-125 flex-col justify-center overflow-hidden rounded-sm bg-black text-white md:mx-8 lg:mx-12 xl:mx-16"
      style={{ left: hoverIndex.col * 244 }}
      onMouseLeave={() => setHoverIndex({ row: -1, col: -1 })}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w200${title.backdrop_path}`}
        alt="title-image"
        width={240}
        height={135}
        className="cursor-pointer rounded-sm object-cover group-hover:hidden"
      />
      <div className="p-3">
        <div className="flex gap-1.5">
          <button className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
            <Image src="/play.svg" alt="play" width={10} height={10} />
          </button>
          <button className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-400">
            <Image
              src="/plus.svg"
              alt="add to playlist"
              width={15}
              height={15}
            />
          </button>
          <button className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-400">
            <Image src="/like.svg" alt="like" width={15} height={15} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HoverTitle

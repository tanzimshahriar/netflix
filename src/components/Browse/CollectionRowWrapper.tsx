'use client'
import { RequestType, getData } from '@/lib/requests'
import CollectionRow from '../Ui/CollectionRow'
import { MouseEvent, useEffect, useState } from 'react'
import { TitleData } from '../Ui/TitleCard'

const CollectionRowWrapper = async ({
  titles,
  rowName,
}: {
  titles: Array<TitleData>
  rowName: String
}) => {
  const [hoverTitle, setHoverTitle] = useState<TitleData | null>(null)
  const [hoverTitlePosition, setHoverTitlePosition] = useState<number | null>(
    null,
  )
  useEffect(() => {
    console.log(hoverTitle)
  }, [hoverTitle])
  if (titles)
    return (
      <div className="relative overflow-y-visible px-4 md:px-8 lg:px-12 xl:px-16">
        <CollectionRow
          titles={titles}
          setHoverTitlePosition={setHoverTitlePosition}
          setHoverTitle={setHoverTitle}
        />
        <div className="absolute -top-8 text-xl text-zinc-200">{rowName}</div>
        {hoverTitle && hoverTitlePosition && (
          <div
            className="absolute top-0 z-10 flex w-[240px] origin-top scale-150 justify-center bg-red-500 py-20 text-white"
            style={{ left: `${hoverTitlePosition}px` }}
            // onMouseLeave={() => setHoverTitle(null)}
          >
            {hoverTitle.name || hoverTitle.title}
          </div>
        )}
      </div>
    )
  else return null
}

export default CollectionRowWrapper

'use client'

import { RequestType } from '@/lib/requests'
import { useState } from 'react'
import CollectionRow from '../Ui/CollectionRow'
import HoverTitle from '../Ui/HoverTitle'
import { TitleData } from '../Ui/TitleCard'

export type HoverDataType =
  | {
      index: number
      titleData: TitleData
    }
  | undefined

const BrowsePageContent = ({
  rows,
  titles,
}: {
  rows: Array<RequestType>
  titles: any
}) => {
  const [hoverIndex, setHoverIndex] = useState({ row: -1, col: -1 })

  return (
    <div className="space-y-20 overflow-hidden pb-20">
      {titles &&
        rows.map((type, index) => {
          if (titles[index])
            return (
              <div key={type} className="relative">
                <CollectionRow
                  titles={titles[index]}
                  index={index}
                  setHoverRowIndex={setHoverIndex}
                  rowName={type}
                />
                {hoverIndex.row === index && (
                  <HoverTitle
                    titles={titles}
                    hoverIndex={hoverIndex}
                    setHoverIndex={setHoverIndex}
                  />
                )}
              </div>
            )
        })}
    </div>
  )
}

export default BrowsePageContent

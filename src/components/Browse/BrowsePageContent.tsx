'use client'

import { RequestType } from '@/lib/requests'
import { useEffect, useState } from 'react'
import CollectionRow from '../Ui/CollectionRow'
import HoverTitle from '../Ui/HoverTitle'
import { TitleData } from '../Ui/TitleCard'
import PlayScreen from './PlayScreen'

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
  const [hoverIndex, setHoverIndex] = useState({
    row: -1,
    col: -1,
    rowWidth: -1,
    scrollPosition: 0,
  })
  const [selectedTitle, setSelectedTitle] = useState({ row: -1, col: -1 })

  useEffect(() => {
    document.body.classList.remove('overflow-hidden')
  }, [])

  return (
    <div className="space-y-20 pb-20">
      {titles &&
        rows.map((type, index) => {
          if (titles[index])
            return (
              <div key={type} className="relative">
                <CollectionRow
                  titles={titles[index]}
                  index={index}
                  setHoverRowIndex={setHoverIndex}
                  setSelectedTitle={setSelectedTitle}
                  rowName={type}
                />
                {hoverIndex.row === index && (
                  <HoverTitle
                    titles={titles}
                    hoverIndex={hoverIndex}
                    setHoverIndex={setHoverIndex}
                    selectTitle={() => {
                      setSelectedTitle({
                        row: hoverIndex.row,
                        col: hoverIndex.col,
                      })
                      document.body.classList.add('overflow-hidden')
                    }}
                  />
                )}
              </div>
            )
        })}
      {selectedTitle.row !== -1 && selectedTitle.col !== -1 && (
        <PlayScreen
          title={titles[selectedTitle.row]?.results[selectedTitle.col]}
          extraTopSpace={true}
          close={() => {
            setSelectedTitle({ row: -1, col: -1 })
            document.body.classList.remove('overflow-hidden')
          }}
        />
      )}
    </div>
  )
}

export default BrowsePageContent

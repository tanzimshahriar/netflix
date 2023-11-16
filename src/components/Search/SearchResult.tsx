'use client'

import { useSearchInput } from '@/contexts/SearchInputContext'
import useDebounce from '@/hooks/useDebounce'
import axios from 'axios'
import { useEffect, useState } from 'react'
import NoResultsFound from './NoResultsFound'
import Image from 'next/image'
import PlayScreen from '../Browse/PlayScreen'

const DEBOUNCE_RATE = 500

const SearchResult = () => {
  const { searchInput } = useSearchInput()
  const debouncedSearchInput = useDebounce(searchInput, DEBOUNCE_RATE)
  const [results, setResults] = useState([])
  const [fetching, setFetching] = useState(false)
  const [isNoResult, setIsNoResult] = useState(false)
  const [error, setError] = useState(false)
  const [selected, setSelected] = useState(-1)

  useEffect(() => {
    document.body.classList.remove('overflow-hidden')
  }, [])

  useEffect(() => {
    const getSearchData = async () => {
      if (!debouncedSearchInput) {
        return
      }
      setFetching(true)
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/search?keyword=${debouncedSearchInput}`,
        )
        setResults(res.data.data)
        if (res.data.data.length === 0) {
          setIsNoResult(true)
        } else {
          setIsNoResult(false)
        }
      } catch (err) {
        setError(true)
      }
      setFetching(false)
    }
    getSearchData()
  }, [debouncedSearchInput])

  const loading = fetching || searchInput != debouncedSearchInput
  return (
    <div className="px-4 py-20 text-white md:px-8 lg:px-12 xl:px-16">
      <div className="grid grid-cols-2 gap-x-3 gap-y-6 md:grid-cols-3 md:pt-10 lg:grid-cols-4 xl:grid-cols-5">
        {!loading &&
          results.map((r: any, i) => (
            <button
              className="rounded-md bg-zinc-800"
              key={r.title || r.name}
              onClick={() => {
                document.body.classList.add('overflow-hidden')
                setSelected(i)
              }}
            >
              <div>
                <Image
                  src={`https://image.tmdb.org/t/p/w400${r.backdrop_path}`}
                  alt="no image available"
                  width={240}
                  height={135}
                  className="flex-1 cursor-pointer rounded-sm object-cover group-hover:hidden"
                />
              </div>
            </button>
          ))}
        {loading &&
          Array.from(Array(40)).map((i) => (
            <div
              className="aspect-video animate-pulse rounded-md bg-zinc-800"
              key={i}
            ></div>
          ))}
      </div>
      {selected !== -1 && (
        <div className="my-20">
          <PlayScreen
            title={results[selected]}
            close={() => {
              setSelected(-1)
              document.body.classList.remove('overflow-hidden')
            }}
          />
        </div>
      )}
      {error && (
        <div className="text-2xl md:text-4xl">
          Network error. Please try again
        </div>
      )}

      {isNoResult && <NoResultsFound keyword={searchInput} />}
    </div>
  )
}

export default SearchResult

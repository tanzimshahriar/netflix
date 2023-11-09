import axios from 'axios'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import Cookies from 'js-cookie'
import Image from 'next/image'
import { useEffect, useState } from 'react'

dayjs.extend(duration)

const API_CALL_THRESHOLD = 3

const PlayScreen = ({ title, close }: { title: any; close: () => void }) => {
  const [details, setDetails] = useState<any>(null)
  const [suggestions, setSuggestions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchDetails() {
      const initialType = title.media_type || 'tv'
      const id = title?.id?.toString() || ''
      const response = await getDetails(initialType, id)
      const suggestions = await getSuggestions(initialType, id)
      if (
        (response.data?.data?.original_title &&
          title.original_title === response.data.data.original_title) ||
        (response.data?.data?.name && title.name === response.data.data.name)
      ) {
        console.log('inside if')
        setDetails(response.data.data)
        setSuggestions(suggestions.data.data)
        setLoading(false)
      } else {
        const newType = initialType === 'tv' ? 'movie' : 'tv'
        const response = await getDetails(newType, id)
        const suggestions = await getSuggestions(newType, id)
        setDetails(response.data.data)
        setSuggestions(suggestions.data.data)
        setLoading(false)
      }
    }
    try {
      fetchDetails()
    } catch (err) {
      setLoading(false)
      setError(true)
    }
  }, [title?.id, title.media_type, title?.name, title?.original_title])

  const getDetails = async (type: string, id: string) => {
    return axios.post(`${process.env.NEXT_PUBLIC_API}/getById`, {
      type,
      id,
    })
  }

  const getSuggestions = async (type: string, id: string) => {
    return await axios.post(`${process.env.NEXT_PUBLIC_API}/suggestions`, {
      type,
      id,
    })
  }

  return (
    <div
      className="fixed -top-20 z-30 h-screen w-screen overflow-scroll bg-black bg-opacity-50"
      onClick={(e) => {
        close()
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="rounded-md bg-black bg-opacity-100 text-white md:mx-4 md:my-12 lg:mx-24 xl:mx-40"
      >
        <div className="relative flex w-full bg-gradient-to-b from-gray-800 via-gray-500 to-black">
          <Image
            className="flex-1 rounded-t-md opacity-50"
            alt="movie_title"
            src={`https://image.tmdb.org/t/p/original${title.backdrop_path}`}
            width={1000}
            height={600}
          ></Image>
          <button
            className="absolute right-4 top-4 rotate-45 rounded-full bg-black p-1"
            onClick={close}
          >
            <Image alt="close button" src="/plus.svg" width={25} height={25} />
          </button>
          <div className="absolute bottom-10 flex gap-2 px-4 md:px-10">
            <button className="flex items-center justify-center gap-2 rounded-md bg-white px-5 py-2 text-black duration-300 hover:bg-gray-100">
              <Image width={15} height={15} alt="play button" src="/play.svg" />
              <div>Play</div>
            </button>
            <button className="flex items-center justify-center rounded-full border-2 border-gray-200 p-2">
              <Image
                src="/plus.svg"
                alt="add to playlist"
                width={25}
                height={25}
              />
            </button>
            <button className="flex items-center justify-center rounded-full border-2 border-gray-200 p-2">
              <Image src="/like.svg" alt="like" width={25} height={25} />
            </button>
          </div>
        </div>
        <div className="grid gap-8 px-4 pb-4 pt-10 md:grid-cols-4 md:px-10">
          <div className="md:col-span-3">
            <div className="pb-2 text-xl">
              {title.original_title || title.name}
            </div>
            <div className="flex items-center gap-3">
              {details?.release_date && (
                <div className="font-light text-gray-300">
                  {details?.release_date?.split('-')[0]}
                </div>
              )}
              {details?.runtime && (
                <div className="font-light text-gray-300">
                  {dayjs
                    .duration(details?.runtime, 'minutes')
                    .format('H[h] m[m]')}
                </div>
              )}
              <div className="rounded border border-gray-300 px-2 py-0.5 text-[8px]">
                HD
              </div>
            </div>
            {details?.overview && (
              <div className="py-2 text-xs font-light leading-6">
                {details.overview}
              </div>
            )}
          </div>
          <div className="space-y-2 py-1">
            {details?.genres && details.genres.length > 0 && (
              <div className="flex gap-2 text-xs">
                <span className="text-gray-400">Genres: </span>
                <span>
                  {details.genres.map((g: any, i: number) =>
                    i !== details.genres.length - 1 ? g.name + ', ' : g.name,
                  )}
                </span>
              </div>
            )}
            {details?.vote_average && (
              <div className="flex gap-2 text-xs">
                <span className="text-gray-400">Imdb Rating: </span>
                <span>{details.vote_average}</span>
              </div>
            )}
          </div>
        </div>
        {suggestions && suggestions.length > 0 && (
          <div className="px-4 py-4 md:px-10">
            <div className="text-2xl">More like this</div>
            <div className="grid grid-cols-6 gap-4 py-4">
              {suggestions?.slice(0, 9).map((s: any) => (
                <SuggestedTitle key={s.id} data={s} />
              ))}
            </div>
          </div>
        )}
        {loading && (
          <div className="grid grid-cols-6 gap-4 px-4 py-4 md:px-10">
            {Array.from(Array(9)).map((i) => (
              <div
                key={i}
                className="col-span-3 h-64 w-full animate-pulse rounded-md bg-zinc-800 lg:col-span-2"
              ></div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default PlayScreen

const SuggestedTitle = ({ data }: { data: any }) => {
  return (
    <button className="group col-span-3 rounded-md bg-zinc-800 text-start lg:col-span-2">
      <div className="relative flex w-full">
        <Image
          className="flex-1 rounded-t-md"
          alt={data.title || data.name}
          src={`https://image.tmdb.org/t/p/w400${data.backdrop_path}`}
          width={1000}
          height={600}
        ></Image>
        <div className="absolute hidden h-full w-full items-center justify-center group-hover:flex">
          <div className="rounded-full border-white bg-black bg-opacity-50 p-3">
            <Image
              className="invert"
              src="/play.svg"
              alt="play button"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
      <div className="p-2 text-xs font-light md:text-sm lg:p-4">
        {(data?.release_date || data?.first_air_date) && (
          <div className="text-gray-400">
            {data?.release_date
              ? data.release_date.split('-')[0]
              : data.first_air_date.split('-')[0]}
          </div>
        )}
        <div>{data.title || data.name}</div>
      </div>
    </button>
  )
}

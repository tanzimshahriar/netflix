import Image from 'next/image'

const PlayScreen = ({ title, close }: { title: any; close: () => void }) => {
  return (
    <div className="fixed -top-20 z-30 h-screen w-screen bg-black bg-opacity-50">
      <div className="my-12 rounded-md bg-black bg-opacity-100 text-white md:mx-4 lg:mx-24 xl:mx-40">
        <div className="relative flex w-full bg-gradient-to-b from-gray-800 via-gray-500 to-black">
          <Image
            className="flex-1 rounded-t-md opacity-50"
            alt="movie_title"
            src={`https://image.tmdb.org/t/p/original${title.backdrop_path}`}
            width={1000}
            height={1000}
          ></Image>
          <button
            className="absolute right-4 top-4 rotate-45 rounded-full bg-black p-1"
            onClick={close}
          >
            <Image alt="close button" src="/plus.svg" width={25} height={25} />
          </button>
          <div className="absolute bottom-10 flex gap-2 px-10">
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
        <div className="px-10 py-4">{JSON.stringify(title)}</div>
      </div>
    </div>
  )
}

export default PlayScreen

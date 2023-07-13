import Image from 'next/image'

const WatchEverywhere = () => {
  return (
    <div className="bg-black py-12">
      <div className="container grid items-center gap-4 md:grid-cols-2">
        <div className="relative mx-auto flex h-32 w-52 items-center justify-center sm:h-96 sm:w-[500px] md:h-64 md:w-72 xl:h-[400px] xl:w-[500px]">
          <Image
            src="/watch-pile.png"
            alt="Tv"
            fill
            className="z-10 object-cover"
          />
          <video
            autoPlay
            playsInline
            muted
            loop
            className="absolute -top-4 left-10 z-0 h-28 w-32 sm:left-20 sm:top-4 sm:h-56 sm:w-80 md:-top-2 md:left-10 md:h-48 md:w-52 xl:left-20 xl:h-[300px] xl:w-[340px]"
          >
            <source src="watch-pile.m4v" type="video/mp4" />
          </video>
        </div>
        <div className="space-y-4">
          <div className="text-center text-3xl font-extrabold md:text-left md:text-5xl">
            Watch Netflix everywhere
          </div>
          <div className="text-center font-medium md:text-left md:text-2xl">
            Stream unlimited movies and TV shows on your phone, tablet, laptop
            and TV.
          </div>
        </div>
      </div>
    </div>
  )
}

export default WatchEverywhere

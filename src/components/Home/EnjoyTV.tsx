import Image from 'next/image'

const EnjoyTv = () => {
  return (
    <div className="bg-black py-12">
      <div className="container grid items-center gap-x-4 md:grid-cols-2">
        <div className="space-y-4">
          <div className="text-center text-3xl font-extrabold md:text-left md:text-5xl">
            Enjoy on your TV
          </div>
          <div className="text-center font-medium md:text-left md:text-2xl">
            Watch titles on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
            Blu-ray players and more.
          </div>
        </div>
        <div className="md:w-144 md:h-144 relative mx-auto flex h-52 w-52 items-center justify-center sm:h-96 sm:w-96 lg:h-[500px] lg:w-[500px]">
          <Image src="/tv.png" alt="Tv" fill className="z-10 object-cover" />
          <video
            autoPlay
            playsInline
            muted
            loop
            className="absolute -top-3 left-0 z-0 h-56 w-52 sm:h-96 sm:w-96 md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
          >
            <source src="tv.m4v" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}

export default EnjoyTv

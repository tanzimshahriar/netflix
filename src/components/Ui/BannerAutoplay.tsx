'use client'

import Image from 'next/image'
import { useState } from 'react'
import YouTube from 'react-youtube'

const BannerAutoplay = ({
  youtubeKey,
  title,
  overview,
}: {
  youtubeKey: string
  title: string
  overview: string
}) => {
  const [video, setVideo] = useState<any>(undefined)
  const [muted, setMuted] = useState(true)
  const opts = {
    playerVars: {
      controls: 0,
      playlist: youtubeKey,
      loop: 1,
      autoplay: 1,
      mute: 1,
    },
  }

  const handleReady = (event: { target: any }) => {
    setVideo(() => event.target)
  }

  const toggleMute = () => {
    if (muted) {
      video.unMute()
    } else {
      video.mute()
    }
    setMuted(!muted)
  }

  return (
    <div className="relative h-full overflow-hidden">
      <YouTube
        className="youtube-iframe-wrapper flex h-full w-full items-center justify-center"
        videoId={youtubeKey}
        opts={opts}
        onReady={handleReady}
        onPause={() => video.playVideo()}
      />
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-black via-zinc-600 to-black opacity-30"></div>
      <button
        onClick={toggleMute}
        className="absolute right-0 top-3/4 mx-4 rounded-full border border-white p-2"
      >
        <Image
          src={muted ? '/muted.svg' : '/unmuted.svg'}
          alt="mute logo"
          width={20}
          height={20}
        />
      </button>
      <div className="absolute left-0 top-0 flex h-full w-screen flex-col justify-end py-16 text-white sm:justify-center">
        <div className="px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-xl space-y-2 pr-12 sm:pr-0 lg:space-y-4 xl:space-y-6">
            <h1 className=" text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl">
              {title}
            </h1>
            <div className="hidden sm:block md:hidden lg:block">
              <p className="text-sm font-light lg:line-clamp-4">{overview}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="flex h-8 items-center gap-2 rounded-md bg-white px-4 text-xs font-medium text-black lg:text-sm xl:h-10 xl:text-base">
                <Image width={20} height={20} src="/play.svg" alt="play logo" />
                Play
              </button>
              <button className="text-fill-white flex h-8 items-center gap-2 rounded-md bg-zinc-700 px-4 text-xs font-medium lg:text-sm xl:h-10 xl:text-base">
                <Image width={22} height={22} src="/info.svg" alt="info logo" />
                More info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerAutoplay

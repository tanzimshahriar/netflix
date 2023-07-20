'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
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
  const opts = {
    playerVars: {
      autoplay: 1,
      playlist: youtubeKey,
      loop: 1,
      origin: window.origin,
    },
  }

  const [video, setVideo] = useState<any>(undefined)
  const [muted, setMuted] = useState(false)

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
      <div className="absolute left-0 top-1/3 w-screen text-white">
        <div className="px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-xl space-y-2 lg:space-y-4 xl:space-y-6">
            <h1 className="text-3xl font-bold lg:text-4xl xl:text-5xl">
              {title}
            </h1>
            <div className="hidden lg:block">
              <p className="text-sm font-light lg:line-clamp-4">{overview}</p>
            </div>
            <div className="flex gap-4">
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

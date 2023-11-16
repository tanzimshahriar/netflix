'use client'
import YouTube from 'react-youtube'

const OPTIONS = {
  playerVars: {
    controls: 1,
    loop: 1,
    autoplay: 1,
    mute: 0,
    rel: 0,
    playsinline: 1,
    modestbranding: 1,
  },
  height: window.innerHeight,
  width: window.innerWidth,
}

const FullScreenVideoPlay = ({ id }: { id: string }) => {
  return (
    <div className="fixed z-50 h-screen w-screen">
      <YouTube className="left-0 top-0" videoId={id} opts={OPTIONS} />
    </div>
  )
}

export default FullScreenVideoPlay

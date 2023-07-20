import { getMovieVideo } from '@/lib/tmdbRequests'
import BannerAutoplay from '../Ui/BannerAutoplay'

const Banner = async ({ movie }: { movie: any }) => {
  const video = await getMovieVideo(movie.id)
  console.log('movie', movie)
  return (
    <div className="billboard-video relative w-full bg-black">
      <div className="relative h-full overflow-hidden">
        <BannerAutoplay
          youtubeKey={video.results[0].key}
          overview={movie.overview}
          title={movie.title}
        />
      </div>
    </div>
  )
}

export default Banner

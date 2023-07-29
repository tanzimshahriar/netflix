import { getVideo } from '@/lib/requests'
import BannerAutoplay from '../Ui/BannerAutoplay'

const Banner = async ({ movie }: { movie: any }) => {
  const video = await getVideo(movie.id, movie.media_type)
  return (
    <div className="relative aspect-[10/4] w-full bg-black">
      <div className="relative h-full overflow-hidden">
        {video.results && video.results[0] && (
          <BannerAutoplay
            youtubeKey={video.results[0].key}
            overview={movie.overview}
            title={movie.title}
          />
        )}
      </div>
    </div>
  )
}

export default Banner

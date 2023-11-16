import { getVideo } from '@/lib/requests'
import BannerAutoplay from '../Ui/BannerAutoplay'

const Banner = async ({ movie }: { movie: any }) => {
  const video = await getVideo(movie.id, movie.media_type)
  return (
    <div className="relative aspect-square w-full bg-black md:aspect-[10/4]">
      <div className="relative h-full overflow-hidden">
        {video.results && video.results[0] && (
          <BannerAutoplay
            youtubeKey={
              video.results.filter((v: any) => v.type === 'Trailer')[0].key ||
              video.results[0].key
            }
            overview={movie.overview}
            title={movie.title}
            data={movie}
          />
        )}
      </div>
    </div>
  )
}

export default Banner

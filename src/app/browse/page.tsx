import Navbar from '@/components/Browse/Navbar'
import Banner from '@/components/Browse/Banner'
import { applyAuthContext } from '@/lib/authUtils'
import { getPopularMovies } from '@/lib/tmdbRequests'
import { generateRandomNumber } from '@/lib/utils'

const Browse = async () => {
  await applyAuthContext()
  const popularMovies = await getPopularMovies()
  return (
    <div>
      <Banner
        movie={
          popularMovies.results[
            generateRandomNumber(0, popularMovies?.results?.length - 1, 1)
          ]
        }
      />
      <Navbar />
    </div>
  )
}

export default Browse

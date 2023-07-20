import Navbar from '@/components/Browse/Navbar'
import Banner from '@/components/Browse/Banner'
import { applyAuthContext } from '@/lib/authUtils'
import { getPopularMovies } from '@/lib/tmdbRequests'
import { generateRandomNumber } from '@/lib/utils'
import CollectionRow from '@/components/Browse/CollectionRow'

const rows = [
  {
    title: 'Trending now',
  },
  {
    title: 'Ensemble TV Comedies',
  },
  {
    title: 'Hollywood Movies',
  },
  {
    title: 'Indian Movies',
  },
  {
    title: 'Watch it again',
  },
  {
    title: 'Bollywood Superstars',
  },
  {
    title: 'Acclaimed Writers',
  },
  {
    title: 'Award-Winning Films',
  },
  {
    title: 'Comedy Movies',
  },
  {
    title: 'Romantic Favorites',
  },
  {
    title: 'Award-winning European Crime TV Shows',
  },
  {
    title: 'My list',
  },
  {
    title: 'Sci-Fi Thriller TV Shows',
  },
]

const Browse = async () => {
  await applyAuthContext()
  const popularMovies = await getPopularMovies()
  return (
    <main className="bg-black">
      <Banner
        movie={
          popularMovies.results[
            generateRandomNumber(0, popularMovies?.results?.length - 1, 1)
          ]
        }
      />
      <Navbar />
      <div className="space-y-20">
        {rows.map((r) => (
          <CollectionRow title={r.title} key={r.title} />
        ))}
      </div>
    </main>
  )
}

export default Browse

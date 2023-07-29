import Banner from '@/components/Browse/Banner'
import CollectionRowWrapper from '@/components/Browse/CollectionRowWrapper'
import Navbar from '@/components/Browse/Navbar'
import { applyAuthContext } from '@/lib/authUtils'
import { RequestType, getData } from '@/lib/requests'
import { generateRandomNumber } from '@/lib/utils'

const rows: Array<RequestType> = [
  'Trending now',
  'Ensemble TV Comedies',
  'Hollywood Movies',
  'Popular TV Shows',
  'Award-Winning Films',
  'Comedy Movies',
  'Romantic Favorites',
  'Award-winning Crime TV Shows',
  // 'My list',
  'Sci-Fi Thriller TV Shows',
]

const Browse = async () => {
  await applyAuthContext()
  const popularMovies = await getData('Trending now')
  return (
    <main className="bg-black bg-opacity-90">
      <Banner
        movie={
          popularMovies.results[
            generateRandomNumber(0, popularMovies?.results?.length - 1, 1)
          ]
        }
      />
      <Navbar />
      <div className="space-y-20 pb-20">
        {rows.map((type) => (
          <CollectionRowWrapper key={type} title={type} />
        ))}
      </div>
    </main>
  )
}

export default Browse

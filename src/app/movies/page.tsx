import Banner from '@/components/Browse/Banner'
import BrowsePageContent from '@/components/Browse/BrowsePageContent'
import Navbar from '@/components/Browse/Navbar'
import { applyAuthContext } from '@/lib/authUtils'
import { RequestType, getData } from '@/lib/requests'
import { generateRandomNumber } from '@/lib/utils'

const rows: Array<RequestType> = [
  'Hollywood Movies',
  'Award-Winning Films',
  'Comedy Movies',
]

const Browse = async () => {
  await applyAuthContext()
  const titles = await Promise.all(
    rows.map(async (type, index) => {
      return await getData(type)
    }),
  )

  const popularMovies = await getData('Trending now')
  return (
    <main className="bg-black bg-opacity-90 pb-10">
      <Banner
        movie={
          popularMovies.results[
            generateRandomNumber(0, popularMovies?.results?.length - 1, 1)
          ]
        }
      />
      <Navbar />
      <BrowsePageContent rows={rows} titles={titles} />
    </main>
  )
}

export default Browse

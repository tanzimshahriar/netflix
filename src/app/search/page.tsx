import SearchResult from '@/components/Search/SearchResult'
import { applyAuthContext } from '@/lib/authUtils'

const Search = async () => {
  await applyAuthContext()

  return (
    <main className="bg-black bg-opacity-90 pb-10">
      <SearchResult />
    </main>
  )
}

export default Search

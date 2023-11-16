import SearchResult from '@/components/Search/SearchResult'
import { applyAuthContext } from '@/lib/authUtils'

const Search = async () => {
  await applyAuthContext()

  return (
    <main className="flex-1 bg-black bg-opacity-90 pb-10">
      <SearchResult />
    </main>
  )
}

export default Search

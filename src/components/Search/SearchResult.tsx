'use client'

import { useSearchInput } from '@/contexts/SearchInputContext'
import { useEffect, useState } from 'react'

const SearchResult = () => {
  const { searchInput, setSearchInput } = useSearchInput()
  const [results, setResults] = useState([])

  useEffect(() => {
    console.log('keyword', searchInput)
  }, [searchInput])
  return (
    <div className="px-4 py-20 text-white md:px-8 lg:px-12 xl:px-16">
      <div>{searchInput}</div>
    </div>
  )
}

export default SearchResult

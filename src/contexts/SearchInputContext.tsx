// contexts/SearchInputContext.tsx

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'

// Define types for context value
interface SearchInputContextProps {
  searchInput: string
  setSearchInput: React.Dispatch<React.SetStateAction<string>>
  // Add other state and functions related to search input here
}

// Create the context
const SearchInputContext = createContext<SearchInputContextProps | undefined>(
  undefined,
)

// Create a custom hook to access the context
export const useSearchInput = (): SearchInputContextProps => {
  const context = useContext(SearchInputContext)
  if (!context) {
    throw new Error('useSearchInput must be used within a SearchInputProvider')
  }
  return context
}

// Define types for the provider props
interface SearchInputProviderProps {
  children: ReactNode
}

// Create the provider component
export const SearchInputProvider: React.FC<SearchInputProviderProps> = ({
  children,
}) => {
  const [searchInput, setSearchInput] = useState('')

  // You can include other state and functions related to search input management here

  useEffect(() => {
    // Any side effects related to search input can be handled here
  }, [searchInput])

  const value: SearchInputContextProps = {
    searchInput,
    setSearchInput,
    // Add other state and functions related to search input here
  }

  return (
    <SearchInputContext.Provider value={value}>
      {children}
    </SearchInputContext.Provider>
  )
}

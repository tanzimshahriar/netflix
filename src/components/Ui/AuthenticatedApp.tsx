'use client'
import { SearchInputProvider } from '@/contexts/SearchInputContext'
import Navbar from '../Browse/Navbar'

const AuthenticatedApp = ({ children }: { children: any }) => {
  return (
    <SearchInputProvider>
      <Navbar />
      {children}
    </SearchInputProvider>
  )
}

export default AuthenticatedApp

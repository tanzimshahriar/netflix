import Footer from '@/components/Footer'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'
import Navbar from '@/components/Browse/Navbar'
import { getSession } from '@/lib/auth/session'
import AuthenticatedApp from '@/components/Ui/AuthenticatedApp'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Netflix',
  description: 'Netflix Clone made for educational purposes',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession()

  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-[100vh] flex-col`}>
        {/* if user is logged in then everything is client side */}
        {session ? (
          <AuthenticatedApp>{children}</AuthenticatedApp>
        ) : (
          <main>{children}</main>
        )}
        <Footer />
      </body>
    </html>
  )
}

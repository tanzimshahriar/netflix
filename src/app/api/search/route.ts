import { getSession } from '@/lib/auth/session'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const searchSchema = z.object({
  keyword: z.string().nonempty(),
})

export async function GET(req: Request) {
  const session = await getSession()
  if (null === session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { searchParams } = new URL(req.url)
  const keyword = searchParams.get('keyword')
  try {
    searchSchema.parse({ keyword })
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        error,
      }),
      { status: 400 },
    )
  }
  try {
    const movies = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${keyword}&page=1`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
        },
      },
    )
    const moviesResult = await movies.json()
    const tvShows = await fetch(
      `https://api.themoviedb.org/3/search/tv?query=${keyword}&page=1`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
        },
      },
    )
    const tvShowsResult = await tvShows.json()

    moviesResult.results.forEach((r: any) => (r.media_type = 'movie'))
    tvShowsResult.results.forEach((r: any) => (r.media_type = 'tv'))

    let finalResult = [...moviesResult.results, ...tvShowsResult.results]
    finalResult.sort((a, b) => {
      const first = a.title || a.name
      const second = b.title || b.name
      return second.localeCompare(first)
    })

    return new NextResponse(
      JSON.stringify({
        data: finalResult,
      }),
    )
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        error,
      }),
      { status: 500 },
    )
  }
}

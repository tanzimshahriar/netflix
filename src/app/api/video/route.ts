import { getSession } from '@/lib/auth/session'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const suggestionsSchema = z.object({
  id: z.string().nonempty(),
  type: z.literal('movie').or(z.literal('tv')),
})

export async function POST(req: Request) {
  const session = await getSession()
  if (null === session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const data = await req.json()

  try {
    suggestionsSchema.parse(data)
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        error,
      }),
      { status: 400 },
    )
  }
  const { id, type } = data as {
    id: string
    type: string
  }
  try {
    const url =
      type === 'movie'
        ? `https://api.themoviedb.org/3/movie/${id}/videos`
        : `https://api.themoviedb.org/3/tv/${id}/videos`
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
      },
    })
    const body = await res.json()
    return new NextResponse(JSON.stringify({ data: body.results }))
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        error,
      }),
      { status: 500 },
    )
  }
}

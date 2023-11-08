import { NextResponse } from 'next/server'
import { z } from 'zod'

const suggestionsSchema = z.object({
  id: z.string().nonempty(),
  type: z.literal('movie').or(z.literal('tv')),
})

export async function POST(req: Request) {
  const data = await req.json()
  try {
    suggestionsSchema.parse(data)
  } catch (e) {
    return Response.json({
      error: e,
    })
  }
  const { id, type } = data as {
    id: string
    type: string
  }
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/${type}/${id}/similar`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
        },
      },
    )
    const body = await res.json()
    return Response.json({
      data: body.results,
    })
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        error,
      }),
      { status: 500 },
    )
  }
}

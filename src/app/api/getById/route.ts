import { NextResponse } from 'next/server'
import { z } from 'zod'

const getByIdSchema = z.object({
  id: z.string().nonempty(),
  type: z.literal('movie').or(z.literal('tv')),
})

export async function POST(req: Request) {
  const data = await req.json()
  try {
    getByIdSchema.parse(data)
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
    const res = await fetch(`https://api.themoviedb.org/3/${type}/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
      },
    })
    const body = await res.json()
    return new NextResponse(JSON.stringify({ data: body }))
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        error,
      }),
      { status: 500 },
    )
  }
}

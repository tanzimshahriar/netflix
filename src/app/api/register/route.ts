import { db } from '@/db'
import { users } from '@/db/schema'
import { hash } from 'bcryptjs'
import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

export async function POST(req: Request) {
  try {
    const { name, email, password } = (await req.json()) as {
      name: string
      email: string
      password: string
    }
    const hashed_password = await hash(password, 12)
    console.log(db._.tableNamesMap)
    const user = await db
      .insert(users)
      .values({
        id: uuidv4(),
        name,
        email: email.toLowerCase(),
        password: hashed_password,
      })
      .returning({
        id: users.id,
        email: users.email,
      })

    return NextResponse.json({
      user: {
        name: user[0].id,
        email: user[0].email,
      },
    })
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: 'error',
        message: error.message,
      }),
      { status: 500 },
    )
  }
}

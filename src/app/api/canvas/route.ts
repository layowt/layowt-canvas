import { NextResponse } from "next/server"
import { createClient } from '@/utils/supabase/server'
import { cookies } from "next/headers";

//const supabase = createClient(cookies())

export async function POST(req: Request, res: Response) {
  try{
    const body = await req.json()
  } catch(e){
    console.trace(e)
  }
}

export async function GET(req: Request, res: Response) {
  try{
    return NextResponse.json({
      message: 'Hello World!'
    })
  } catch(e){
    console.trace(e)
  }
}
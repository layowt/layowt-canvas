import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(req: Request, res: Response) {
  try{
    // get the websiteId from the request body
    const body = await req.json()

    // Return response
    return NextResponse.json({  
      status: 200
    })
  }catch (error) {
    console.trace(error)
  }
}
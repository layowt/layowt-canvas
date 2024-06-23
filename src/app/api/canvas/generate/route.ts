import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"

export async function POST(req: Request, res: Response) {
  try{
    // get the websiteId from the request body
    const body = await req.json()
    // get the cookie store
    const cookieStore = cookies()
    // create a supabase client
    const supabase = createClient(cookieStore)
    // get the canvas from the request body
    const websiteId = body.websiteId

    console.log(await supabase.from('canvas').select('*').eq('websiteId', websiteId))
  }catch (error) {
    console.trace(error)
  }
}
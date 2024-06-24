import { createClient } from '@/utils/supabase/client'
import { use } from 'react'

export default async function Home() {
  const supabase = createClient()

  const user = await supabase.auth.getUser()
  //const websites = use(supabase.from('Website').select('*'))

  console.log(user)
  //console.log(websites)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
      <h1 className="text-4xl font-bold">Hello, world!</h1>
      <p className="text-lg">This is a Next.js with Supabase starter.</p>
    </main>
  );
}

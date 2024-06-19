import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Home() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  console.log(await supabase.from('users').select('*'))

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
    </main>
  );
}

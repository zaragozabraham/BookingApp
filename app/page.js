import Hero from '@/components/Hero'
import TopFeatures from '@/components/TopFeatures'

export default function Home () {
  return (
    <main className='flex mx-auto max-w-[90rem] flex-col items-center justify-between gap-4'>
      <Hero />
      <TopFeatures />
    </main>
  )
}

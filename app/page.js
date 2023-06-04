import Hero from '@/components/Hero'
import TopFeatures from '@/components/TopFeatures'

export default function Home () {
  return (
    <main className='flex flex-col px-4 lg:px-0 lg:mx-auto lg:max-w-[90rem] gap-4'>
      <Hero />
      <TopFeatures />
    </main>
  )
}

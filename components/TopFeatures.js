import Image from 'next/image'
import Link from 'next/link'
import { features } from '@/constants/objects'

function FeatureCard ({ src, alt, title, description }) {
  return (
    <Link href='#'>
      <article className='w-full h-auto md:h-auto'>
        <Image className='h-[25vh] md:h-[30vw] lg:h-[17rem] lg:w-[22vw] lg:object-cover rounded-md mb-2' src={src} alt={alt} />
        <div className='flex flex-col gap-[0.02rem]'>
          <h1 className='font-bold text-md'>{title}</h1>
          <small>{description}</small>
        </div>
      </article>
    </Link>
  )
}

function TopFeatures () {
  return (
    <section className='w-full'>
      <header className='mb-3'>
        <h1 className='font-bold text-lg'>Start planning your next adventure</h1>
      </header>
      <div className='flex flex-col gap-3 lg:flex-row lg:justify-between'>
        {features.map(card => <FeatureCard key={new Date()} {...card} />)}
      </div>
    </section>
  )
}

export default TopFeatures

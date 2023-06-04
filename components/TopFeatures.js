import Image from 'next/image'
import members from '@/public/assets/images/members.webp'
import places from '@/public/assets/images/places.webp'
import vip from '@/public/assets/images/vip.webp'
import Link from 'next/link'

function FeatureCard ({ src, alt, title, description }) {
  return (
    <Link href='#'>
      <article className='h-[17rem] w-[26rem]'>
        <Image className='h-[13rem] object-cover mb-2 rounded-md' src={src} alt={alt} />
        <div className='flex flex-col gap-[0.02rem]'>
          <h1 className='font-bold text-md'>{title}</h1>
          <small>{description}</small>
        </div>
      </article>
    </Link>
  )
}

const features = [
  { src: members, alt: 'cozy room photo', title: 'Partners receive even more benefits', description: 'See partner pricing' },
  { src: places, alt: 'photo of a person in front of a river between mountains', title: 'The best places to visit this 2023', description: 'Plan a year full of adventures' },
  { src: vip, alt: 'photo of a beach resort', title: 'VIP Access properties', description: 'Reserve' }
]

function TopFeatures () {
  return (
    <section className='w-full h-[21rem] overflow-hidden'>
      <header className='mb-3'>
        <h1 className='font-bold text-2xl'>Start planning your next adventure</h1>
      </header>
      <div className='flex justify-between h-full'>
        {features.map(card => <FeatureCard key={new Date()} {...card} />)}
      </div>
    </section>
  )
}

export default TopFeatures

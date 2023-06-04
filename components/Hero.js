import Image from 'next/image'
import birHakeim from '@/public/assets/images/Bir-Hakeim.webp'
import SearchForm from './SearchForm'

function Hero () {
  return (
    <section className='flex flex-col gap-5 h-[40vh] relative justify-around items-center py-14 lg:h-[54vh] lg:gap-0'>
      <Image className='-z-10 absolute h-[40vh] lg:h-[54vh] object-cover' src={birHakeim} alt='Bir-Hakeim photo' />
      <div className='-z-10 absolute w-full h-[40vh] lg:h-[54vh] bg-slate-700/40' />
      <div className='lg:flex lg:flex-col lg:justify-center text-white text-center flex-1'>
        <h1 className='text-3xl lg:text-7xl font-bold'>Explore the world</h1>
        <p className='text-xs lg:text-xl'>Explore new places and immerse yourself in its splendor.</p>
      </div>
      <SearchForm className='flex-1 lg:flex-4' />
    </section>
  )
}

export default Hero

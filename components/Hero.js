import Image from 'next/image'
import birHakeim from '@/public/assets/images/Bir-Hakeim.webp'
import SearchForm from './SearchForm'

function Hero () {
  return (
    <section className='w-full h-[35rem] relative flex flex-col justify-around py-14 '>
      <Image className='-z-10 absolute h-[35rem] object-cover rounded-md' src={birHakeim} alt='Bir-Hakeim photo' />
      <div className='-z-10 absolute w-full h-full  bg-slate-700/30' />
      <div className=' flex-1 flex flex-col justify-center items-center text-white tracking-wide gap-2'>
        <h1 className='text-7xl font-bold'>Explore the world</h1>
        <p className='text-xl'>Explore new places and immerse yourself in its splendor.</p>
      </div>
      <SearchForm className='flex-4' />
    </section>
  )
}

export default Hero

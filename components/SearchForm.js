import Button from './Button'
import Image from 'next/image'
import { searchIcon, locationIcon, calendarIcon, avatarIcon } from '@/public/assets/icons'
import CustomDatePicker from './DatePicker'

function SearchForm () {
  return (
    <section className='w-[90vw] lg:w-auto rounded-lg lg:bg-slate-100 px-4 lg:px-0' role='search'>
      <form>
        <fieldset className='flex flex-col lg:flex-row justify-center items-center gap-2'>
          <div className='w-[80vw] h-8 py-1 px-2 lg:w-auto lg:h-12 lg:py-0 rounded-sm lg:rounded-lg bg-slate-100 hover:bg-white flex-1'>
            <label className='flex h-8 lg:h-12 justify-center items-center gap-1 align-text-bottom' htmlFor='location'>
              <Image className='flex-4' src={locationIcon} alt='location icon' />
              <input className='flex-1 bg-transparent focus:outline-none' type='text' name='location' id='location' placeholder='Where are you going?' />
            </label>
          </div>
          <div className='w-[80vw] h-8 py-1 px-2 lg:w-auto lg:h-12 lg:py-0 rounded-sm lg:rounded-lg bg-slate-100  flex-1 flex'>
            <div className='h-8 lg:h-12 rounded-lg hover:bg-white flex-1 flex justify-center items-center gap-1 '>
              <Image className='flex-4' src={calendarIcon} alt='calendar icon' />
              <CustomDatePicker placeholder='Check in' />
            </div>
            <div className='h-8 lg:h-12 lg:rounded-lg hover:bg-white flex-1 flex justify-center items-center gap-1'>
              <Image className='flex-4' src={calendarIcon} alt='calendar icon' />
              <CustomDatePicker placeholder='Check out' />
            </div>
          </div>
          <div className='w-[80vw] h-8 py-1 px-2 lg:w-auto lg:h-12 lg:py-0 rounded-sm lg:rounded-lg bg-slate-100 hover:bg-white flex-1'>
            <label className='flex h-8 lg:h-12 justify-center items-center gap-1 align-text-bottom' htmlFor='location'>
              <Image className='flex-4' src={avatarIcon} alt='avatar icon' />
              <input className='flex-1 bg-transparent focus:outline-none' type='text' name='room-props' id='room-props' placeholder='2 adults, 1 room' />
            </label>
          </div>
          <Button className='w-[80vw] lg:w-auto lg:h-8 lg:mr-1 flex gap-1'><Image src={searchIcon} alt='search icon' width={20} />Search</Button>
        </fieldset>
      </form>
    </section>
  )
}

export default SearchForm

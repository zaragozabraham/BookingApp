import Button from './Button'
import Image from 'next/image'
import { searchIcon, locationIcon, calendarIcon, avatarIcon } from '@/public/assets/icons'
import CustomDatePicker from './DatePicker'

function SearchForm () {
  return (
    <section className='w-[90vw] lg:w-auto rounded-lg lg:bg-slate-100 px-4 lg:px-0' role='search'>
      <form>
        <fieldset className='flex flex-col lg:flex-row justify-center items-center gap-2'>
          <div className='w-[80vw] lg:w-auto p-2 lg:py-1 lg:rounded-md rounded-[4px] bg-slate-100 hover:bg-white focus-within:bg-white flex-1 box-border transition-colors'>
            <label className='flex h-8 lg:h-12 justify-center items-center gap-1 align-text-bottom' htmlFor='location'>
              <Image className='flex-4' src={locationIcon} alt='location icon' />
              <input className='flex-1 bg-transparent focus:outline-none' type='text' name='location' id='location' placeholder='Where are you going?' required />
            </label>
          </div>
          <div className='w-[80vw] lg:w-auto p-2 lg:py-1 lg:rounded-md rounded-[4px] bg-slate-100 hover:bg-white flex-1 flex'>
            <div className='h-8 lg:h-12 rounded-lg hover:bg-white flex-1 flex justify-center items-center gap-1 '>
              <Image className='flex-4' src={calendarIcon} alt='calendar icon' />
              <CustomDatePicker placeholder='Check in' required />
            </div>
            <div className='h-8 lg:h-12 lg:rounded-lg hover:bg-white flex-1 flex justify-center items-center gap-1'>
              <Image className='flex-4' src={calendarIcon} alt='calendar icon' />
              <CustomDatePicker placeholder='Check out' required />
            </div>
          </div>
          <div className='w-[80vw] lg:w-auto p-2 lg:py-1 lg:rounded-md rounded-[4px] bg-slate-100 hover:bg-white focus-within:bg-white flex-1 box-border transition-colors'>
            <label className='flex h-8 lg:h-12 justify-center items-center gap-1 align-text-bottom' htmlFor='location'>
              <Image className='flex-4' src={avatarIcon} alt='avatar icon' />
              <input className='flex-1 bg-transparent focus:outline-none' type='text' name='room-props' id='room-props' placeholder='2 adults, 1 room' required />
            </label>
          </div>
          <Button className='w-full lg:w-auto rounded-md lg:rounded-3xl flex gap-1 lg:ml-2 lg:mr-4'><Image src={searchIcon} alt='search icon' width={20} />Search</Button>
        </fieldset>
      </form>
    </section>
  )
}

export default SearchForm

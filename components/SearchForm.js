import Button from './Button'
import Image from 'next/image'
import searchIcon from '@/public/assets/icons/search.svg'
import locationIcon from '@/public/assets/icons/location.svg'
import calendarIcon from '@/public/assets/icons/calendar.svg'
import avatarIcon from '@/public/assets/icons/avatar.svg'
import CustomDatePicker from './DatePicker'

function SearchForm () {
  return (
    <section className='mx-auto rounded-lg w-[65rem] h-14 p-1 bg-slate-100' role='search'>
      <form>
        <fieldset className='flex justify-center items-center gap-2'>
          <div className='h-12 rounded-lg hover:bg-white flex-1'>
            <label className='flex h-12 justify-center items-center gap-1 align-text-bottom' htmlFor='location'>
              <Image className='flex-4' src={locationIcon} alt='location icon' />
              <input className='flex-1 bg-transparent focus:outline-none' type='text' name='location' id='location' placeholder='Where are you going?' />
            </label>
          </div>
          <div className='h-12 rounded-lg flex-1 flex'>
            <div className='rounded-lg hover:bg-white flex-1 flex justify-center items-center gap-1'>
              <Image className='flex-4' src={calendarIcon} alt='calendar icon' />
              <CustomDatePicker placeholder='Check in' />
            </div>
            <div className='rounded-lg hover:bg-white flex-1 flex justify-center items-center gap-1'>
              <Image className='flex-4' src={calendarIcon} alt='calendar icon' />
              <CustomDatePicker placeholder='Check out' />
            </div>
          </div>
          <div className='h-12 rounded-lg hover:bg-white flex-1'>
            <label className='flex h-12 justify-center items-center gap-1 align-text-bottom' htmlFor='location'>
              <Image className='flex-4' src={avatarIcon} alt='avatar icon' />
              <input className='flex-1 bg-transparent focus:outline-none' type='text' name='room-props' id='room-props' placeholder='2 adults, 1 room' />
            </label>
          </div>
          <Button className='flex gap-1'><Image src={searchIcon} alt='search icon' width={20} />Search</Button>
        </fieldset>
      </form>
    </section>
  )
}

export default SearchForm

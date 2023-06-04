import NavLink from './NavLink'
import Button from './Button'
import { navLinks } from '@/constants/objects'
import Image from 'next/image'
import { menuIcon } from '@/public/assets/icons'

function Nav () {
  return (
    // px-4 mx-auto w-full md:max-w-[90rem] bg-slate-300
    <header className='px-4 lg:px-0 w-full lg:mx-auto lg:max-w-[90rem]'>
      <nav className='flex justify-between py-4'>
        <p className='text-blue-600 text-[1.25rem] font-semibold'>BookingApp</p>
        <ul className='hidden md:flex gap-11'>
          {navLinks.map(link => <NavLink key={link.label} href={link.path}>{link.label}</NavLink>)}
        </ul>
        <div className='gap-4 hidden md:flex'>
          <NavLink href='/sign-in'>Sign in</NavLink>
          <Button href='/sign-out' variant='solid' color='blue'>Sign up</Button>
        </div>
        <button className='lg:hidden'><Image src={menuIcon} alt='menu icon' /></button>
      </nav>
    </header>
  )
}

export default Nav

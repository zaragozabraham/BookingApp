import NavLink from './NavLink'
import Button from './Button'

const links = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' }
]

function Nav () {
  return (
    <header className='mx-auto max-w-[95rem]'>
      <nav className='flex justify-between py-4'>
        <p className='text-blue-600 text-[1.25rem] font-semibold'>BookingApp</p>
        <ul className='flex gap-11'>
          {links.map(link => <NavLink key={link.label} href={link.path}>{link.label}</NavLink>)}
        </ul>
        <div className='flex gap-4'>
          <NavLink href='/sign-in'>Sign in</NavLink>
          <Button href='/sign-out' variant='solid' color='blue'>Sign up</Button>
        </div>
      </nav>
    </header>
  )
}

export default Nav

import Link from 'next/link'

function NavLink ({ href, children }) {
  return (
    <Link className='rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900' href={href}>{children}</Link>
  )
}

export default NavLink

import Link from 'next/link'
import { variantStyles } from '@/constants/buttonStyles'

function Button ({ href, variant = 'solid', color = 'blue', className, disabled, children, ...props }) {
  className = `${className} ${variantStyles[variant][color]} ${disabled && 'opacity-50 cursor-not-allowed'}`

  return href
    ? (
      <Link className={variantStyles[variant][color]} href={href}>{children}</Link>
      )
    : (
      <button className={className} {...props}>{children}</button>
      )
}

export default Button

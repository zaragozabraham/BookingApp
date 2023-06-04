import { members, places, vip } from '@/public/assets/images'

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' }
]

export const features = [
  { src: members, alt: 'cozy room photo', title: 'Partners receive even more benefits', description: 'See partner pricing' },
  { src: places, alt: 'photo of a person in front of a river between mountains', title: 'The best places to visit this 2023', description: 'Plan a year full of adventures' },
  { src: vip, alt: 'photo of a beach resort', title: 'VIP Access properties', description: 'Reserve' }
]

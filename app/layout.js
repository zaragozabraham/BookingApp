import Nav from '@/components/Nav'
import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'BookingApp',
  description: 'BookingApp based on Hoteles.com'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <Nav />
        {children}
      </body>
    </html>
  )
}

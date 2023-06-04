'use client'

import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function CustomDatePicker ({ placeholder }) {
  const [startDate, setStartDate] = useState(null)
  return (
    <DatePicker placeholderText={placeholder} className='flex-1 w-full h-full bg-transparent focus:outline-none text-slate-400' selected={startDate} onChange={(date) => setStartDate(date)} />
  )
}

export default CustomDatePicker

import Image from 'next/image'

function FormField ({ name, type, imgSrc, imgAlt, placeholder }) {
  return (
    <div key={`${name}-field`} className='h-12 rounded-lg hover:bg-white flex-1'>
      <label className='flex h-12 justify-center items-center gap-1 align-text-bottom' htmlFor={name}>
        {imgSrc && <Image className='flex-4' src={imgSrc} alt={imgAlt} />}
        <input className='flex-1 bg-transparent focus:outline-none' type={type} name={name} id={name} placeholder={placeholder} />
      </label>
    </div>
  )
}

export default FormField

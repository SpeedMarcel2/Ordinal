import React from 'react'
import logoImg from "../../public/images/MovieMak3rs-logos_white.png"
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/" className='flex items-center justify-center'>
        <figure className='w-24 h-auto rounded-lg overflow-hidden'>
        <Image src={logoImg} alt="Unknown Man" className="w-full h-auto"
        priority
         />
        </figure>
        {/* <div className='flex flex-col items-start justify-center ml-2 text-base font-bold uppercase'>
            <span>Unknown</span> 
            <span>Man</span>
        </div> */}
    </Link>
  )
}

export default Logo
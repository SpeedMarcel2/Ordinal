import Image from 'next/image'
import React from 'react'
import coverImg from "../../../public/images/cover.png"
import AnimatedText from '../AnimatedText'

const Cover = () => {
  return (
    <section id="home" className='relative w-full min-h-screen'>
<div className='absolute top-0 left-0 right-0 bottom-0 w-full h-screen'>
<Image src={coverImg} fill alt="Unknown Man" className='w-full h-auto object-cover object-center
md:object-right-bottom'
priority
sizes='100vw'
 />
</div>
{/* <h1 className='text-9xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
w-full text-center font-bold drop-shadow-3xl
'>Unknown Man</h1> */}
<div className='w-[80%] sm:w-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl'>
<AnimatedText text="The Odessey of the UnknownMen" className='w-full !text-8xl drop-shadow-3xl
lg:!text-7xl sm:!text-6xl xs:!text-5xl
'/>
</div>
    </section>
  )
}

export default Cover
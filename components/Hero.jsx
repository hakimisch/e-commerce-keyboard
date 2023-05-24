import React from 'react'

const Hero = ({heading, message}) => {
  return (
    <div className='flex items-center justify-center h-[384px] mb-12 bg-fixed bg-bottom bg-cover custom-img'>
        {/*Overlay*/}
        <div className='absolute top-0 left-0 right-0 bottom-[467px] bg-black/70 z[2]'/>
        <div className='p-5 text-white z-[2]'>
            <h2 className='py-5 text-5xl font-bold'>{heading}</h2>
            <p className='py-2 text-xl'>{message}</p>
            <p className='text-xl'>Test</p>
        </div>
    </div>
  )
}

export default Hero
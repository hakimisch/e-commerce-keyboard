import React, { useState } from 'react';
import { SliderData } from './SliderData';
import Image from 'next/image';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'

const Slider = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current + 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

  return (
    <div id='gallery' className='max-w-[1240px] mx-auto pb-12'>
        <h1 className='text-2xl font-bold text-center p-4'>Gallery</h1>
        <div className='relative flex justify-center items-center p-4'>
        <div className='max-w-[640px] max-h-[480px]'>
            {SliderData.map((slide, index) => {
                return (
                    <div 
                    key={index} 
                    className={
                        index === current
                         ? 'opacity-[1] ease-in duration-1000' 
                         : 'opacity-0'}>
                            
                                <FaAngleLeft
                                 onClick={nextSlide}
                                 className='absolute top-[50%] sm:left-[300px] left-[10px] text-white/70 cursor-pointer select-none z-[2]' size={50}/>
                        {index === current && (
                            <Image src={slide.image} 
                            alt='/' 
                            width={'640'} 
                            height={'480'} 
                            style={{objectFit:'cover'}}
                            unoptimized={true}
                            />
                        )}
                        <FaAngleRight
                         onClick={nextSlide}
                         className='absolute top-[50%] sm:right-[300px] right-[10px] text-white/70 cursor-pointer select-none z-[2]' size={50}/>

                    </div>
                );
            })}
        </div>
        </div>

    </div>
  )
}

export default Slider
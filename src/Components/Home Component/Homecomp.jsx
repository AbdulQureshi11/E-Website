import React, { useState } from 'react'
import { Imagedata } from '../../Utlis/ImageData.js';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Homecomp = () => {

  const [index, setIndex] = useState(0)

  const prevSlide = () => {
    const firstSlide = index === 0;
    const prevIndex = firstSlide ? Imagedata?.length - 1 : index - 1;
    setIndex(prevIndex);
  }
  const nextSlide = () => {
    const lastSlide = index === Imagedata?.length - 1;
    const nextIndex = lastSlide ? 0 : index + 1;
    setIndex(nextIndex);
  }

  return (
    <div className='max-w-full w-full flex justify-center items-center px-16 relative bg-gray-200'>
      <div
        style={{ backgroundImage: `url(${Imagedata[index].image})` }}
        className='w-[1280px] h-[768px] rounded-2xl bg-blue-100 bg-center bg-cover duration-500 shadow-xl'>
         <div className='absolute top-10 p-10'>
          <h1 className='text-5xl font-semibold text-white '>{Imagedata[index].name}</h1>
          <h1 className='text-2xl font-semibold text-white '>{Imagedata[index].disc}</h1>
          </div>
      </div>

      <div className='absolute top-[50%] -translate-x-0 translate-y-[50%] left-20 p-2 rounded-full bg-gray-400 cursor-pointer'>
        <div><FaChevronLeft className='text-3xl text-white '
          onClick={prevSlide}
        />
        </div>
      </div>

      <div className='absolute top-[50%] -translate-x-0 translate-y-[50%] right-20 p-2 rounded-full bg-gray-400 cursor-pointer'>
        <FaChevronRight className='text-3xl text-white'
          onClick={nextSlide}
        />
      </div>
    </div>
  )
}

export default Homecomp

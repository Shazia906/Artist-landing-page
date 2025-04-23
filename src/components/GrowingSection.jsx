import React from 'react'
import Image from '../assets/images/Col.png';

const GrowingSection = () => {
  return (
   <div className='bg-indigo-950 pt-8'>
     <div className='pading  text-white grid grid-cols-2 gap-15 max-sm:grid-cols-1'>
        <div className=' text-white flex flex-col gap-8 justify-center items-center w-full'>
            <h1 className='lg:text-4xl md:text-3xl font-bold text-2xl lg:leading-15'>Add More masterpieces to <br />your growing collection</h1>
            <button className='px-3 rounded-[10px] py-3 w-[250px] border-2 border-white hover:bg-gray-300 hover:text-black text-[20px] font-bold'>Join here</button>
        </div>
        <div className='w-full flex justify-between items-center'>
            <img className='w-3/4 h-full' src={Image} alt="" />
        </div>
    </div>
   </div>
  )
}

export default GrowingSection
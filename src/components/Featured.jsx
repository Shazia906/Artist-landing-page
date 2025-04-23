import { MoveRightIcon } from 'lucide-react'
import React from 'react'
import image1 from "../assets/images/section2img1.png"
import image2 from "../assets/images/section2img2.png"
import image3 from "../assets/images/section2img3.png"
import image4 from "../assets/images/section2img4.png"
import image5 from "../assets/images/section2img5.png"

const cardData = [
  {iamge:image1 , p:"Poettery" , h1:"Vases Family"},
  {iamge:image2 , p:"Poettery" , h1:"Vases Family"},
  {iamge:image3 , p:"Poettery" , h1:"Vases Family"},
  {iamge:image4 , p:"Poettery" , h1:"Vases Family"},
  {iamge:image5 , p:"Poettery" , h1:"Vases Family"},
] 

const FeaturedSection = () => {
  return (
    <div className='padding flex flex-col gap-10'>
        <div className='flex flex-wrap justify-between'>
            <h1 className='lg:text-4xl text-2xl font-bold'>Featured and Categories</h1>
            <span className='text-[18px] text-blue-500 flex gap-1.5 justify-center items-center '>View all categories
              <MoveRightIcon/>
            </span>
        </div>
        <div className=' flex gap-5 overflow-x-auto [scrollbar-width:none]'>
        {cardData.map((item, index) => (
                 <div className='w-[200px] min-h-[300px] bg-center bg-cover flex-shrink-0 relative'>
                 <img className='w-full h-full absolute'  src={item.iamge} alt="" />
                 <div className='absolute top-[15px] left-[20px] flex flex-col text-white '>
                   <span className='text-[18px] z-20 '>{item.p}</span>
                   <span className='text-2xl'>{item.h1}</span>
                 </div>
               </div>
            ))}     
        </div>
    </div>
  )
}

export default FeaturedSection
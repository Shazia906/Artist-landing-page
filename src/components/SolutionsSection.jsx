import { Check, CheckCheckIcon } from 'lucide-react';
import React from 'react';
import image1 from "../assets/images/section4img1.png";
import image2 from "../assets/images/section4img3.png";
import image3 from "../assets/images/section3img4.png";
import video from "../assets/images/video7.mp4";
import image from "../assets/images/image.png";

const SolutionsSection = () => {
  return (
  <div className='bg-gray-700 min-h-screen lg:pb-0 pb-20'>
      <div className='grid gap-10 grid-cols-1 lg:grid-cols-2'>
        <div className='padding flex flex-col gap-5'>
            <h1 className='lg:text-5xl md:text-4xl text-2xl text-white font-bold'>Best Solutions for Your <br /> demanding collection</h1>
            <p className='text-gray-300'>Odio vulputate cras vel lacinia turpis voluput adipising .Solutions at <br /> velt , blantdit tempus nunc in.</p>
            <p className='flex gap-2 items-center text-gray-300'>
                <Check/>
                Interduum voluput turpis malessuade ac turpis.
            </p>
            <p className='flex gap-2 items-center text-gray-300'>
                <Check/>
                Interduum voluput turpis malessuade ac turpis.
            </p>
            <p className='flex gap-2 items-center text-gray-300'>
                <Check/>
                Interduum voluput turpis malessuade ac turpis.
            </p>
            
            <button className='px-5 py-3 border-2 text-white font-semibold lg:text-2xl text-[20px] rounded-[10px]  border-white max-w-[300px]'>Explore Xinder</button>
        </div>
      
        {/* <div className='relative w-full  flex justify-center items-center'>
        <video controls className='max-sm:w-[80%] w-[70%] h-[300px] rounded-[10px] z-10' src={video}></video>
        <img className='max-sm:w-[40%] w-[30%] sm:left-14 max-sm:top-[50px] sm:top-[-20px] lg:top-45 lg:w-[35%]  rounded-[8px] absolute left-[5%]  xl:top-20' src={image3} alt="" />
        <img className='max-sm:w-[35%] lg:h-[15%] lg:w-[30%] lg:top-65 w-[25%] max-sm:h-[30%] h-[35%] rounded-[8px] absolute right-0 top-[30%] z-20 bg-center object-cover xl:top-40 xl:h-[110px]' src={image1} alt="" />
        <img className='max-sm:w-[20%] w-[20%] lg:bottom-30 lg:h-[15%] left-[20%] bottom-[-10%]  h-[20%] rounded-[8px] absolute  z-20 bg-center object-cover xl:bottom-14' src={image2} alt="" />

        </div> */}
        <div className='p-4  flex items-center justify-center max-w-3/4'>
            <img className='w-full' src={image} alt="" />
        </div> 
     {/* <div className='relative w-full  flex justify-center items-center'>
        <div className='relative w-80%'>
        <video controls className='w-full h-[300px] rounded-[10px] z-10' src={video}></video>
        <img className='w-[40%]  rounded-[8px] absolute left-[-10px] top-[-20px]' src={image3} alt="" />
        <img className='w-[35%] h-[110px] rounded-[8px] absolute right-0 top-[70px] z-20 bg-center object-cover' src={image1} alt="" />
        <img className='w-[25%] h-[80px] rounded-[8px] absolute left-20 bottom-[-20px] z-20 bg-center object-cover' src={image2} alt="" />
        </div>
        </div> */}


    </div>
  </div>
  )
}

export default SolutionsSection
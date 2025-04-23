import React from 'react'
import Navbar from '../NavBar/Nav'
import {Search} from "lucide-react";
import image from "../assets/images/hero.png";
import vector from "../assets/images/smart.svg";
import zoomer from "../assets/images/zoomer.png";
import shells from "../assets/images/shells.png";
import waves from "../assets/images/waves.png";
import Art from "../assets/images/artvenue.png";
const Hero = () => {
  return (
    <>
    <div className='w-full   bg-red-800 text-white relative'>
         <Navbar/>
     <div className='relative pading grid lg:grid-cols-2 grid-cols-1 place-content-between place-items-center'>
     <div className='flex flex-col flex-1 gap-4 w-full max-sm:mt-[30px]'>
                <h1 className="lg:text-6xl font-bold text-3xl">Search the work of <br /> the best artists</h1>
              <div className=' relative flex gap-4 justify-center items-center p-2'>
              <div className='w-full max-sm:px-0  bg-white py-2 flex items-center justify-center  gap-2 border border-white text-black rounded-[10px]'>
                <Search className='max-sm:hidden absolute left-6'/>
                <input type="text" placeholder='Search the artist , and other things here' className='w-3/4  max-sm:px-[0px] max-sm:py-0 outline-none border-none '/>
            </div>
           <div>
           <button className='px-5 py-4 bg-red-700 rounded-[3px] max-sm:p-2 '>Search</button>
           </div>
              </div>
              <div className='flex gap-2 py-3 [scrollbar-width:none] overflow-x-scroll px-2'>
                <button className='rounded-[4px] px-4 border border-white' >Oil Painting</button>
                <button  className=' rounded-[4px] px-4 border border-white'>Abstract Art</button>
                <button  className='rounded-[4px] px-4  border border-white'>Sculpture</button>
                <button  className='rounded-[4px] px-4 border border-white'>Art Deco</button>
                <button  className='rounded-[4px] px-4  border border-white'>Pop Art</button>
              </div>

            </div>
            <div className="flex-1 flex relative w-full h-[600px]  justify-end overflow-hidden">
            <img
              src={image}
              alt=""
              className="w-[100%]  rounded-lg absolute -top-44 left-0 "
            />
          </div>
     </div>
     </div>
   <div className='flex justify-center items-center lg:gap-20 gap-10 flex-wrap bg-gray-300 px-3 py-6 text-gray-400 font-bold'>
   <div className=' flex items-center justify-center gap-1.5'>
      <img src={vector} width={20} height={20} alt="" />
      <span>SmartFinder</span>
     </div>
   <div className=' flex items-center justify-center gap-1.5'>
      <img src={zoomer} width={20} height={20} alt="" />
      <span>Zoomer</span>
     </div>
   <div className=' flex items-center justify-center gap-1.5'>
      <img src={shells} width={20} height={20} alt="" />
      <span>Shells</span>
     </div>
   <div className=' flex items-center justify-center gap-1.5'>
      <img src={waves} width={20} height={20} alt="" />
      <span>Waves</span>
     </div>
   <div className=' flex items-center justify-center gap-1.5'>
      <img src={Art} width={30} height={30} alt="" />
      <span>ArtVenue</span>
     </div>
   </div>
     </>
  )
}

export default Hero
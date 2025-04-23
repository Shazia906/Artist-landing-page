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
    <div className='w-full min-h-screen  bg-red-800 text-white relative'>
         <Navbar/>
     <div className='pading grid lg:grid-cols-2 grid-cols-1 place-content-between place-items-center'>
     <div className='flex flex-col gap-4 w-full max-sm:mt-[30px]'>
                <h1 className="lg:text-6xl font-bold text-3xl">Search the work of <br /> the best artists</h1>
              <div className='flex gap-4 justify-center items-center p-2'>
              <div className='w-full px-6 max-sm:px-0  bg-white py-2 flex items-center justify-center text-center gap-2 border border-white text-black rounded-[10px]'>
                <Search className='max-sm:hidden'/>
                <input type="text" placeholder='Search the artist' className='py-2 px-5  max-sm:px-[0px] max-sm:py-0 outline-none border-none text-center'/>
            </div>
           <div>
           <button className='px-5 py-4 bg-red-700 rounded-[3px] max-sm:p-2 '>Search</button>
           </div>
              </div>
              <div className='flex gap-2 flex-wrap p-2'>
                <button className='rounded-[4px] px-3 py-2 border border-white' >Oil Painting</button>
                <button  className=' rounded-[4px] px-3 py-2 border border-white'>Abstract Art</button>
                <button  className='rounded-[4px] px-3 py-2 border border-white'>Sculpture</button>
                <button  className='rounded-[4px] px-3 py-2 border border-white'>Art Deco</button>
                <button  className='rounded-[4px] px-3 py-2 border border-white'>Pop Art</button>
              </div>

            </div>
            <div className='max-sm:min-w-2/3 max-w-1/2'>
              <img className='w-full bg-cover bg-center' src={image} alt="" />
            </div>
     </div>
     </div>
   <div className='flex justify-center items-center lg:gap-20 gap-10 flex-wrap bg-gray-300 px-3 py-6'>
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
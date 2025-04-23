import React from 'react'
import { useState } from "react";
import {ChevronRight , ChevronLeft } from "lucide-react";
import video1 from "../assets/vidoes/video1.mp4" ;
import video2 from "../assets/vidoes/video2.mp4" ;
import video3 from "../assets/vidoes/video3.mp4" ;
import video4 from "../assets/vidoes/video4.mp4" ;
import video5 from "../assets/vidoes/video5.mp4" ;
import video6 from "../assets/vidoes/video6.mp4" ;
import video7 from "../assets/vidoes/video7.mp4" ;
import video8 from "../assets/vidoes/video8.mp4" ;
import video9 from "../assets/vidoes/video9.mp4" ;
import video10 from "../assets/vidoes/video10.mp4" ;

const videos = [
    video7,
    video2, video3 , video4, video5,
    video6, video1 , video8, video9, video10
  ];

const AltGal = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
    };
  return (
    <div className='relative padding grid gap-5 max-sm:gap-15 lg:grid-cols-2  sm:grid-cols-1 grid-cols-1 place-content-center place-items-center'>
        <div className='w-full'>
        <div className="overflow-hidden rounded-lg h-[399px] w-full">
           <video key={videos[currentIndex]} src={videos[currentIndex]} controls className="w-full h-[100%] bg-cover rounded-lg"/>
            </div>
        </div>
        <div>
        <h1 className='text-[19px] font-bold'>Best Solutions for Your  <span className='text-blue-600'>
            ArtGal</span> </h1>
        <p className='text-gray-500'>Odio vulputate cras vel lacinia turpis voluput adipising .Solutions at <br /> velt , blantdit tempus nunc in.
        velt , blantdit tempus nunc in.
        velt , blantdit tempus nunc in.
        velt , blantdit tempus nunc in.
        velt , blantdit tempus nunc in.
        velt , blantdit tempus nunc in.
        </p>
        </div>
        <button
                  onClick={nextSlide}
                  className="absolute -right-0 top-1/2 transform -translate-y-1/2 bg-gray-100px p-2 rounded-full shadow border hover:bg-gray-100 max-sm:hidden"
                >
                  <ChevronRight className="w-5 h-5"/>
                </button>
        <button
                  onClick={prevSlide}
                  className="absolute -left-0 top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow border max-sm:hidden"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
        
    
    </div>
  )
}

export default AltGal
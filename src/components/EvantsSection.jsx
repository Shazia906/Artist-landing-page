import React, { useRef } from "react";
import { ChevronRight, MoveRightIcon } from "lucide-react"; 
import image1 from "../assets/images/section8img1.png"
import image2 from "../assets/images/section8img2.png"
import image3 from "../assets/images/section8img3.png"


const masterpieces = [
  {
    title: "Flower Decorations",
    author: "Melissa Spring",
    image: image1,
    badge:"Featured",
  
  },
  {
    title: "Flower Decorations",
    author: "Melissa Spring",
    image: image2,
    badge:"Featured",

    
  },
  {
    title: "Splash",
    author: "Amanda Melfon",
    image:image3,
    badge:"Featured",

  
  },
 
];

export default function Events() {

  return (
    <div>
        <div className=' padding flex flex-col gap-10'>
    <div className='flex flex-wrap justify-between relative '>
        <h1 className='lg:text-4xl text-2xl font-bold'>Latest masterpieces</h1>
        <span className='text-[18px] text-blue-500 flex gap-1.5 justify-center items-center '> Discover More Masterpieces 
          <MoveRightIcon/>
        </span>
    </div>
    <div className="">
        <div
          className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 "
        >
          {masterpieces.map((item, idx) => (
            <div
              key={idx}
              className="flex  flex-col gap-4 flex-shrink-0 w-full h-[300px] bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[200px] object-cover"
                />
                  <span className="absolute top-2 left-2 text-black bg-white  text-xs font-medium px-2 py-1.5 rounded">
                    {item.badge}
                  </span>              
              </div>
             <div className="flex flex-col gap-3 p-2">
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="text-xs text-gray-500">by {item.author}</p>
             </div>
            </div>
          ))}
        </div>

      </div>   
    </div>
    </div>
    

  );
}





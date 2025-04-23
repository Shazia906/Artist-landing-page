import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, MoveRightIcon } from "lucide-react"; 
import image1 from "../assets/images/section3img1.png"
import image2 from "../assets/images/section3img2.png"
import image3 from "../assets/images/section3img3.png"
import image4 from "../assets/images/section3img4.png"
import image5 from "../assets/images/section3img5.png"
import Dp1 from "../assets/images/profile/user1.jpg";
import Dp2 from "../assets/images/profile/user2.jpg";
import Dp3 from "../assets/images/profile/user3.jpg";
import Dp4 from "../assets/images/profile/user4.jpg";
import Dp5 from "../assets/images/profile/user5.jpg";
import Dp6 from "../assets/images/profile/user6.jpg";

const masterpieces = [
  {
    title: "Flower Decorations",
    author: "Melissa Spring",
    image: image1,
    badge: "Promoted",
    dp:Dp1,
  },
  {
    title: "Flower Decorations",
    author: "Melissa Spring",
    image: image2,
    badge: "Featured",
    dp:Dp2,
  },
  {
    title: "Splash",
    author: "Amanda Melfon",
    image:image3,
    dp:Dp3,
  },
  {
    title: "Colorful Face",
    author: "Melissa Spring",
    image: image4,
    dp:Dp4,
  },
  {
    title: "Abstract Art",
    author: "Jessica K.",
    image: image5,
    dp:Dp5,
  },
  {
    title: "Abstract Art",
    author: "Jessica K.",
    image: image3,
    dp:Dp6,
  },
];

export default function ArtShowcase() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300, 
      behavior: "smooth",
    });
  };
  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300, 
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-gray-200 w-full">
        <div className=' padding flex flex-col gap-10 relative '>
    <div className='flex flex-wrap justify-between relative '>
        <h1 className='lg:text-4xl text-2xl font-bold'>Latest masterpieces</h1>
        <span className='text-[18px] text-blue-500 flex gap-1.5 justify-center items-center '> Discover More Masterpieces 
          <MoveRightIcon/>
        </span>
    </div>
    <div className="relative">
        <div
          ref={scrollRef}
          className="flex  gap-4 overflow-x-auto [scrollbar-width:none] pb-2"
        >
          {masterpieces.map((item, idx) => (
            <div
              key={idx}
              className="flex  flex-col gap-4 flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full [160px] object-cover"
                />
                {item.badge && (
                  <span className="absolute top-2 left-2 text-black bg-white  text-xs font-medium px-2 py-1.5 rounded">
                    {item.badge}
                  </span>
                )}
              </div>
             <div className="flex gap-2 p-2">
                <div><img className="w-[60px] h-[60px] rounded-full" src={item.dp} alt="" /></div> 
                <div className="p-3">
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="text-xs text-gray-500">by {item.author}</p>
              </div>
             </div>
            </div>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow border hover:bg-gray-100" 
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={scrollLeft}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow border hover:bg-gray-100"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
      </div>   
    </div>
    </div>
    

  );
}





import React, { useState } from "react";
import Decoration from "../assets/images/section3img4.png";
import Splash from "../assets/images/section3img2.png";
import Face from "../assets/images/section3img4.png";
import Flower from "../assets/images/section3img5.png";
import UserThumb1 from "../assets/images/profile/user1.jpg";
import UserThumb2 from "../assets/images/profile/user2.jpg";
import UserThumb3 from "../assets/images/profile/user3.jpg";
import UserThumb4 from "../assets/images/profile/user5.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cardData = [
  { image: Flower, userThumb: UserThumb1, title: "Flower Decoration" },
  { image: Decoration, userThumb: UserThumb2, title: "Classic Vase" },
  { image: Splash, userThumb: UserThumb3, title: "Abstract Splash" },
  { image: Face, userThumb: UserThumb4, title: "Modern Face" },
];

const BeIncredible = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const scrollRight = () => {
    if (currentIndex < cardData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section className="bg-gray-700 p-5">
      <div className="padding flex gap-20 max-md:flex-wrap gap-">
        <div className="w-1/2 max-sm:w-full max-md:w-full md:w-2/3 flex flex-col gap-4 justify-center">
          <p className="text-white font-semibold lg:text-6xl lg:font-bold">
            Be Incredible
          </p>
          <p
            className="text-white text-sm  py-5"
          >
            Nec ultricies eget placerat ultricies eleifend dignissim aliquet
            sapien. Senectus vestibulum, eget erat at et congue cursus pretium.
          </p>
          <button className="text-white border-2 border-white px-6 py-2 rounded-lg hover:bg-white hover:text-gray-800 transition">
            Explore Xinder
          </button>
        </div>

        <div className=" relative flex justify-center items-center gap-10 w-3/5 max-sm:w-full">
      <button className="bg-white absolute left-20 rounded-full text-[10px] z-10 p-2 max-sm:hidden" onClick={scrollLeft} >
        <ChevronLeft size={24} />
      </button>
      <div
          
          className="flex  gap-4 overflow-x-auto [scrollbar-width:none] pb-2 w-full"
        >
          {cardData.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-300 ${
                index === currentIndex
                  ? "w-[290px] h-auto blur-0"
                  : "w-[190px] h-auto blur-xs"
              } flex  flex-col gap-4 flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden`}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full [160px] object-cover"
                />
              </div>
             <div className="flex gap-2 p-2">
                <div><img className="w-[60px] h-[60px] rounded-full" src={item.userThumb} alt="" /></div> 
                <div className="p-3">
                <h3 className="font-semibold text-sm">{item.title}</h3>
              </div>
             </div>
            </div>
          ))}
        </div>
        <button className="bg-white absolute right-20 rounded-full text-[10px] z-10 p-2 max-sm:hidden " onClick={scrollRight} >
        <ChevronRight size={24} />
      </button>
    </div>

      </div>
    </section>
  );
};

export default BeIncredible;
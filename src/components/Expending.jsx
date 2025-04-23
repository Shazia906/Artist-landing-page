import React from 'react'
import icon1 from "../assets/images/nib.png";
import icon2 from "../assets/images/cursus.png";
import icon3 from "../assets/images/ipsum.png";
import icon4 from "../assets/images/quisque.png";
import icon5 from "../assets/images/arcu.png";
import icon6 from "../assets/images/cras.png";

const services = [
    {icon : icon1 , h1:"Nibb vivera"},
    {icon : icon2 , h1:"Cursus amet"},
    {icon : icon3 , h1:"Ipsum fermenturn"},
    {icon : icon4 , h1:"Quisque euismod"},
    {icon : icon5 , h1:"Arcu vupiulate"},
    {icon : icon6 , h1:"Cras auctor"},
]

const Expending = () => {
  return (
    <div className='padding text-center flex flex-col gap-15'>
        <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold'>Expending services</h1>
        <div className='grid gap-5 lg:grid-cols-6 grid-cols-3'>
        {services.map((item, index) => (
               <div className='w-[100px] h-[100px] flex flex-col gap-4 items-center justify-center p-2'>
                <div><img className='w-[40px]' src={item.icon} alt="" /></div>
                <h1 className='text-[20px] font-semibold'>{item.h1}</h1>
               </div>
            ))} 
        </div>
        <button className='max-w-[1180] mx-auto  px-6 py-3 text-white font-semibold lg:text-2xl text-[20px] bg-red-800 rounded-[10px] w-[200px]'>Find services</button>
    </div>
  )
}

export default Expending
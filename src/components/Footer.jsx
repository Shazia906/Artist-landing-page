 import React from 'react'
 import {Folder , Package , Lightbulb , Book , HeadphoneOff , Building, Headphones , } from 'lucide-react';
 import {FaLinkedin , FaTwitter , FaInstagram , FaFacebook , FaYoutube } from 'react-icons/fa';

 const footerLinks = [
    {
        title: "Category",
        icon:Folder,
        links: [
            { name: "User Interface", link: "/" },
            { name: "Use Expereince", link: "/" },
            { name: "Digital Media", link: "/" },
            { name: "LifeStyle", link: "/" },
            { name: "Programing", link: "/" },
            { name: "Animations", link: "/" },
        ],
    },
    {
        title: "Products",
        icon:Package,
        links: [
            { name: "Pricing", link: "/" },
            { name: "Overview", link: "/" },
            { name: "Browse", link: "/" },
            { name: "Acessibility", link: "/" },
            { name: "Five", link: "/" },
            { name: "Changelog", link: "/" },
        ],
    },
    {
        title: "Solutions",
        icon:Lightbulb,
        links: [
            { name: "Brainstroming", link: "/" },
            { name: "Ideation", link: "/" },
            { name: "Wireframing", link: "/" },
            { name: "Research", link: "/" },
            { name: "Desighn", link: "/" },
            { name: "Concepts", link: "/" },
        ],
    },
    {
        title: "Resourses",
        icon:Book,
        links: [
            { name: "Help Center", link: "/" },
            { name: "Blog", link: "/" },
            { name: "Taturials", link: "/" },
            { name: "FAQS", link: "/" },
            { name: "Community", link: "/" },
            { name: "Events", link: "/" },
        ],
    },
    {
        title: "Support",
        icon:Headphones,
        links: [
            { name: "Contact us", link: "/" },
            { name: "Use Expereince", link: "/" },
            { name: "Documents", link: "/" },
            { name: "Integration", link: "/" },
            { name: "Reports", link: "/" },
            { name: "Webinar", link: "/" },
        ],
    },
    {
        title: "Company",
        icon:Building,
        links: [
            { name: "About", link: "/" },
            { name: "Press", link: "/" },
            { name: "Events", link: "/" },
            { name: "Carres", link: "/" },
            { name: "Customer", link: "/" },
            { name: "Painters", link: "/" },
        ],
    },
];
 
 const Footer = () => {
   return (
      <footer className='padding text-black'>
              <div className='flex flex-col items-start border-b py-10 border-gray-500'>
          <div className='flex  justify-between lg:gap-15 gap-20 flex-wrap mt-10 items-center max-sm:px-18'>
            {footerLinks.map((section)=>(
              <div
              key={section}>
          <div className='flex gap-2'>
          <section.icon className='mt-1.5' size={24} />
          <h4 className=' font-medium text-2xl  mb-6 flex items-center justify-between'>{section.title}</h4>
          </div>
                <ul>
                  {section.links.map((link)=>(
                    <li key={link.name} className='mt-3  hover:text-gray-500 text-center'>
                      <a href="">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
              </div>
              <div className='flex justify-between  mt-24 max-sm:flex-col max-sm:items-center '>
                <div className='flex flex-1 justify-start items-center gap-5 cursor-pointer'>
                     <p>Copyright . All rights reserverd</p>
                </div>
               <div>
               <p className='cursor-pointer flex gap-2 max-sm:mt-14'>
                 <FaYoutube/>
                <FaFacebook/>
                <FaTwitter/>
                <FaInstagram/>
                <FaLinkedin/>
                 </p>
               </div>
              </div>
              <div className='mt-10'>
                <p>Best Solutions for Your  demanding collection
                Odio vulputate cras vel lacinia turpis voluput adipising .Solutions at  velt , blantdit tempus nunc in.
                Best Solutions for Your  demanding collection
                Odio vulputate cras vel lacinia turpis voluput adipising .Solutions at  velt , blantdit tempus nunc in.</p>
              </div>
          </footer>
   )
 }
 
 export default Footer
 
 
import React from 'react';

import {X , Menu} from "lucide-react";
import { useState } from 'react';
 const navItems = [
    { label: "Explore", href: "#" },
    { label: "Solutions", href: "#" },
    { label: "Articles", href: "#" },
    { label: "Sign In", href: "#" },
  ];

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="py-4">
      <div className="px-4 mx-auto lg:max-w-[1180px] lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold">xinder</span>
          </div>
          <div  className="hidden lg:flex items-center gap-6 text-[19px] font-normal">
            {navItems.map((item, index) => (
                <a href={item.href}>{item.label}</a>
            ))}
              <a
                href="#"
                className="py-2 px-4 rounded-md border-2 border-white"
              >
               Join Now
              </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end text-white">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X/> : <Menu/> }
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className=" bg-red-700 shadow-md shadow-amber-500 w-[100%] p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
                
              ))}
            </ul>
              <a href="#" className="py-2 px-3 border-2 border-white rounded-md ">
              Join Now
              </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
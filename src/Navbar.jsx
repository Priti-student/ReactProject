import React, { useState } from "react";
import "./index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <nav className="bg-[var(--nav-color)] text-white p-4 flex justify-between items-center relative">
      <div className="text-3xl font-bold">👩🏻‍🎓MySite</div>

      {/* Hamburger Icon */}
      <div className="md:hidden" onClick={toggleMenu}>
        <svg
          className="w-6 h-6 cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>

      {/* Menu Items */}
      <ul className={`p-2 md:flex md:gap-2 md:items-center md:static z-50 absolute bg-[var(--nav-color)] w-full md:w-auto left-0 top-16  md:top-0 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
        <li><a href="#Hero" className="p-1 hover:bg-[var(--nav-hover)]">Home</a></li>
        <li><a href="#Hero" className="p-1 hover:bg-[var(--nav-hover)]">About</a></li>
        <li><a href="#Contact" className="p-1 hover:bg-[var(--nav-hover)]">Contact</a></li>
        <li><a href="#Project" className="p-1 hover:bg-[var(--nav-hover)]">Project</a></li>
        <li><a href="#Skills" className="p-1 hover:bg-[var(--nav-hover)]">Skills</a></li>

      </ul>
    </nav>
  );
};

export default Navbar;
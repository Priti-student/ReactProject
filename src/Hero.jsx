import "./Hero.css";
import"./index.css";
import React, { useEffect, useState } from "react";
import profilePic from "./assets/profile.jpg"; 

const Hero = () => {
  const [rotate, setRotate] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRotate(false); 
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="Hero" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-12 bg-[var(--primary-color)]">
      
    {/* Profile Picture */}
      <div className="md:w-1/2 flex justify-center">
        <div id="image-container" className={`relative w-80 h-90 rounded-full overflow-hidden shadow-xl border-2 border-[var(--border)] ${rotate ? "spin-once" : ""}`}>
        <img src={profilePic} alt="Profile" 
             className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
        </div>
      </div>

      {/* About Text */}
      <div className="md:w-1/2 text-center md:text-left mb-8 mt-8 md:mb-0 md:mr-20 md:ml-5">
        <h1 className="text-4xl font-bold mb-4  slide-in-left transition-transform duration-300 hover:scale-102 text-[var(--secondary-color)]">Hi, I'm Priti 😊</h1>
        <p id="para1" class="text-lg mt-2 mb-4  slide-in-left transition-transform duration-300 hover:scale-102 font-bold text-[var(--heading)]" >Aspiring Web Developer | Tech Enthusiast</p>
        <p id="para2" className="text-lg text-[var(--tertiary-color)] ">
          I'm a frontend developer passionate about clean design and smooth user experience.
          I enjoy building responsive websites using React and Tailwind CSS that not only work well but also feel intuitive to use.
          <br/>
          I’m an enthusiastic web developer and keen observer, who loves noticing details and finding creative solutions to problems.
          I’m always excited to learn new skills and explore technologies — from frontend design to backend logic and even AI.
        </p>
      </div>

      
    </section>
  );
};

export default Hero;
import React from 'react';
import "./index.css";
import "./Project.css";
import "./index.css";
import project from "./assets/project.jpg"; 

export default function Project() {
  return (
    <div>
        <div id="Project" className='p-10 mt-10 flex-col justify-center items-center'>
            <h2 className="flex justify-center items-center text-5xl mb-4 font-bold">Project</h2>
            <div className=' flex justify-center items-center'>
            <div className='h-120 w-120 flex flex-col justify-center items-centers hover:bg-blue-200 shadow-3xl bg-blue-100'>
            <div className='flex justify-center items-center'>
                        <img src={project} alt="Project" 
                        className="h-100 w-100 bg-amber-50 overflow-hidden" />
                
            </div>
            <div>
                <p className='text-xl text-gray-900 flex justify-center items-center font-bold'>
                    Clone of Zairzest 4.0
                </p>
            </div>
            </div>
            </div>
            <div className="flex gap-4 mt-4 justify-center items-center">
                <a
                 href="https://github.com/Subhashree4307/TechSquad-Zaizest"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="bg-[var(--button-color)] text-white px-4 py-2 rounded hover:bg-[var(--button-hover)] transition"
                >
                GitHub
                </a>

                <a
                 href="https://techsquad-zairzest.netlify.app/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="bg-[var(--button-color)] text-white px-4 py-2 rounded hover:bg-[var(--button-hover)] transition"
                >
                 Visit Live Site
                </a>
            </div>
        </div>
    </div>
  );
}
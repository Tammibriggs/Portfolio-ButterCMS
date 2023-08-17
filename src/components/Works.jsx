import React from 'react';
import code from '../assets/cyber.png';

const Works = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#ff99cc]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-black-300 border-pink-500'>
            Work
          </p>
          <p className='py-6 text-2xl'>Check out some of my most recent work</p>
        </div>
{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-black tracking-wider'>
                Mastermind Game 
              </span>
              <p className='text-center text-white'>A Java Application</p>

            {/* Add demo video */}
              <div className='pt-4 flex justify-center items-center'>
             <video controls width='75%' height='auto' >
             <source src={require('../assets/Mastermind-Video.mp4')} type='Video/mp4' />
              Your browser does not support the video tag.
              </video>
             </div> 

                <a href='https://github.com/jaydess21/MastermindG'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
      
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-black tracking-wider'>
                Social Media Web-App
              </span>
              <p className='text-center  text-white'>A team project using React, node.js, and Mongo.DB</p>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/cen4010-fa21-g02/social-media-app'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-black tracking-wider'>
              OWASP Password Tester
              </span>
              <p className='text-center text-white'>A CBT web application built with React and Mongodb</p>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};
export default Works;
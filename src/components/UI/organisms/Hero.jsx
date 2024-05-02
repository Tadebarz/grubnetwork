import React from 'react';
import russiaedit from '../../../assets/russiaedit.mp4';

const Hero = () => {
  return (
    <div className='relative h-screen'>

        {/* Overlay div with opacity
        <div className="absolute inset-0 flex items-center justify-center bg-[#070F2B] opacity-30">
        </div> */}
        {/* Content */}
        <div className='text-center text-4xl absolute inset-0 flex flex-col items-center justify-center h-full'>

            <div className='p-20 relative w-full'>
                <div className="absolute inset-0 bg-[#242424] opacity-50 backdrop-blur-md"></div>
                <div className="relative z-10">
                <p className='text-white mb-[20px] text-5xl font-extrabold'>Welcome to Grub Network - Your Premier Gaming Server Hosting Provider</p>
                <span className='p-2 rounded-md text-white bg-gradient-to-r from-[#1B1A55] to-[#9290C3] text-4xl font-extrabold'>Elevating your gaming experience!</span>
                </div>
            </div>

        </div>
    </div>
        );
        };

export default Hero;

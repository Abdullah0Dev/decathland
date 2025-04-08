import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import { images, svgs } from '../constants';
import ShopCollection from './ShopCollection';

const Hero = () => {
  const animationDuration = 40;
  const numberOfClouds = 70;
  const totalAnimationTime = animationDuration + (numberOfClouds - 1) * 1;

  const cloudVariants = {
    animate: {
      x: [-300, '100vw'], // Move from the left edge to the right edge of the viewport
      transition: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: totalAnimationTime, // Duration of the entire animation cycle
        ease: 'linear',
        delay: 0 // No delay here, as we manage it with the individual clouds
      }
    }
  };

  const generateRandomPosition = (index) => {
    return {
      top: Math.random() * 80 + 'vh', // Random top position between 0vh and 80vh
      left: index * -40 + 'vw', // Space out clouds by 150vw intervals
      zIndex: Math.random() > 0.5 ? 0 : 30 // Randomly assign z-index 0 or 30
    };
  };

  const cloudsData = new Array(numberOfClouds).fill(null).map((_, index) => ({
    src: svgs.cloud,
    ...generateRandomPosition(index)
  }));

  return (
    <div className='relative h-[140vh] bg-blue overflow-x-hidden'>
      <Navbar />
      {/* clouds */}
      <div className='overflow-x-hidden'>
        {cloudsData.map((item, index) => (
          <motion.img
            key={index}
            src={item.src}
            className='absolute' // Adjust the spacing between clouds
            alt="cloud"
            variants={cloudVariants}
            animate="animate"
            style={{
              top: item.top,
              left: item.left,
              zIndex: item.zIndex,
              animationDelay: `${index * 1}s` // Delay each cloud individually
            }} // Start clouds at random positions and z-index
          />
        ))}
      </div>
      
        <div className='flex z-30 justify-center items-center self-center'>
          <div style={{ height: 300 }} className='flex gap-x-1 items-center -mt-9 self-center justify-center'>
            <img src={svgs.logoDecathlon} className={` object-contain w-[70%] `} alt="h" /> 
          </div>
          <img src={images.character} className='w-[40vw] absolute -mb-80 h-[40vw] z-20 object-contain' alt="mascot" />
        </div>
        <div className="fixed max-md:right-auto z-50 max-md:left-auto bottom-10 right-0">
          <ShopCollection />
        </div>
        <div className='overflow-x-hidden'>
          {cloudsData.map((item, index) => (
            <motion.img
          key={index}
          src={item.src}
          className='absolute' // Adjust the spacing between clouds
              alt="cloud"
              variants={cloudVariants}
              animate="animate"
              style={{
                top: item.top,
                left: item.left,
                zIndex: item.zIndex,
                animationDelay: `${index * 1}s` // Delay each cloud individually
              }} // Start clouds at random positions and z-index
            />
          ))}
        </div>
      </div> 
  );
};

export default Hero;

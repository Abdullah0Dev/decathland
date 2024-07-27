import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { images, svgs } from '../constants';

const ShopCollection = () => {
  const controls = useAnimation();
  const [inView, setInView] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const triggerPosition = window.innerHeight; // Adjust this value based on when you want to trigger the animation

      if (scrollPosition >= triggerPosition) {
        setInView(true);
      } else if (scrollPosition < triggerPosition - 100) {
        setInView(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start('animate');
      setAnimationTriggered(true);
    } else {
      controls.start('initial');
    }
  }, [inView, controls]);

  return (
    <motion.div
      style={{ height: 410, width: 310 }}
      className='flex px-5 flex-col z-50 items-center overflow-hidden relative justify-center'
    >
      <motion.div 
      className='flex flex-col w-full items-center justify-center'
      >
        
        {/* this one last */}
        <motion.img
          initial={{ translateY: 0 }}
          animate={controls}
          variants={{
            initial: { translateY: 0 },
            animate: { translateY: 350, transition: { delay: 0.2, duration: 0.2 } },
            reverse: { translateY: 0, transition: { duration: 0.2 } }
          }}
          src={images.btnFace}
          alt=""
          className="face w-24 h-24 object-contain"
        />
        <div className="flex justify-center py-3 w-60 items-center">
          {/* these with each other */}
          <motion.img
            initial={{ translateY: 0, rotate: 8 }}
            animate={controls}
            variants={{
              initial: { translateY: 0, rotate: 8 },
              animate: { translateY: 260, rotate: 0, transition: { delay: 0.05, duration: 0.2 } },
              reverse: { translateY: 0, rotate: 8, transition: { duration: 0.2 } }
            }}
            src={images.btnImg2}
            alt="zoom 6"
            className='w-40 h-40 -mr-20 object-contain'
          />
          <motion.img
            initial={{ translateY: 0, rotate: -8 }}
            animate={controls}
            variants={{
              initial: { translateY: 0, rotate: -8 },
              animate: { translateY: 260, rotate: 0, transition: { delay: 0.05, duration: 0.2 } },
              reverse: { translateY: 0, rotate: -8, transition: { duration: 0.2 } }
            }}
            src={images.btnImg1}
            alt="zoom 7"
            className='w-40 h-40 -mt-7 absolute -ml-24 object-contain'
          />
        </div>
        {/* absolute arrow */}
        <div className="arrow">
          <motion.img
            initial={{ translateY: 0, clipPath: 'inset(0% 0% 0% 0%)' }}
            animate={controls}
            variants={{
              initial: { translateY: 0, clipPath: 'inset(0% 0% 0% 0%)' },
              animate: { translateY: 12, clipPath: 'inset(100% 0% 0% 0%)', transition: { delay: 0.05, duration: 0.2 } },
              reverse: { translateY: 0, clipPath: 'inset(0% 0% 0% 0%)', transition: { duration: 0.2 } }
            }}
            src={svgs.arrow}
            alt="arrow"
            className='absolute left-0 bottom-20'
          />
        </div>
        <div className="absolute justify-center items-center left-auto right-auto">
          {/* this one second */}
          <motion.img
            initial={{ translateY: 0 }}
            animate={controls}
            variants={{
              initial: { translateY: 0 },
              animate: { translateY: 230, transition: { delay: 0.01, duration: 0.2 } },
              reverse: { translateY: 0, transition: { duration: 0.2 } }
            }}
            src={images.pressPlay}
            alt="zoom 8"
            className='w-24 h-24 -rotate-[30deg] object-contain'
          />
          {/* this one first */}
          <motion.img
            initial={{ translateY: 0 }}
            animate={controls}
            variants={{
              initial: { translateY: 0 },
              animate: { translateY: 185, transition: { delay: 0, duration: 0.2 } },
              reverse: { translateY: 0, transition: { duration: 0.2 } }
            }}
            src={images.btnEmoji}
            alt="zoom 8"
            className='w-12 h-12 absolute -right-6 top-12 object-contain'
          />
        </div>
        {/* text */}
        <motion.div
          initial={{ translateY: 0 }}
          animate={controls}
          variants={{
            initial: { translateY: 0 },
            animate: { translateY: 50, transition: { delay: 0.2, duration: 0.2 } },
            reverse: { translateY: 0, transition: { duration: 0.2 } }
          }}
          className="py-4"
        >
          <h1 className='uppercase text-black font-normal text-md text-center'> nouvelle collection </h1>
        </motion.div>
      </motion.div>
      {/* btn */}
      <a href="https://www.decathlon.fr/boutiques/sportswear?opeco=opeco:LANDING-YEYE_boutique_&type=opeco" target="_blank" rel="noopener noreferrer">
      
      <motion.div
        whileHover="hover"
        onHoverStart={() => animationTriggered && controls.start('animate')}
        onHoverEnd={() => animationTriggered && controls.start('reverse')}
        className='flex flex-col items-center relative'
      >
        <motion.div
          initial={{ translateY: 0 }}
          variants={{  
            hover: {
              translateY: 12,
              transition: { duration: 0.2 }
            }
          }}
          className='py-3 bg-pink cursor-pointer px-20 z-30 rounded-md border-[3px] border-black'
        >
          <h1 className='text-xl uppercase font-extrabold text-black'> shop </h1>
        </motion.div>
        <motion.img
          initial={{ scale: 1 }}
          variants={{
            hover: {
              scale: 0.9,
              transition: {  duration: 0.2 }
            }
          }}
          src={images.btnAnimate}
          alt="animate btn"
          className='absolute -bottom-3 z-0'
        />
      </motion.div>
      </a>
    </motion.div>
  );
};

export default ShopCollection;

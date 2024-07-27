import React from 'react'
import { images, svgs } from '../constants'
import { motion } from 'framer-motion'

const VideoPoster = () => {
  return (
    <motion.div 
     whileHover="hover"
    
    className='bg-[url(../assets/images/poster_bg.png)] bg-blue/40 py-12 flex justify-center items-center relative'>
      <div className='flex justify-center items-center border-4 border-black -rotate-3 w-[920px] overflow-hidden'>
        <motion.img
          src={images.poster}
          alt=""
          className='z-10'
          style={{
            transformOrigin: 'center',
          }}
          initial={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          variants={{ hover: {scale: 1.1} }} 
        />
      </div>
      <div className='flex justify-center items-center absolute -bottom-5 left-40'>
        <motion.img transition={{ duration: 0.3 }} variants={{ hover: {scale: 1.2} }} className='z-20' src={svgs.playBackground} alt="play" />
        <img className='z-30 absolute' src={svgs.play} alt="play" />
      </div>
      <img src={images.mascotVideo} className='absolute right-0 bottom-0' alt="mascot video image" />
    </motion.div>
  )
}

export default VideoPoster

import React from 'react'
import { images, svgs } from '../constants'
import { motion } from 'framer-motion'
const Welcome = () => {
  return (
    <div className='w-full   py-9'>
      <img src={images.separate} className='my-5' alt="sepeartor" />
      <div className='flex items-center max-md:scale-50 justify-center  gap-x-[15vw]'>
        <img src={images.speaking} alt="speaking" className='w-72 h-72 object-contain' />
        <div className='items-baseline   '>
          <img src={images.music} className=' ' alt="speaking" />
          <motion.img
           initial={{ zoom: 0.3 }}
           whileInView={{ zoom: 1}}
          src={svgs.logoYeyeWeller} className='w-48 h-48' alt="speaking" />
        </div>
        <img src={images.speaking} className='w-72 transform scale-x-[-1] h-72 object-contain' alt="speaking" />
      </div>
      <motion.div
        initial={{ rotate: 1 }}
        whileInView={{ rotate: -4 }}
        transition={{ duration: 0.5, repeat: 1, repeatType: "reverse", ease: "linear" }}
        className='flex justify-center  mt-12 items-center rotate-3 '>
        <img className='self-center w-[980px] ' src={images.yeyeWeller} alt="yeyeWeller" />
      </motion.div>
      <div className='py-12'>
        
      <img src={images.separate} className='my-5' alt="sepeartor" />
      </div>
      {/* About */}
      <div className='flex flex-col justify-center items-center space-y-1 '>
      <img src={images.about} className=' object-contain w-96 h-96 -mt-32' alt="about" />
      <h1 className="text-3xl text-black max-2xl:mx-40 max-sm:mx-2 text-center max-sm:text-lg -mt-32">
      Those words to the site, We can say welcome original, family,  friendly, expandable tontopia. </h1>
      
      <div className='h-9' />
      <motion.div
      whileHover="hover"
      className='flex flex-col items-center relative'>

      <motion.div
        initial={{ translateY: 0 }} 
        variants={{ hover: {  translateY: 9} }}
      className='py-3 bg-[#FCD8DB] cursor-pointer px-9 z-30 rounded-md border-[3px] border-black'>
         <h1 className='text-xl uppercase font-extrabold text-black'> Instagram </h1>
      </motion.div>
      <motion.img
      initial={{ scale: 1 }} 
      variants={{ hover: {scale: 0.9} }}
      src={images.btnAnimate} alt="animate btn"
      className='absolute -bottom-3 z-0'
      />
      </motion.div>
      <div className='h-9' />
      </div>
    </div>
  )
}

export default Welcome
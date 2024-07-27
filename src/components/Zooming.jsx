import React from 'react'
import Navbar from './Navbar'
import { svgs, images } from '../constants'
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const Zooming = () => {
  return (
    <div className='flex flex-col items-center '>
      <div className='flex justify-center max-2xl:-mt-9 max-lg:mt-[7vw] max-sm:gap-4 items-center gap-x-12'>
        <img src={svgs.logoDecathlon} alt='logo' className='object-contain max-sm:w-24 w-44 h-16' />
        <img src={svgs.cross} alt='x' className='object-contain   w-5 h-5 ' />
        <img src={svgs.logoYeyeWeller} alt='weller' className='object-contain max-sm:w-20 max-sm:h-20  w-28 h-28 ' />
      </div>
      <div className='flex relative h-72 flex-col w-[60vw] items-center '>
        <img src={images.blueStar} className='items-baseline object-contain absolute -top-16 -left-12' alt="blueStar" />
        <img src={images.lacollab} alt="locallab" className='' />
        <img src={images.tShirtBurgundyEmoji} className='items-baseline object-contain absolute bottom-24 -right-7' alt="tShirtBurgundyEmoji" />

        <img src={images.bottle} className='absolute w-52 object-contain' alt="locallab" />
      </div>

      {/* zooming images */}
      <div >
        {/*  className='flex flex-col w-full h-screen space-y-[40%]' */}
        <div className='flex  py-8'>

          <img src={images.zoom1} alt="zoom 1" className='self-start left-12  max-md:w-[50vw]  absolute -rotate-6 ' />
          <img src={images.blueStar} alt="zoom 1" className=' absolute ' />
        </div>
        <img src={images.socksEmoji} alt="zoom 1" className='left-0 absolute ' />

        <div>
          <img src={images.zoom2} alt="zoom 2" className='self-end right-12  max-md:w-[50vw]  absolute rotate-6 ' />

        </div>
        <img src={images.tShirtNoirEmoji} alt="zoom 1" className='right-0 absolute ' />
        <div className='mt-[720px]'>
          <img src={images.zoom3} alt="zoom 3" className='self-center max-md:w-[40vw] max-md:right-auto max-md:left-auto right-80 absolute rotate-6 ' />

        </div>
        <img src={images.sacBananeEmoji} alt="zoom 1" className='absolute ' />
        <div className='mt-[1200px]'>
          <img src={images.zoom4} alt="zoom 4" className='self-center max-md:w-[80vw] left-9 absolute ' />

        </div>
        <img src={images.tShirtBurgundyEmoji} alt="zoom 1" className='  right-32 absolute ' />
        <div className='mt-[1800px]'>
          <img src={images.zoom5} alt="zoom 5" className='self-center max-md:w-[40vw] right-72 absolute rotate-12 ' />

        </div>
        <img src={images.sacBananeEmoji} alt="zoom 1" className='  right-32 absolute ' />
        <div className='mt-[2200px]'>
          <img src={images.zoom6} alt="zoom 6" className='self-center max-md:w-[40vw] left-72 absolute -rotate-12 ' />

        </div>
        <img src={images.sacBananeEmoji} alt="zoom 1" className='  right-32 absolute ' />
        <div className='mt-[2600px]'>
          <img src={images.zoom7} alt="zoom 7" className='self-center max-md:w-[40vw] right-72 absolute rotate-6 ' />

        </div>
        <div className='h-[760px]' />
        <img src={images.dance} alt="dance" className='self-center max-md:w-[40vw] w-96 h-96 object-contain' />
      </div>

      <img src={images.sacBananeEmoji} alt="zoom 1" className='  right-32 absolute ' />
      <div  className='' >
        <img src={images.zoom8} alt="zoom 8" className=' left-40  z-10 max-md:w-[20vw] absolute -rotate-12 ' />
      <img src={images.sacBananeEmoji} alt="zoom 1" className='absolute bottom left-72 mt-60 ' />
      </div>
      <div className='mt-[250px]'>
          <img src={images.zoom9} alt="zoom 6" className='left-[18%]   max-md:w-[70vw] z-0 absolute ' />
        </div>

    </div>
  )
}

export default Zooming
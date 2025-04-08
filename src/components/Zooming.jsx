import React from 'react'
import Navbar from './Navbar'
import { svgs, images } from '../constants'
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const Zooming = () => {
  return (
    <div className='flex flex-col items-center '>
      <div className='pb-9'>
        <div className='flex justify-center   max-sm:gap-4 items-center gap-x-12'>
          <img src={svgs.logoDecathlon} alt='logo' className='object-contain max-sm:w-24 w-44 h-16' />
          <img src={svgs.cross} alt='x' className='object-contain   w-5 h-5 ' />
          <img src={svgs.logoYeyeWeller} alt='weller' className='object-contain max-sm:w-20 max-sm:h-20  w-28 h-28 ' />
        </div>
        <div className='flex relative  flex-col w-[60vw] items-center '>
          <img src={images.blueStar} className='items-baseline object-contain -top-16 -left-12' alt="blueStar" />
          <img src={images.lacollab} alt="locallab" className='' />
          <img src={images.tShirtBurgundyEmoji} className='items-baseline object-contain bottom-24 -right-7' alt="tShirtBurgundyEmoji" />

          <img src={images.bottle} className='w-52 object-contain' alt="locallab" />
        </div>
      </div>
      {/* zooming images */}
      <div>

        <div >
          {/*  className='flex flex-col w-full h-screen space-y-[40%]' */}
          <div className='flex mt-12 py-8'>

            <img src={images.blueStar} alt="zoom 1" className='' />
          </div>
          <img src={images.socksEmoji} alt="zoom 1" className='left-0' />
          <div className="flex max-sm:gap-x-0 gap-x-[10vw]">
            <img src={images.zoom1} alt="zoom 1" className='  max-md:w-[40vw] object-contain -rotate-6 ' />
            <img src={images.zoom2} alt="zoom 2" className='  max-md:w-[40vw] mt-44 rotate-6 ' />
          </div>

          <img src={images.tShirtNoirEmoji} alt="zoom 1" className='right-0' />
          <div className='flex justify-start max-sm:justify-center ml-32 max-sm:ml-0'>
            <img src={images.zoom3} alt="zoom 3" className=' max-md:w-[40vw] rotate-6 ' />

          </div>
          <img src={images.sacBananeEmoji} alt="zoom 1" className='' />
          <div className=' '>
            <img src={images.zoom4} alt="zoom 4" className='self-center max-md:w-[80vw] left-9' />

          </div>
          <img src={images.tShirtBurgundyEmoji} alt="zoom 1" className='right-32' />
          <div className='flex justify-end max-sm:justify-center mr-32'>
            <img src={images.zoom5} alt="zoom 5" className=' max-md:w-[40vw]  rotate-12 ' />

          </div>
          <img src={images.sacBananeEmoji} alt="zoom 1" className='right-32 absolute' />

          <img src={images.sacBananeEmoji} alt="zoom 1" className='right-32 absolute' />
          <div className='flex'>
            <img src={images.zoom6} alt="zoom 6" className='  max-md:w-[40vw] object-contain  -rotate-12 ' />
            <img src={images.zoom7} alt="zoom 7" className='  max-md:w-[40vw] mt-[80%] object-contain  rotate-6 ' />

          </div>
          <div className="w-full flex items-center justify-center my-9">
            <div>
              <img src={images.dance} alt="dance" className="max-md:w-[40vw] w-96 h-96 object-contain" />
            </div>
          </div>

        </div>

        <img src={images.sacBananeEmoji} alt="zoom 1" className='right-32' />
        <div className='absolute' >
          <img src={images.zoom8} alt="zoom 8" className='left-40 -mt-40 z-10 max-md:w-[20vw] -rotate-12 ' />
          <img src={images.sacBananeEmoji} alt="zoom 1" className=' left-72 ' />
        </div>
        <div className=' '>
          <img src={images.zoom9} alt="zoom 6" className='left-[18%]   w-[70vw] z-0' />
        </div>

      </div>
    </div>
  )
}

export default Zooming
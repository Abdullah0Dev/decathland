import React from 'react'
import {svgs, images} from '../constants'
const Navbar = () => {
    return (
        <> 
        <div className=" flex justify-start max-sm:flex-col max-lg:items-center gap-x-[11vw]  items-baseline mx-12 ">
        <img src={images.face2} alt="face2" className='object-contain max-md:hidden mt-8 w-44 h-44' />
        <div className='flex justify-center max-2xl:-mt-9 max-lg:mt-[7vw] max-sm:gap-4 items-center gap-x-12'>
            <img src={svgs.logoDecathlon} alt='logo' className='object-contain max-sm:w-24 w-44 h-16' />
            <img src={svgs.cross} alt='x' className='object-contain   w-5 h-5 ' />
            <img src={svgs.logoYeyeWeller} alt='weller' className='object-contain max-sm:w-20 max-sm:h-20  w-28 h-28 ' />
        </div> 
        <div /> 
        </div> 
        </>
    )
}

export default Navbar 
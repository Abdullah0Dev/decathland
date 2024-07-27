import React from 'react';
import { images } from '../constants';
import AdWords from './AdWords';
import { adData1 } from '../App';

const Footer = () => {
  return (
    <div className='relative bg-blue'>
      <div className='flex flex-col w-full py-12 items-center z-10 justify-center'>
        <img src={images.mascotMain} className='w-[430px] -mb-24 ml-12 h-[430px] z-20 object-contain' alt="mascot" />
        <div className='flex justify-center relative items-center'>
          <AdWords right={true} className={"rotate-6 mt-20 z-0"} color={"#37bff3"} adData={adData1} />
          <img className='object-contain w-[560px] h-[500px] -mb-20 absolute' src={images.ticketBg} alt="img bg" />
          <img className='object-contain w-[560px] h-[500px] rotate-6 -mb-20 absolute' src={images.ticket} alt="img" />
          <AdWords right={true} className={"-rotate-6 absolute -bottom-36"} color={"#A564A8"} adData={adData1} />
        </div>
      </div>
    </div>
  )
}

export default Footer;

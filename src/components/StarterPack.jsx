import React from 'react';
import { images } from '../constants';

const StarterPack = () => {
  return (
    <div className="  py-40 flex starter_pack_words w-full flex-wrap justify-center items-center">
      {/* <div className="flex items-center justify-center space-x-6 "> */}
      <div className='flex items-center justify-center flex-wrap text-wrap space-x-1'>
        
       <h1 className=' '> FESTIVAL</h1>
        <img src={images.pattern} alt="pattern" className=" w-52 object-cover h-14 max-sm:hidden max-md:h-[6vw]  border-black" />
        <h1 className=''> STARTER</h1>
        <img src={images.face2} alt="pattern" className=" w-20  max-sm:hidden  h-20  " />
        <h1 className=''> PACK</h1>
      {/* </div> */}
      {/* <div className="flex -mt-5 items-center justify-center space-x-5 "> */}
        <img src={images.pattern} alt="pattern" className=" w-52 object-cover h-14 max-sm:hidden max-md:h-[6vw] 4 border-black" />
        <h1 className=''>  ÉDITION</h1>
        <img src={images.speaking} alt="pattern" className=" object-contain max-sm:hidden max-md:h-[10vw] w-32 h-32 border-black" />
        <h1 className=''> LIMITÉE</h1> 
        <img src={images.pattern} alt="pattern" className=" w-52 object-cover h-14 max-sm:hidden max-md:h-[6vw] 4 border-black" />
      {/* </div> */}
    
      </div>
    </div>
  );
};

export default StarterPack;

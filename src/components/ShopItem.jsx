import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../constants';

/*
    socksBg,
    socks,
    socksShoot,
    tShirtNoirBg,
    tShirtNoir,
    tShirtNoirShoot,
    tShirtBlancBg,
    tShirtBlanc,
    tShirtBlancShoot,
    tShirtBurgundyBg,
    tShirtBurgundy,
    tShirtBurgundyShoot,
    sacBananeBg,
    sacBanane,
    sacBananeShoot,
    shortBg,
    short,
    shortShoot,
    casquetteBg,
    casquette,
    casquetteShoot,
    basketBg,
    basket,
    basketShoot
*/

const ShopItem = ({ color, bgImage, image, shootImage, title, price, width, height }) => {
  // const { color, bgImage, image, shootImage, title, price } = data;

  return (
    <div className=''>
      <a href="https://www.decathlon.fr/p/*/_/R-p-360138?mc=8927767&opeco=opeco:LANDING-YEYE_Tshirtnoir_&type=opeco" target="_blank" rel="noopener noreferrer">

      <motion.div whileHover="hover">
        <div className='flex flex-col justify-center  self-center items-center'>
          <motion.div
            initial={{ opacity: 1, scale: 0, rotate: 0, translateX: -50 }}
            variants={{ hover: { opacity: 1, scale: 1, rotate: 30 } }}
            transition={{ duration: 0.3 }}
            className=" -z-0 ml-6 w-52 h-52 -mt-10 absolute rounded-full"
            style={{ backgroundColor: color }}
          />
          <div className='rotate-6 scale-125'>
            <motion.img
              initial={{ opacity: 1, translateY: 20, translateX: 5 }}
              variants={{ hover: { opacity: 1, translateY: 20, translateX: 5 } }}
              src={bgImage}
              alt="background"
              className="object-contain z-10"
              style={{ width, height }}
            />
            <motion.img
              initial={{ rotate: 0, translateY: 0, translateX: 0 }}
              variants={{ hover: { rotate: 0, translateY: 20, translateX: 5 } }}
              src={image}
              alt="item"
              style={{ width, height, marginTop: -height }}
              className="object-contain absolute rotate-12 z-20 "
            />
          </div>
          <motion.img
            initial={{ opacity: 0, rotate: 0, translateX: 0 }}
            variants={{ hover: { opacity: 1, rotate: -20, translateX: -70 } }}
            transition={{ duration: 0.3 }}
            src={shootImage}
            alt="item shoot"
            className="object-contain absolute z-50 w-40 rotate-1 h-60"
          />
        </div>
        <div
          style={{ marginTop: - height / 10 }}
          className=" text-center justify-center flex-col uppercase flex self-center items-center">
          <h1 className="text-2xl font-bold flex-wrap text-wrap text-black">
            {title}
            <div className="w-3 h-3 mx-2 rounded-full inline-block bg-black" />
            {price}
          </h1>
          <motion.button
            initial={{ backgroundColor: 'transparent', borderRadius: '6.4px', padding: '12px 29px' }}
            variants={{ hover: { backgroundColor: color, borderRadius: '16px', padding: '13.6px 32.2px' } }}
            transition={{ duration: 0.1 }}
            className="rounded-xl mt-2 px-8 py-3 border-2 border-black font-bold"
          >
            SHOP
          </motion.button>
        </div>
      </motion.div>
      </a>
    </div>
  );
};

export default ShopItem;


import React from 'react';
import { motion } from 'framer-motion';
import { svgs } from '../constants';

const emojiAd = [
  { emoji: svgs.smileBlue },
  { emoji: svgs.smileRed },
  { emoji: svgs.smilePink },
];

const AdWords = ({ right, adData, color, className }) => {
  const adWidth = 210; // Width of each ad item, including padding

  return (
    <div
      style={{
        backgroundColor: color,
        borderTop: '2px solid black',
        borderBottom: '2px solid black',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
      className={className}
    >
      <motion.div
        style={{
          display: 'flex',
          flexDirection: 'row',
          willChange: 'transform',
          width: `${adWidth * adData.length * 2}px`, // Double the total width to allow seamless looping
        }}
        animate={{ x: [`0px`, `-${adWidth * adData.length}px`] }}
        transition={{ ease: 'linear', duration: 80, repeat: Infinity }}
      >
        {adData.concat(adData).map((ad, index) => (
          <div
            key={index}
            className='text-black py-3 px-3 max-lg:text-md text-xl font-bold'
          >
            {ad.title}
            {emojiAd[index % emojiAd.length] && (
              <motion.img
                src={emojiAd[index % emojiAd.length].emoji}
                alt='emoji'
                className='inline-block w-7 h-7 mx-6'
                animate={{ rotate: [0, -360, 0, 360] }}
                transition={{
                  duration: 4, // Duration of the full animation
                  repeat: Infinity,
                  ease: 'linear',
                  repeatDelay: 1, // 1-second delay between rotations
                }}
              />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AdWords;

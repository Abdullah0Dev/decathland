import React, { useEffect, useState } from 'react';
import ShopItem from './ShopItem';
import { images } from '../constants';
import { motion } from 'framer-motion';

const Products = () => {
  const [isEmojiVisible, setIsEmojiVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsEmojiVisible(window.innerWidth > 568);
    };

    window.addEventListener('resize', handleResize);

    // Check on component mount
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const shopData = [
    {
      color: '#37BFF3',
      bgImage: images.tShirtNoirBg,
      image: images.tShirtNoir,
      shootImage: images.tShirtNoirShoot,
      title: "T-shirt noir",
      price: "15€",
      emoji: images.tShirtNoirEmoji,
      emojiWidth: 80,
      emojiHeight: 80,
      width: 700,
      height: 500,
    },
    {
      color: '#FDBDD2',
      bgImage: images.sacBananeBg,
      image: images.sacBanane,
      shootImage: images.sacBananeShoot,
      title: "Sac banane",
      price: "15€",
      emoji: images.sacBananeEmoji,
      emojiWidth: 150,
      emojiHeight: 150,
      width: 700,
      height: 400,
    },
    {
      color: '#FDBDD2',
      bgImage: images.casquetteBg,
      image: images.casquette,
      shootImage: images.casquetteShoot,
      title: "Casquette",
      price: "12€",
      emoji: images.casquetteEmoji,
      emojiWidth: 210,
      emojiHeight: 210,
      width: 700,
      height: 360,
    },
    {
      color: '#F03B42',
      bgImage: images.tShirtBlancBg,
      image: images.tShirtBlanc,
      shootImage: images.tShirtBlancShoot,
      title: "T-shirt blanc",
      price: "15€",
      emoji: null,
      emojiWidth: 100,
      emojiHeight: 100,
      width: 700,
      height: 500,
    },
    // second one
    {
      color: '#FF99C8',
      bgImage: images.shortBg,
      image: images.short,
      shootImage: images.shortShoot,
      title: "Short Cargo",
      price: "25€",
      emoji: images.shortEmoji,
      emojiWidth: 80,
      emojiHeight: 80,
      width: 170,
      height: 500,
    },
    {
      color: '#A564A8',
      bgImage: images.basketBg,
      image: images.baskets,
      shootImage: images.basketShoot,
      title: "Sneaker CJ80",
      price: "50€",
      emoji: images.basketEmoji,
      emojiWidth: 300,
      emojiHeight: 300,
      width: 230,
      height: 400,
    },
    {
      color: '#37BFF3',
      bgImage: images.tShirtBurgundyBg,
      image: images.tShirtBurgundy,
      shootImage: images.tShirtBurgundyShoot,
      title: "T-shirt Burgundy",
      price: "15€",
      emoji: images.tShirtBurgundyEmoji,
      width: 700,
      height: 500,
      emojiWidth: 100,
      emojiHeight: 100,
    },
    {
      color: '#37BFF3',
      bgImage: images.socksBg,
      image: images.socks,
      shootImage: images.socksShoot,
      title: "Lot de 2 paires de chaussettes",
      price: "10€",
      emoji: images.socksEmoji,
      width: 150,
      height: 550,
      emojiWidth: 65,
      emojiHeight: 65,
    },
  ];

  return (
    <div className="flex">
      <div className='w-full items-center flex-col'>
        <img src={images.separate} className='mb-9 py-6 self-center' alt="separator" />
        <div className="flex -mt-40 w-full px-9 py-20 items-center flex-wrap justify-between">
          {shopData.splice(0, 4).map((item, index) => (
            <div key={index}>
              {item.emoji && isEmojiVisible ? (
                index % 2 === 0 ? (
                  <div className={`flex   w-[240px] h-[667px] flex-col items-center justify-between`}>
                    <motion.img
                      initial={{ scale: 1.3 }}
                      animate={{ scale: 1 }}
                      src={item.emoji}
                      className={`object-contain max-sm:hidden`}
                      style={{
                        width: window.innerWidth <= 640 ? item.emojiWidth / 1.7 : item.emojiWidth,
                        height: item.emojiHeight,
                        marginTop: 50
                      }}
                      alt="emoji"
                    />
                    <ShopItem
                      color={item.color}
                      bgImage={item.bgImage}
                      image={item.image}
                      shootImage={item.shootImage}
                      title={item.title}
                      price={item.price}
                      width={item.width}
                      height={item.height}
                    />
                  </div>
                ) : (
                  <div className={`flex   w-[240px] h-[667px] flex-col items-center justify-between`}>
                    <ShopItem
                      color={item.color}
                      bgImage={item.bgImage}
                      image={item.image}
                      shootImage={item.shootImage}
                      title={item.title}
                      price={item.price}
                      width={item.width}
                      height={item.height}
                    />
                    <motion.img
                      initial={{ scale: 1.3 }}
                      animate={{ scale: 1 }}
                      src={item.emoji}
                      style={{
                        width: window.innerWidth <= 640 ? item.emojiWidth / 1.7 : item.emojiWidth,
                        height: item.emojiHeight,
                        marginTop: 50
                      }}
                      className='object-contain max-sm:hidden'
                      alt="emoji"
                    />
                  </div>
                )
              ) : (
                <div className={`flex scale-75  ${!isEmojiVisible ? 'w-full  justify-center' : 'w-[240px]'} h-[667px] flex-col items-center justify-between`}>
                 <div className={`  ${!isEmojiVisible ? 'w-[70%]  ' : 'w-full'}  `}>
                  <ShopItem
                    color={item.color}
                    bgImage={item.bgImage}
                    image={item.image}
                    shootImage={item.shootImage}
                    title={item.title}
                    price={item.price}
                    width={item.width}
                    height={item.height}
                  />
</div>
                </div>
              )}
            </div>
          ))}
        </div>
        <img src={images.separate} className='my-5' alt="separator" />
      </div>
    </div>
  );
}

export default Products;

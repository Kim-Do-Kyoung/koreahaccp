'use client';

import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import { Stack } from '@mantine/core';
import styles from './MainIntro.Carousel.module.css';

export const MainIntroCarousel = () => {
  const imageList = ['/images/g_1.jpg', '/images/g_2.jpg', '/images/g_3.jpg'];

  return (
    <Swiper
      modules={[Autoplay, Navigation, EffectFade]}
      style={{ width: '100%', height: '100%' }}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      autoplay={{ delay: 5000 }}
      navigation
      loop
      speed={1000}
    >
      {imageList.map((imagePath, index) => (
        <SwiperSlide key={index}>
          <Stack
            className={styles.contentStack}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('${imagePath}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '500px',
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

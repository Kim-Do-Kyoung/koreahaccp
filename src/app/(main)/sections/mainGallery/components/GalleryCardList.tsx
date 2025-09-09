'use client';

import { Box } from '@mantine/core';
import { GalleryCard } from '@/app/(main)/sections/mainGallery/components/GalleryCard';
import styles from './GalleryCardList.module.css';

export const GalleryCardList = () => {
  const galleryData = [
    {
      id: 1,
      image: '/images/1.png',
      badge: '운영중',
      date: '2025.07.01',
      title: '하남 음료제조',
      size: '150.00㎡',
      price: '13,000만원',
    },
    {
      id: 2,
      image: '/images/2.png',
      badge: '운영중',
      date: '2025.05.01',
      title: '구리 온다다 제조업체',
      size: '396.00㎡',
      price: '4,000만원',
    },
    {
      id: 3,
      image: '/images/3.png',
      badge: '운영중',
      date: '2024.07.10',
      title: '양주 주야협 제조업체',
      size: '400.00㎡',
      price: '9,000만원',
    },
    {
      id: 4,
      image: '/images/4.png',
      badge: '운영중',
      date: '2024.06.28',
      title: '인천 곤약밥',
      size: '240.00㎡',
      price: '7,800만원',
    },
    {
      id: 5,
      image: '/images/5.png',
      badge: '운영중',
      date: '2024.04.18',
      title: '나주 누룽지',
      size: '396.00㎡',
      price: '17,000만원',
    },
    {
      id: 6,
      image: '/images/6.png',
      badge: '운영중',
      date: '2024.04.12',
      title: '광진구 과채가공품',
      size: '150.00㎡',
      price: '6,000만원',
    },
    {
      id: 7,
      image: '/images/7.png',
      badge: '운영중',
      date: '2023.10.26',
      title: '마포 소분업',
      size: '125.00㎡',
      price: '3,200만원',
    },
    {
      id: 8,
      image: '/images/8.png',
      badge: '운영중',
      date: '2023.09.07',
      title: '파주 즉석조리식품',
      size: '300.00㎡',
      price: '8,500만원',
    },
    {
      id: 9,
      image: '/images/9.png',
      badge: '운영중',
      date: '2023.08.24',
      title: '경기광주 장냉이',
      size: '270.00㎡',
      price: '13,000만원',
    },
    {
      id: 10,
      image: '/images/10.png',
      badge: '운영중',
      date: '2023.03.01',
      title: '고양시 감자탕 제조',
      size: '280.00㎡',
      price: '7,000만원',
    },
    {
      id: 11,
      image: '/images/11.png',
      badge: '운영중',
      date: '2022.12.21',
      title: '김포시 건자재 제조',
      size: '320.00㎡',
      price: '7,000만원',
    },
  ];
  return (
    <Box className={styles.galleryCardListWrapper}>
      {galleryData.map((item, idx) => (
        <GalleryCard
          key={idx}
          id={item.id}
          image={item.image}
          badge={item.badge}
          date={item.date}
          title={item.title}
          size={item.size}
          price={item.price}
        />
      ))}
    </Box>
  );
};

import { Stack } from '@mantine/core';
import { MainIntroCarousel } from '@/app/(main)/sections/mainIntro/components/MainIntro.Carousel';
import { MainIntroInfo } from '@/app/(main)/sections/mainIntro/components/MainIntroInfo';
import styles from './MainIntro.module.css';

export const MainIntro = () => {
  return (
    <Stack className={styles.wrapper}>
      <MainIntroCarousel />
      <MainIntroInfo />
    </Stack>
  );
};

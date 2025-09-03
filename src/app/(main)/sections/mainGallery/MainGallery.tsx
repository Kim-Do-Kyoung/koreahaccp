import { Box } from '@mantine/core';
import { GalleryCardList } from '@/app/(main)/sections/mainGallery/components/GalleryCardList';
import styles from './MainGallery.module.css';

export const MainGallery = () => {
  return (
    <Box className={styles.mainGalleryWrapper}>
      <GalleryCardList />
    </Box>
  );
};

import { Box } from '@mantine/core';
import { GallerySearch } from '@/app/(main)/sections/mainGallery/components/GallerySearch';
import styles from './MainGallery.module.css';

export const MainGallery = () => {
  return (
    <Box className={styles.mainGalleryWrapper}>
      <GallerySearch />
    </Box>
  );
};

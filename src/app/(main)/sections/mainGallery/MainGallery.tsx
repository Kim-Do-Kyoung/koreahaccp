import { Box, Stack, Text, Title } from '@mantine/core';
import { GallerySearch } from '@/app/(main)/sections/mainGallery/components/GallerySearch';
import styles from './MainGallery.module.css';

export const MainGallery = () => {
  return (
    <Box className={styles.mainGalleryWrapper}>
      <Stack>
        <Title>크린룸 및 건축 갤러리</Title>
        <Text>HACCP 기준 위생 설계 및 클린룸 구축 전문</Text>
      </Stack>
      <GallerySearch />
    </Box>
  );
};

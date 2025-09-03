// components/GalleryCard.tsx
import { Badge, Box, Group, Image, Stack, Title } from '@mantine/core';
import styles from './GalleyCard.module.css';

type GalleryCardProps = {
  image: string;
  badge: string;
  date: string;
  title: string;
  size: string;
  price: string;
};

export const GalleryCard = ({ image, badge, date, title, size, price }: GalleryCardProps) => {
  return (
    <Box className={styles.galleryCardWrapper}>
      <Image src={image} alt={title} />
      <Stack className={styles.galleryCardInfo}>
        <Group className={styles.badgeInfo}>
          <Badge>{badge}</Badge>
          <Title order={6}>{date}</Title>
        </Group>
        <Title order={4} className={styles.title}>
          {title}
        </Title>
        <Group className={styles.sizePriceInfo}>
          <Title order={6}>{size}</Title>
          <Title order={5}>{price}</Title>
        </Group>
      </Stack>
    </Box>
  );
};

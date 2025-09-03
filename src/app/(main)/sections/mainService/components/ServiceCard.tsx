// ServiceCard.tsx

import { ReactNode } from 'react';
import { Box, Text, Title } from '@mantine/core';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  icon?: ReactNode;
  title: string;
  subTitle: string;
}

export const ServiceCard = ({ icon, title, subTitle }: ServiceCardProps) => {
  return (
    <Box className={styles.card}>
      <Box className={styles.icon}>{icon}</Box>
      <Title order={4} fw={600} mb={4}>
        {title}
      </Title>
      <Text c="gray.6" size="sm">
        {subTitle}
      </Text>
    </Box>
  );
};

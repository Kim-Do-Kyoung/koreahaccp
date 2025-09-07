import { Box, Text } from '@mantine/core';
import styles from '../QuoteForm.module.css';

interface QuoteCardProps {
  icon: string;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export const QuoteCard = ({ icon, label, isSelected, onClick }: QuoteCardProps) => {
  return (
    <Box className={`${styles.card} ${isSelected ? styles.selected : ''}`} onClick={onClick}>
      <span className={styles.icon}>{icon}</span>
      <Text className={styles.cardText}>{label}</Text>
    </Box>
  );
};

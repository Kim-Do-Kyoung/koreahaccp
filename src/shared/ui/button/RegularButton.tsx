// RegularButton.tsx

import { ReactNode } from 'react';
import { Button } from '@mantine/core';
import styles from './RegularButton.module.css';

interface RegularButtonProps {
  icon?: ReactNode;
  label: string;
  onClick?: () => void;
}

export const RegularButton = ({ icon, label, onClick }: RegularButtonProps) => {
  return (
    <Button onClick={onClick} className={styles.button} variant="filled">
      <span className={styles.icon}>{icon}</span>
      {label}
    </Button>
  );
};

// RegularButton.tsx

import { ReactNode } from 'react';
import { Button } from '@mantine/core';
import styles from './RegularButton.module.css';

interface RegularButtonProps {
  icon?: ReactNode;
  label: string;
  onClick?: () => void;
  w?: string | number;
}

export const RegularButton = ({ icon, label, onClick, w }: RegularButtonProps) => {
  return (
    <Button w={w ?? '100%'} onClick={onClick} className={styles.button} variant="filled">
      <span className={styles.icon}>{icon}</span>
      {label}
    </Button>
  );
};

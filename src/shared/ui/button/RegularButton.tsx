// RegularButton.tsx

import { ReactNode } from 'react';
import { Button } from '@mantine/core';
import styles from './RegularButton.module.css';

interface RegularButtonProps {
  icon?: ReactNode;
  label: string;
  onClick?: () => void;
  w?: string | number;
  variant?: string;
}

export const RegularButton = ({ icon, label, onClick, w, variant }: RegularButtonProps) => {
  return (
    <Button
      variant={variant ?? 'filled'}
      w={w ?? '100%'}
      onClick={onClick}
      className={styles.button}
    >
      <span className={styles.icon}>{icon}</span>
      {label}
    </Button>
  );
};

import { ReactNode } from 'react';
import { Box } from '@mantine/core';
import styles from './layout.module.css';

const AdminPageLayout = ({ children }: { children: ReactNode }) => {
  return <Box className={styles.wrapper}>{children}</Box>;
};

export default AdminPageLayout;

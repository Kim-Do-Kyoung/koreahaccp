import Link from 'next/link';
import { Box, Button } from '@mantine/core';
import styles from './AdminHeader.module.css';

export const AdminHeader = () => (
  <Box className={styles.wrapper}>
    <Link href="/">
      <Button variant="outline">사이트 바로가기</Button>
    </Link>
  </Box>
);

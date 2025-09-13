import { Box, Title } from '@mantine/core';
import { AdminMainImage } from '@/app/admin/(page)/site/mainImage/sections/AdminMainImage';

export default function mainImagePage() {
  return (
    <Box p="md">
      <Title order={3}>메인 이미지 관리</Title>
      <AdminMainImage />
    </Box>
  );
}

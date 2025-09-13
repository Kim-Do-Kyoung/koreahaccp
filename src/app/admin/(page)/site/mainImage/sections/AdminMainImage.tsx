import { Box, Divider } from '@mantine/core';
import { AdminMainImageForm } from '@/app/admin/(page)/site/mainImage/components/AdminMainImage.Form';
import { AdminMainImageView } from '@/app/admin/(page)/site/mainImage/components/AdminMainImage.View';

export const AdminMainImage = () => {
  return (
    <Box>
      <AdminMainImageForm />
      <Divider my="lg" label="현재 등록된 이미지" />
      <AdminMainImageView />
    </Box>
  );
};

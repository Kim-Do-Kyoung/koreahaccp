import { Stack } from '@mantine/core';
import { MainGallery } from '@/app/(main)/sections/mainGallery/MainGallery';
import { MainIntro } from '@/app/(main)/sections/mainIntro/MainIntro';
import { MainReason } from '@/app/(main)/sections/mainReason/MainReason';
import { MainService } from '@/app/(main)/sections/mainService/MainService';

export default function MainPage() {
  return (
    <Stack gap={0}>
      <MainIntro />
      <MainGallery />
      <MainReason />
      <MainService />
    </Stack>
  );
}

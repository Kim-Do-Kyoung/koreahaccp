import { Box, Stack, Text, Title } from '@mantine/core';
import { ServiceCardList } from '@/app/(main)/sections/mainService/components/ServiceCardList';
import styles from './MainService.module.css';

export const MainService = () => {
  return (
    <Box className={styles.serviceWrapper}>
      <Stack w="100%" maw={1280} gap={40}>
        <Stack>
          <Title>주요서비스</Title>
          <Text>식품 농축산 제약 시설 / 클린룸 / 공장 / 창고 / 자동화 시스템</Text>
        </Stack>
        <ServiceCardList />
      </Stack>
    </Box>
  );
};

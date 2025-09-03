import { Box, Group, Stack, Title } from '@mantine/core';
import { ServiceCardList } from '@/app/(main)/sections/mainService/components/ServiceCardList';
import styles from './MainService.module.css';

export const MainService = () => {
  return (
    <Box className={styles.serviceWrapper}>
      <Stack>
        <Title>주요서비스</Title>
        <Title>식품 농축산 제약 시설 / 클린룸 / 공장 / 창고 / 자동화 시스템</Title>
      </Stack>
      <Group>
        <ServiceCardList />
      </Group>
    </Box>
  );
};

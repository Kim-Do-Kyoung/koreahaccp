import { Box, Button, Group, Stack, Text } from '@mantine/core';
import styles from './MainFooter.module.css';

export const MainFooter = () => {
  return (
    <Box className={styles.mainFooterWrapper}>
      <Box w="100%" maw={1280} p={20}>
        <Group justify="space-between" align="flex-start">
          <Stack gap={8}>
            <Text fw={600}>티에이치컴퍼니</Text>
            <Group gap="xs">
              <Text>icon</Text>
              <Text>1833-6151</Text>
            </Group>
            <Group gap="xs">
              <Text>icon</Text>
              <Text>서울시 강남구 역삼동 747-9, 수양빌딩 501호</Text>
            </Group>
            <Group gap="xs">
              <Text>icon</Text>
              <Text>사업자번호: 739-29-00375</Text>
            </Group>
          </Stack>

          {/* 서비스 문의 */}
          <Stack gap="xs" align="flex-end">
            <Text fw={600}>서비스 문의</Text>
            <Text c="dimmed">전문적인 인테리어 시공을 원하시나요?</Text>
            <Button variant="outline" color="teal" radius="md">
              견적 신청하기
            </Button>
          </Stack>
        </Group>

        {/* 하단 카피라이트 */}
        <Box mt="lg">
          <Text size="sm" c="dimmed" ta="center">
            © 2024 티에이치컴퍼니. All rights reserved.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

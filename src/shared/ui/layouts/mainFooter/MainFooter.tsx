import { FaIdCard, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { Box, Button, Group, Stack, Text } from '@mantine/core';
import styles from './MainFooter.module.css';

const contactInfo = [
  { icon: <FaPhone />, text: '1833-6151' },
  { icon: <FaMapMarkerAlt />, text: '서울시 강남구 역삼동 747-9, 수양빌딩 501호' },
  { icon: <FaIdCard />, text: '사업자번호: 739-29-00375' },
];

export const MainFooter = () => {
  return (
    <Box className={styles.mainFooterWrapper}>
      <Box w="100%" maw={1280} p={20}>
        <Group className={styles.footerGroup}>
          {/* 회사 정보 */}
          <Stack className={styles.footerCompanyInfo}>
            <Text fw={600}>티에이치컴퍼니</Text>
            {contactInfo.map((item, idx) => (
              <Group key={idx} gap="xs">
                <Box>{item.icon}</Box>
                <Text>{item.text}</Text>
              </Group>
            ))}
          </Stack>

          {/* 서비스 문의 */}
          <Stack className={styles.footerServiceInfo}>
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

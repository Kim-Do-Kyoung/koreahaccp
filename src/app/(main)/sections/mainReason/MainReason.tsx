import { FaUsers } from 'react-icons/fa';
import { FiCheckCircle, FiClock } from 'react-icons/fi';
import { Box, Group, Image, Stack, Text, Title } from '@mantine/core';
import styles from './MainReason.module.css';

const reasonData = [
  {
    icon: <FiCheckCircle size={30} color="#1abc9c" />,
    title: '풍부한 경험',
    description: 'HACCP, GMP 기준 위생 설계 경험과 노하우를 보유하고 있습니다.',
  },
  {
    icon: <FaUsers size={30} color="#1abc9c" />,
    title: '전문 팀',
    description: '건축, 위생, 자동화 분야 전문가가 함께합니다.',
  },
  {
    icon: <FiClock size={30} color="#1abc9c" />,
    title: '올인원 솔루션',
    description: '설계부터 시공, 유지보수까지 통합 솔루션을 제공합니다.',
  },
];

export const MainReason = () => {
  return (
    <Box className={styles.mainReasonWrapper}>
      <Group className={styles.mainReasonGroup}>
        <Stack gap={20}>
          <Title order={2}>왜 티에이치컴퍼니인가?</Title>
          <Stack>
            {reasonData.map((reason, idx) => (
              <Box key={idx} className={styles.reasonInfo}>
                <Text>{reason.icon}</Text>
                <Stack gap={8}>
                  <Title order={5}>{reason.title}</Title>
                  <Text>{reason.description}</Text>
                </Stack>
              </Box>
            ))}
          </Stack>
        </Stack>
        <Image className={styles.reasonImg} src="/images/1.png" alt="1" />
      </Group>
    </Box>
  );
};

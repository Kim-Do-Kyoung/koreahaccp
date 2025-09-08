'use client';

import { useRouter } from 'next/navigation';
import { Box, Title } from '@mantine/core';
import { RegularButton } from '@/shared/ui/button/RegularButton';
import styles from './MainIntroInfo.module.css';

export const MainIntroInfo = () => {
  const { push } = useRouter();
  return (
    <Box className={styles.infoWrapper}>
      {/*<Title order={2}>건축 기반 위생 설계 HACCP 스마트팜 올인원 솔루션</Title>*/}
      <Title order={3}>
        더원디자인그룹(주)는 최적화된 노하우를 통하여 최저의 가격으로 퀄리티 있는 인테리어를 하고
        있습니다.
        <br /> 토목, 건축부터 내부 인테리어 전부 시공을 하고 있으며 전체 또는 부분공사도 진행을 하고
        있습니다.
      </Title>
      <RegularButton label="견적 신청하기" w={130} onClick={() => push('/quote')} />
    </Box>
  );
};

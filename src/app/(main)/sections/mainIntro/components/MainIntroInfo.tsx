import { Box, Title } from '@mantine/core';
import { RegularButton } from '@/shared/ui/button/RegularButton';
import styles from './MainIntroInfo.module.css';

export const MainIntroInfo = () => {
  return (
    <Box className={styles.infoWrapper}>
      <Title order={2}>건축 기반 위생 설계 HACCP 스마트팜 올인원 솔루션</Title>
      <Title order={3}>
        티에이치컴퍼니는 건축 / 위생 설계 / 스마트팜 전문 기업입니다.
        <br /> 식품 농축산 제약 시설 / 클린룸 / 공장 / 창고 / 자동화 시스템 구축을 전문으로 합니다.
      </Title>
      <RegularButton label="견적 신청하기" />
    </Box>
  );
};

'use client';

import { useState } from 'react';
import { Box, Group, Text } from '@mantine/core';
import { QuoteCard } from '@/app/quote/sections/quoteForm/components/QuoteCard';
import { RegularButton } from '@/shared/ui/button/RegularButton';
import styles from './QuoteForm.module.css';

const cardData = [
  { icon: '🏢', label: '공사문의', value: 'gongsa' },
  { icon: '⚙️', label: '컨설팅문의', value: 'concerting' },
  { icon: '🌱', label: '스마트팜문의', value: 'smartFarm' },
  { icon: '⋯', label: '기타문의', value: 'etc' },
];

export const QuoteForm = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <Box className={styles.wrapper}>
      <Text className={styles.title}>견적 신청</Text>
      <Text className={styles.subTitle}>
        문의 유형을 선택하고 정보를 입력해주시면
        <br />
        빠른 시일 내에 연락드리겠습니다.
      </Text>

      <Box className={styles.stepBox}>
        <Text className={styles.stepTitle}>1 문의 유형 선택</Text>

        <Group className={styles.cardGroup}>
          {cardData.map((item) => (
            <QuoteCard
              key={item.label}
              icon={item.icon}
              label={item.label}
              isSelected={selected === item.label}
              onClick={() => setSelected(item.label)}
            />
          ))}
        </Group>
      </Box>
      {selected && <RegularButton w={90} label="다음 ->" />}

      <Text className={styles.footer}>전화 문의: 1833-6151</Text>
    </Box>
  );
};

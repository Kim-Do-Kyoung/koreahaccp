'use client';

import { useState } from 'react';
import { Box, Group, Text } from '@mantine/core';
import { QuoteCard } from '@/app/quote/sections/quoteForm/components/QuoteCard';
import { QuoteForm } from '@/app/quote/sections/quoteForm/components/QuoteForm';
import { RegularButton } from '@/shared/ui/button/RegularButton';
import styles from './Quote.module.css';

const step1Data = [
  { icon: '🏢', label: '공사문의', value: 'gongsa' },
  { icon: '⚙️', label: '컨설팅문의', value: 'consulting' },
  { icon: '🌱', label: '스마트팜문의', value: 'smartFarm' },
  { icon: '⋯', label: '기타문의', value: 'etc' },
];

// 문의 유형별 세부 항목
const step2Data: Record<string, { label: string; value: string }[]> = {
  gongsa: [
    { label: '건축', value: 'architecture' },
    { label: '클린룸', value: 'cleanroom' },
    { label: '설계', value: 'design' },
    { label: '기타문의', value: 'etc' },
  ],
  consulting: [
    { label: 'HACCP', value: 'HACCP' },
    { label: 'GMP', value: 'GMP' },
    { label: 'FDA', value: 'FDA' },
    { label: 'ISO', value: 'ISO' },
    { label: 'FSSC 22000', value: 'FSSC' },
    { label: '기타', value: 'etc' },
  ],
  smartFarm: [
    { label: '시설문의', value: 'facility' },
    { label: '자동화문의', value: 'automatic' },
    { label: '기타문의', value: 'etc' },
  ],
  etc: [{ label: '일반문의', value: 'general' }],
};

export const Quote = () => {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedDetail, setSelectedDetail] = useState<string | null>(null);

  const handleNext = () => {
    if (step === 1 && selectedType) {
      setStep(2);
    } else if (step === 2 && selectedDetail) {
      setStep(3);
    }
  };

  return (
    <Box className={styles.wrapper}>
      <Text className={styles.title}>견적 신청</Text>
      <Text className={styles.subTitle}>
        문의 유형을 선택하고 정보를 입력해주시면
        <br />
        빠른 시일 내에 연락드리겠습니다.
      </Text>

      {/* Step 1 */}
      {step === 1 && (
        <Box className={styles.stepBox}>
          <Text className={styles.stepTitle}>1 문의 유형 선택</Text>
          <Group className={styles.cardGroup}>
            {step1Data.map((item) => (
              <QuoteCard
                key={item.value}
                icon={item.icon}
                label={item.label}
                isSelected={selectedType === item.value}
                onClick={() => setSelectedType(item.value)}
              />
            ))}
          </Group>
        </Box>
      )}

      {/* Step 2 */}
      {step === 2 && selectedType && (
        <Box className={styles.stepBox}>
          <Text className={styles.stepTitle}>2 세부 문의 선택</Text>
          <Group className={styles.cardGroup}>
            {step2Data[selectedType].map((item) => (
              <QuoteCard
                key={item.value}
                icon="✅"
                label={item.label}
                isSelected={selectedDetail === item.value}
                onClick={() => setSelectedDetail(item.value)}
              />
            ))}
          </Group>
        </Box>
      )}

      {/* Step 3 */}
      {step === 3 && selectedType && selectedDetail && (
        <QuoteForm category={selectedType} detail={selectedDetail} />
      )}

      {/* 버튼 영역 */}
      <Group mt={20} justify="space-between">
        {step > 1 && (
          <RegularButton
            w={90}
            variant="outline"
            label="<- 이전"
            onClick={() => setStep(step - 1)}
          />
        )}
        {(step === 1 && selectedType) || (step === 2 && selectedDetail) || step === 3 ? (
          <RegularButton
            w={step === 3 ? 130 : 90}
            label={step === 3 ? '견적 신청하기' : '다음 →'}
            onClick={handleNext}
          />
        ) : null}
      </Group>

      <Text className={styles.footer}>전화 문의: 1833-6151</Text>
    </Box>
  );
};

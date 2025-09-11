import { useState } from 'react';
import { Box, FileInput, Group, Radio, Text, Textarea, TextInput } from '@mantine/core';
import styles from '@/app/quote/sections/quoteForm/Quote.module.css';

type QuoteFormProps = {
  category: string; // gongsa | consulting | smartFarm | etc
  detail: string; // 세부항목 값 (예: architecture, HACCP 등)
};

export const QuoteForm = ({ category }: QuoteFormProps) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('');
  const [farmLocation, setFarmLocation] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState('');

  return (
    <Box className={styles.stepBox}>
      <Text className={styles.stepTitle}>3 상세 정보 입력</Text>
      <Group grow>
        <TextInput
          label="이름 *"
          placeholder="성함을 입력해주세요"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <TextInput
          label="연락처 *"
          placeholder="010-0000-0000"
          value={contact}
          onChange={(e) => setContact(e.currentTarget.value)}
        />
      </Group>

      <Group grow mt="md">
        <TextInput
          label="이메일 주소 *"
          placeholder="email@example.com"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <TextInput
          label="예상금액"
          placeholder="예상 금액을 입력해주세요 (원)"
          value={budget}
          onChange={(e) => setBudget(e.currentTarget.value)}
        />
      </Group>

      {category === 'gongsa' || category === 'etc' ? (
        <TextInput mt="md" label="면적 (평수)" placeholder="평수를 입력해주세요" />
      ) : null}

      {category === 'consulting' ? (
        <Radio.Group mt="md" label="HACCP 유형">
          <Group>
            <Radio value="general" label="일반 HACCP" />
            <Radio value="small" label="소규모 HACCP" />
          </Group>
        </Radio.Group>
      ) : null}

      {category === 'smartFarm' ? (
        <Radio.Group mt="md" label="스마트팜 위치" value={farmLocation} onChange={setFarmLocation}>
          <Group>
            <Radio value="field" label="노지" />
            <Radio value="house" label="하우스" />
            <Radio value="building" label="건물내부" />
          </Group>
        </Radio.Group>
      ) : null}

      <FileInput
        mt="md"
        label="첨부파일 (도면, 명함 등)"
        placeholder="파일 선택"
        value={file}
        onChange={setFile}
      />

      <Textarea
        mt="md"
        label="추가 메세지 (선택)"
        placeholder="추가로 전달하고 싶은 내용을 입력해주세요"
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
      />
    </Box>
  );
};

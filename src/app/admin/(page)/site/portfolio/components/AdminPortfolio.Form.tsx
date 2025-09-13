'use client';

import { useState } from 'react';
import { FiFile, FiImage, FiUpload } from 'react-icons/fi';
import {
  Button,
  Card,
  FileButton,
  Group,
  Image,
  NumberInput,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';

export const AdminPortfolioForm = () => {
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [extraImages, setExtraImages] = useState<File[]>([]);

  return (
    <Card withBorder shadow="sm" radius="md" p="xl" maw={700} mx="auto">
      <Stack gap="lg">
        <Text size="xl" fw={600} ta="center">
          포트폴리오 등록
        </Text>

        {/* 프로젝트명 */}
        <TextInput label="프로젝트명" placeholder="프로젝트명을 입력하세요" required />

        {/* 카테고리 */}
        <Select
          label="카테고리"
          placeholder="카테고리를 선택하세요"
          data={['실내건축', '클린룸', '리모델링', '기타']}
          required
        />

        {/* 프로젝트 설명 */}
        <Textarea
          label="프로젝트 설명"
          placeholder="프로젝트에 대한 설명을 입력하세요"
          minRows={4}
          autosize
        />

        {/* 썸네일 이미지 업로드 */}
        <Stack gap="sm">
          <Text fw={500}>썸네일 이미지</Text>
          {thumbnail && (
            <Image src={URL.createObjectURL(thumbnail)} alt="thumbnail" radius="md" w={200} />
          )}
          <FileButton onChange={setThumbnail} accept="image/*">
            {(props) => (
              <Button variant="light" leftSection={<FiImage size={16} />} {...props}>
                {thumbnail ? '다시 선택' : '썸네일 업로드'}
              </Button>
            )}
          </FileButton>
        </Stack>

        {/* 면적 + 시공금액 */}
        <Group grow>
          <NumberInput label="면적 (㎡)" placeholder="예: 120" min={0} rightSectionWidth={50} />
          <NumberInput
            label="시공금액 (만원)"
            placeholder="예: 5000"
            min={0}
            rightSectionWidth={70}
          />
        </Group>

        {/* 완료 날짜 */}
        <DatePickerInput
          label="완료 날짜"
          placeholder="완료일을 선택하세요"
          valueFormat="YYYY-MM-DD"
        />

        {/* 추가 이미지 업로드 */}
        <Stack gap="sm">
          <Text fw={500}>추가 이미지</Text>
          <Group gap="sm">
            {extraImages.map((f, idx) => (
              <Image
                key={idx}
                src={URL.createObjectURL(f)}
                alt={`extra-${idx}`}
                radius="md"
                w={100}
              />
            ))}
          </Group>
          <FileButton
            onChange={(f) => f && setExtraImages((prev) => [...prev, f])}
            accept="image/*"
          >
            {(props) => (
              <Button variant="light" leftSection={<FiUpload size={16} />} {...props}>
                추가 이미지 업로드
              </Button>
            )}
          </FileButton>
        </Stack>

        {/* 저장 버튼 */}
        <Group justify="center" mt="lg">
          <Button size="md" leftSection={<FiFile size={18} />}>
            저장하기
          </Button>
        </Group>
      </Stack>
    </Card>
  );
};

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Badge, Card, Container, Group, Image, Stack, Text, Title } from '@mantine/core';
import { RegularButton } from '@/shared/ui/button/RegularButton';

export const Construction = ({ id }: { id: string }) => {
  const [selectedImage, setSelectedImage] = useState('/images/1.png');
  const thumbnails = ['/images/2.png', '/images/3.png', '/images/4.png', '/images/5.png'];
  const { push } = useRouter();

  return (
    <Container>
      <Card withBorder shadow="sm" radius="md" p="lg">
        <Group align="flex-start" grow>
          {/* Left: Image Section */}
          <Stack style={{ flex: 2 }}>
            <Image src={selectedImage} radius="md" fit="contain" height={400} />
            <Group>
              {thumbnails.map((thumb, i) => (
                <Image
                  key={i}
                  src={thumb}
                  w={80}
                  h={80}
                  radius="sm"
                  fit="cover"
                  onClick={() => setSelectedImage(thumb)}
                  style={{
                    cursor: 'pointer',
                    border: selectedImage === thumb ? '2px solid #228be6' : '1px solid #ddd',
                  }}
                />
              ))}
            </Group>
          </Stack>

          {/* Right: Info Section */}
          <Stack style={{ flex: 1 }}>
            <Stack>
              <Badge color="teal" size="lg">
                클린룸
              </Badge>
              <Title order={3}>하남 음료제조</Title>
              <Text size="sm" color="dimmed">
                시공일자: 2025.07.01
              </Text>
              <Text size="sm" color="dimmed">
                공사면적: 150.0㎡ (약 45평)
              </Text>
              <Text size="sm" color="dimmed">
                공사금액: 13,000만원
              </Text>
            </Stack>

            <Card withBorder radius="md" p="md">
              <Title order={4} mb="sm">
                프로젝트 설명
              </Title>
              <Text size="sm">
                하남음료 제조공장이고 평수는 50평입니다. 공사기간은 1개월정도 소요되었고 바닥 트렌치
                및 배수로 공사가 시간이 많이 걸렸습니다. 식약처인증 컨설팅은 서류만 200만원부터
                입니다.
              </Text>
            </Card>
            <Group wrap="nowrap">
              <RegularButton label="목록으로 돌아가기" variant="outline" />
              <RegularButton
                label="견적 문의하기"
                variant="filled"
                onClick={() => push('/quote')}
              />
            </Group>
          </Stack>
        </Group>
      </Card>
    </Container>
  );
};

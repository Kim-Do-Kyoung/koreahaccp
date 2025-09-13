'use client';

import axios from 'axios';
import { FiFolder } from 'react-icons/fi';
import { useQuery } from 'react-query';
import { Badge, Card, Group, Image, SimpleGrid, Stack, Text } from '@mantine/core';

type Portfolio = {
  id: string;
  projectName: string;
  category: string;
  description: string;
  thumbnailUrl: string;
  area: number;
  cost: number;
  completedAt: string;
};

export const AdminPortfolioView = () => {
  const { data, isLoading } = useQuery<Portfolio[]>({
    queryKey: ['portfolio'],
    queryFn: async () => {
      const res = await axios.get('/api/portfolio');
      return res.data;
    },
  });

  if (isLoading) {
    return <Text>불러오는 중...</Text>;
  }
  if (!data || data.length === 0) {
    return <Text>등록된 포트폴리오가 없습니다.</Text>;
  }

  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
      {data.map((item) => (
        <Card key={item.id} withBorder shadow="sm" radius="md">
          <Card.Section>
            <Image src={item.thumbnailUrl} alt={item.projectName} height={160} fit="cover" />
          </Card.Section>
          <Stack gap="xs" mt="sm">
            <Group justify="space-between">
              <Text fw={600}>{item.projectName}</Text>
              <Badge color="blue" leftSection={<FiFolder size={12} />}>
                {item.category}
              </Badge>
            </Group>
            <Text size="sm" c="dimmed" lineClamp={2}>
              {item.description}
            </Text>
            <Text size="sm">면적: {item.area}㎡</Text>
            <Text size="sm">시공금액: {item.cost.toLocaleString()} 만원</Text>
            <Text size="sm" c="dimmed">
              완료일: {new Date(item.completedAt).toLocaleDateString()}
            </Text>
          </Stack>
        </Card>
      ))}
    </SimpleGrid>
  );
};

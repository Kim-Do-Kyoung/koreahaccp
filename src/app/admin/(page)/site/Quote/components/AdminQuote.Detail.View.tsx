'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Card, Loader, Stack, Text } from '@mantine/core';

type QuoteDetail = {
  id: string;
  title: string;
  author: string;
  content: string;
  status: string;
  createdAt: string;
};

export const AdminQuoteDetailView = ({ id }: { id: string }) => {
  const { data, isLoading } = useQuery<QuoteDetail>({
    queryKey: ['quote', id],
    queryFn: async () => {
      const res = await axios.get(`/api/quote/${id}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }
  if (!data) {
    return <Text>데이터 없음</Text>;
  }

  return (
    <Card shadow="sm" radius="md" p="lg">
      <Stack gap="sm">
        <Text fw={600} size="lg">
          {data.title}
        </Text>
        <Text c="dimmed" size="sm">
          작성자: {data.author} | 상태: {data.status}
        </Text>
        <Text size="sm">등록일: {new Date(data.createdAt).toLocaleString()}</Text>

        <Text>{data.content}</Text>
      </Stack>
    </Card>
  );
};

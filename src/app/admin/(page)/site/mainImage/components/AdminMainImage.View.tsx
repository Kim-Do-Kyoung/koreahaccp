'use client';

import axios from 'axios';
import { useQuery } from 'react-query';
import { Center, Image, Loader, SimpleGrid, Text } from '@mantine/core';

export const AdminMainImageView = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['mainImage'],
    queryFn: async () => {
      const res = await axios.get('/api/files/mainImage/');
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  if (!data || data.length === 0) {
    return <Text c="dimmed">아직 업로드된 메인 이미지가 없습니다.</Text>;
  }

  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
      {data.map((item: any) => (
        <Image
          key={item.externalId}
          src={`/api/files/download/${item.externalId}`}
          alt={item.originalName}
          radius="md"
        />
      ))}
    </SimpleGrid>
  );
};

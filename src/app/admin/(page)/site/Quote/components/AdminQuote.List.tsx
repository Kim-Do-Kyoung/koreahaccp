'use client';

import Link from 'next/link';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Anchor, Box, Loader, Table, Text } from '@mantine/core';

type Quote = {
  id: string;
  title: string;
  author: string;
  createdAt: string;
  status: string;
};

export const AdminQuoteList = () => {
  const { data, isLoading } = useQuery<Quote[]>({
    queryKey: ['quote'],
    queryFn: async () => {
      const res = await axios.get('/api/quote');
      return res.data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  if (!data || data.length === 0) {
    return <Text>문의 내역이 없습니다.</Text>;
  }

  return (
    <Box>
      <Table striped highlightOnHover withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>번호</Table.Th>
            <Table.Th>제목</Table.Th>
            <Table.Th>작성자</Table.Th>
            <Table.Th>상태</Table.Th>
            <Table.Th>등록일</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data.map((inq, idx) => (
            <Table.Tr key={inq.id}>
              <Table.Td>{idx + 1}</Table.Td>
              <Table.Td>
                <Anchor component={Link} href={`/admin/quote/${inq.id}`}>
                  {inq.title}
                </Anchor>
              </Table.Td>
              <Table.Td>{inq.author}</Table.Td>
              <Table.Td>{inq.status}</Table.Td>
              <Table.Td>{new Date(inq.createdAt).toLocaleDateString()}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Box>
  );
};

'use client';

import { Box, Group, Pagination, Table, Text } from '@mantine/core';
import styles from './Notice.module.css';

const dummyData = [
  { id: 1, title: '공지사항 1', author: '관리자', date: '2025-09-01' },
  { id: 2, title: '공지사항 2', author: '운영팀', date: '2025-08-20' },
  { id: 3, title: '공지사항 3', author: '관리자', date: '2025-08-10' },
  { id: 4, title: '공지사항 4', author: '운영팀', date: '2025-07-30' },
];

export const Notice = () => {
  return (
    <Box className={styles.wrapper}>
      <Text className={styles.title}>인테리어 팁</Text>

      <Table highlightOnHover className={styles.table}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th className={styles.th}>번호</Table.Th>
            <Table.Th className={styles.th}>제목</Table.Th>
            <Table.Th className={styles.th}>작성자</Table.Th>
            <Table.Th className={styles.th}>작성일</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {dummyData.map((row) => (
            <Table.Tr key={row.id}>
              <Table.Td>{row.id}</Table.Td>
              <Table.Td className={styles.titleCell}>{row.title}</Table.Td>
              <Table.Td>{row.author}</Table.Td>
              <Table.Td>{row.date}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

      <Group justify="center" mt="lg">
        <Pagination total={5} />
      </Group>
    </Box>
  );
};

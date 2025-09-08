import Link from 'next/link';
import { Box, Button, Divider, Text } from '@mantine/core';
import styles from './NoticeDetail.module.css';

export const NoticeDetail = ({ params }: { params: { id: string } }) => {
  const dummyData = [
    {
      id: 1,
      title: '공지사항 1',
      author: '관리자',
      date: '2025-09-01',
      content: '공지사항 1의 상세 내용입니다.',
    },
    {
      id: 2,
      title: '공지사항 2',
      author: '운영팀',
      date: '2025-08-20',
      content: '공지사항 2의 상세 내용입니다.',
    },
    {
      id: 3,
      title: '공지사항 3',
      author: '관리자',
      date: '2025-08-10',
      content: '공지사항 3의 상세 내용입니다.',
    },
    {
      id: 4,
      title: '공지사항 4',
      author: '운영팀',
      date: '2025-07-30',
      content: '공지사항 4의 상세 내용입니다.',
    },
  ];

  const notice = dummyData.find((n) => n.id === Number(params.id));

  if (!notice) {
    return <Text>해당 게시글을 찾을 수 없습니다.</Text>;
  }

  return (
    <Box className={styles.wrapper}>
      <Text className={styles.title}>{notice.title}</Text>
      <Box className={styles.meta}>
        <Text size="sm">작성자: {notice.author}</Text>
        <Text size="sm">작성일: {notice.date}</Text>
      </Box>
      <Divider my="md" />
      <Text className={styles.content}>{notice.content}</Text>
      <Divider my="lg" />
      <Box className={styles.footer}>
        <Link href="/notice">
          <Button variant="light" color="teal">
            목록으로
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

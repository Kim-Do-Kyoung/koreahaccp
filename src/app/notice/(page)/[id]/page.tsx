import { Center } from '@mantine/core';
import { NoticeDetail } from '@/app/notice/sections/NoticeDetail';

export default function NoticeDetailPage({ params }: { params: { id: string } }) {
  return (
    <Center mih="70vh" p={30}>
      <NoticeDetail params={params} />
    </Center>
  );
}

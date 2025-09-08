import { usePathname } from 'next/navigation';
import { notifications } from '@mantine/notifications';

export const useShare = () => {
  const pathname = usePathname();
  const currentUrl = process.env.NEXT_PUBLIC_CURRENT_URL + pathname;

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: '기타는 기타집',
          text: '이 악보를 확인해보세요!',
          url: currentUrl,
        });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(currentUrl);
        notifications.show({ message: '클립보드에 복사되었습니다.' });
      }
    } catch (err) {
      notifications.show({ message: '공유하기 취소' });
    }
  };

  return { handleShare };
};

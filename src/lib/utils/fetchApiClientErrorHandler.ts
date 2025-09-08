'use client';

import { notifications } from '@mantine/notifications';

export function openClientErrorToast(message: string) {
  notifications.show({
    title: '오류 발생',
    message,
    color: 'red',
    autoClose: 5000,
    withCloseButton: true,
  });
}

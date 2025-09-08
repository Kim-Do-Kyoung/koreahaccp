import { notifications } from '@mantine/notifications';

const extractFilenameFromDisposition = (header: string | null): string | null => {
  if (!header) {
    return null;
  }

  const matchUtf = header.match(/filename\*=UTF-8''(.+)/);
  if (matchUtf) {
    return decodeURIComponent(matchUtf[1]);
  }

  const matchBasic = header.match(/filename="(.+?)"/);
  if (matchBasic) {
    return matchBasic[1];
  }

  return null;
};

export const handleDownload = async (token: string, productId: number, orderExternalId: string) => {
  try {
    const res = await fetch('/api/files/download', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fileKey: token, productId, externalId: orderExternalId }),
    });

    if (!res.ok) {
      throw new Error('파일 다운로드 실패');
    }

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);

    const disposition = res.headers.get('Content-Disposition');
    const fileName = extractFilenameFromDisposition(disposition) ?? 'downloaded_file';

    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();

    URL.revokeObjectURL(url);
  } catch (e) {
    notifications.show({
      message: '다운로드에 실패했습니다',
      color: 'red',
    });
  }
};

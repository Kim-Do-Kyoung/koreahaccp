import { fetchApi } from '@/lib/utils/fetchApi';

export function logVisitIfNeeded() {
  const rawPath = window.location.pathname;
  // 수집에서 제외할 경로
  if (rawPath.startsWith('/admin') || rawPath.startsWith('/login/') || rawPath === '/register') {
    return;
  }

  const normalizedPath = normalizePath(rawPath);
  const clientId = getCookie('cid');
  const accessToken = getCookie('access_token');

  const anonymous = accessToken === null;
  try {
    fetchApi.post('/api/statistics/visit-history', {
      path: normalizedPath,
      clientId,
      anonymous,
    });
  } catch (e) {
    // 예외 발생해도 별도 처리 안 함
  }
}

function normalizePath(path: string): string {
  /**
   * 개인 식별 방지를 위한 path normalize
   */
  const rules: [RegExp, string][] = [
    [/^\/shop\/order\/[^/]+$/, '/shop/order/:id'],
    [/^\/mypage\/sheet-history\/[^/]+$/, '/mypage/sheet-history/:id'],
  ];

  for (const [regex, normalized] of rules) {
    if (regex.test(path)) {
      return normalized;
    }
  }

  return path;
}

function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift() ?? null;
  }
  return null;
}

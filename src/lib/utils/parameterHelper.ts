import qs from 'qs';

/**
 * 쿼리스트링 → 인터페이스 T 형태로 파싱
 *
 * @param qsStr - window.location.search 혹은 직접 전달된 쿼리스트링
 * @returns T 형태의 객체
 */
export function parseQueryString<T>(qsStr: string | URLSearchParams): T {
  const query = typeof qsStr === 'string' ? qsStr : qsStr.toString();

  return qs.parse(query, {
    ignoreQueryPrefix: true,
    depth: 5,
  }) as unknown as T;
}

/**
 * 인터페이스 T 형태 객체 → 쿼리스트링으로 직렬화
 *
 * @param params - 인터페이스 T 형태 파라미터
 * @param prefix - 쿼리 앞에 '?' 포함 여부 (기본 true)
 * @returns 직렬화된 쿼리스트링
 */
export function buildQueryString<T>(params: T, prefix = true): string {
  return qs.stringify(params, {
    addQueryPrefix: prefix,
    skipNulls: true, // null/undefined 필드 건너뛰기
    arrayFormat: 'brackets', // 배열 → filters[]=a&filters[]=b
  });
}

/**
 * 객체가 빈 객체({})인지 판단
 *
 * @param value 검사할 값
 * @returns 빈 객체면 true
 */
export const isEmptyObject = (value: unknown): value is Record<string, never> => {
  return (
    typeof value === 'object' &&
    value !== null &&
    Object.keys(value).length === 0 &&
    value.constructor === Object
  );
};

/**
 * 빈 객체면 기본값 반환, 아니면 원래 객체 반환
 *
 * @template T 반환 타입
 * @param value 검사할 객체
 * @param fallbackValue obj가 빈 객체일 경우 반환할 기본값
 * @returns obj가 빈 객체이면 defaultValue, 아니면 obj 자체
 */
export const fallbackIfEmpty = <T extends object>(value: unknown, fallbackValue: T): T => {
  return isEmptyObject(value) ? fallbackValue : (value as T);
};

/**
 * 객체가 빈 객체가 아니면 presentValue 반환, 아니면 fallbackValue 반환
 *
 * @template T 입력값 타입
 * @template R 반환값 타입
 * @param value 검사할 값
 * @param presentValue 값이 있을 때 반환할 값
 * @param fallbackValue 값이 없을 때 반환할 기본값
 * @returns 조건에 따라 presentValue 또는 fallbackValue
 */
export function fallbackIfPresent<T, R>(
  value: T | null | undefined,
  presentValue: R,
  fallbackValue: R
): R {
  return isEmptyObject(value) ? fallbackValue : presentValue;
}

/**
 * 객체가 빈 객체가 아니면 presentFn 실행 결과 반환, 아니면 fallback 반환
 *
 * @template T 입력값 타입
 * @template R 반환값 타입
 * @param value 검사할 값
 * @param presentFn 값이 있을 때 실행할 함수
 * @param fallbackValue 값이 없을 때 사용할 기본값
 * @returns 조건에 따라 presentFn(value) 또는 fallbackValue
 */
export function fallbackIfPresentFn<T, R>(
  value: T | null | undefined,
  presentFn: (v: T) => R,
  fallbackValue: R
): R {
  return isEmptyObject(value) ? fallbackValue : presentFn(value as T);
}

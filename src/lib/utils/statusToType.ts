type BadgeType = 'success' | 'processing' | 'fail' | 'info';

const statusToTypeMap: Record<string, BadgeType> = {
  // 성공
  PAID: 'success',
  DONE: 'success',
  COMPLETED: 'success',
  SUCCESS: 'success',

  // 처리중
  CREATED: 'processing',
  IN_PROGRESS: 'processing',
  REQUESTED: 'info',

  // 실패
  FAILED: 'fail',
  CANCELLED: 'fail',
  REJECTED: 'fail',

  // 정보
  APPROVED: 'info',
  REFUNDING: 'info',
};

export const statusToType = (value: string): BadgeType => {
  return statusToTypeMap[value] ?? 'processing';
};

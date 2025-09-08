// validateRequired: 필수 입력 필드 검증
export const validateRequired = (value: string | undefined, fieldName: string) =>
  value ? null : `${fieldName}을(를) 입력해 주세요.`;

// validateEmail: 이메일 형식 검증
export const validateEmail = (value: string) => {
  if (!value) {
    return '이메일을 입력해 주세요.';
  }
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : '유효한 이메일 형식이 아닙니다.';
};

export const validateEmailDomain = (value: string) => {
  if (!value) {
    return '이메일(도메인)을 선택해주세요.';
  }

  const domainReg = /^[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  return domainReg.test(value) ? null : '유효한 도메인을 입력해주세요.';
};

export const validatePhone = (value: string | undefined) => {
  if (!value) {
    return '연락처를 입력해 주세요.';
  }

  const cleaned = value.replace(/[^\d]/g, '');
  if (cleaned.length < 10) {
    return null;
  }

  // 11자리 미만일 경우 안내
  if (cleaned.length !== 11) {
    return '숫자 11자리의 전화번호를 입력해 주세요.';
  }

  const phoneRegex = /^010\d{4}\d{4}$/;
  return phoneRegex.test(cleaned) ? null : '연락처 형식이 올바르지 않습니다.';
};

/**
 * 비밀번호 검증
 * @param value
 */
export const validatePassword = (value: string | undefined) => {
  if (!value) {
    return '비밀번호를 입력해주세요.';
  }

  const numberReg = /\d/;
  const specialReg = /[!@#$%^&*(),.?":{}|<>]/;
  const letterReg = /[a-zA-Z]/;

  if (value.length < 8) {
    return '최소 8자리 이상 입력 하세요.';
  }
  if (!letterReg.test(value)) {
    return '문자를 포함해야 합니다.';
  }
  if (!numberReg.test(value)) {
    return '숫자를 포함해야 합니다.';
  }
  if (!specialReg.test(value)) {
    return '특수문자를 포함해야 합니다.';
  }
};

export const validateId = (value: string | undefined) => {
  if (!value) {
    return '아이디를 입력해주세요.';
  }

  const idReg = /^[A-Za-z0-9]{6,20}$/;

  return idReg.test(value) ? null : '아이디 형식이 올바르지 않습니다.';
};

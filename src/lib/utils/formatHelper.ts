import dayjs from 'dayjs';
import { DateFormat } from '@/lib/utils/dateHelper';

export const FormatHelper = {
  formatDate: (value?: string | number | Date | null, format: DateFormat = 'YYYY-MM-DD') => {
    const date = dayjs(value);
    return date.isValid() ? date.format(format) : '-';
  },

  formatCurrency: (value?: string | number | null) => {
    if (!value) {
      return '-';
    }

    return `${value.toLocaleString()}원`;
  },

  formatPhone: (value?: string) => {
    if (!value) {
      return '';
    }

    const digits = value.replace(/\D/g, '');
    const len = digits.length;

    // 서울 지역번호 (02)
    if (digits.startsWith('02')) {
      if (len <= 2) {
        return digits;
      }
      if (len <= 5) {
        return `${digits.slice(0, 2)}-${digits.slice(2)}`;
      }
      if (len <= 9) {
        return `${digits.slice(0, 2)}-${digits.slice(2, 5)}-${digits.slice(5)}`;
      }
      return `${digits.slice(0, 2)}-${digits.slice(2, 6)}-${digits.slice(6, 10)}`;
    }

    // 일반 지역번호 or 휴대폰 (3자리 시작)
    if (len <= 3) {
      return digits;
    }
    if (len <= 6) {
      return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    }
    if (len <= 10) {
      return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
    }
    return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
  },

  formatBoolean: (value?: boolean) => (value ? '예' : '아니오'),
};

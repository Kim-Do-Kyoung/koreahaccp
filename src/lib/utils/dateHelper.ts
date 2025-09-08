import dayjs from 'dayjs';

export type DateFormat =
  | 'YYYY-MM-DD'
  | 'YYYY.MM.DD.'
  | 'YYYY/MM/DD'
  | 'YYYY년 MM월 DD일'
  | 'YY-MM-DD'
  | 'YYYYMMDD'
  | 'YYYY-MM-DD HH:mm'
  | 'YYYY-MM-DD HH:mm:ss';

export type DateRange = 'NOW' | '1W' | '1M' | '3M' | '6M' | '12M';

const DefaultDateFormat = 'YYYYMMDD';

export const DateHelper = {
  now: () => dayjs(),
  range: (range: DateRange): [string, string] => {
    switch (range) {
      case 'NOW':
        return [
          DateHelper.now().format(DefaultDateFormat),
          DateHelper.now().format(DefaultDateFormat),
        ];
      case '1W':
        return [
          DateHelper.now().subtract(1, 'week').format(DefaultDateFormat),
          DateHelper.now().format(DefaultDateFormat),
        ];
      case '1M':
        return [
          DateHelper.now().subtract(1, 'month').format(DefaultDateFormat),
          DateHelper.now().format(DefaultDateFormat),
        ];
      case '3M':
        return [
          DateHelper.now().subtract(3, 'month').format(DefaultDateFormat),
          DateHelper.now().format(DefaultDateFormat),
        ];
      case '6M':
        return [
          DateHelper.now().subtract(6, 'month').format(DefaultDateFormat),
          DateHelper.now().format(DefaultDateFormat),
        ];
      case '12M':
        return [
          DateHelper.now().subtract(12, 'month').format(DefaultDateFormat),
          DateHelper.now().format(DefaultDateFormat),
        ];
    }
  },
};

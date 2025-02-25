import { ComboboxItem } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';

export interface IDataTableCellBase {
  id: number | string;
}

export interface IDataTableColDef {
  field: string;
  headerName?: string;
  width?: number | string;
  align?: 'left' | 'center' | 'right' | undefined;
  formatter?: (
    value: string | number | null,
    format?: 'YYYY-MM-DD' | 'YYYY.MM.DD.' | 'YYYY/MM/DD' | 'YYYY년 MM월 DD일'
  ) => string;
  codes?: ComboboxItem[];
  command?: IDataTableCommand;
  whiteSpace?: boolean; // default:false
  showHtml?: boolean;
  renderer?: (row: any) => any;
}

export interface IDataEditTableColOptions extends IDataTableColDef {
  editable?: boolean;
  editorType?:
    | 'input'
    | 'checkbox'
    | 'select'
    | 'calendar'
    | 'command'
    | 'command-remove'
    | 'command-download'
    | 'time'
    | undefined;
  form?: UseFormReturnType<any>;
}

export interface IDataTableCommand {
  label: string;
  onClick: (row?: any, index?: number) => void;
  options?: (row?: any) => string;
}

export interface IDataTableOptions {
  horizontalSpacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  verticalSpacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  highlightOnHover?: boolean;
  onRowDoubleClick?: (row: any) => void;
  onRowClick?: (row: any) => void;
  pagination?: boolean;
  pageSize?: number;
  selectableRows?: boolean; // 체크박스 옵션 추가
  showDataResult?: boolean; // 검색결과 표시
  buttons?: IDataTableCommand[]; // 상단버튼
  showRowNumber?: boolean; // default: true
  selectedRowBackgroundColor?: boolean;
  cursor?: 'pointer' | 'unset'; // 마우스 커서
  width?: number; // 테이블 넓이
  showTitle?: boolean; // 타이틀표시여부
  titleName?: string; // 테이블 제목
  fixedHeight?: boolean; // 데이블 높이 고정 (스크롤)
}

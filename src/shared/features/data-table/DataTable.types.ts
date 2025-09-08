import { UseFormReturnType } from '@mantine/form';
import { CodeBase } from '@/lib/api/common/code/code.types';
import { ISearchOptions } from '@/shared/features/data-search-bar/SearchBar';
import { ApiPage } from '@/shared/types/common/ApiResponse.type';

export interface IDataTableCellBase {
  id: number | string;
}

export interface IDataTableColDef {
  field: string;
  headerName?: string;
  width?: number | string;
  height?: number | string;
  align?: 'left' | 'center' | 'right' | undefined;
  formatter?: (
    value: string | number | null,
    format?: 'YYYY-MM-DD' | 'YYYY.MM.DD.' | 'YYYY/MM/DD' | 'YYYY년 MM월 DD일'
  ) => string;
  codes?: CodeBase[];
  command?: IDataTableCommand;
  whiteSpace?: boolean; // default:false
  showHtml?: boolean;
  renderer?: (row: any) => any;
  color?: string;
  headerAlign?: 'left' | 'center' | 'right';
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
  serverPagination?: boolean; // 서버페이징
  serverPaginationHandler?: (page: number) => void;
  serverPaginationData?: ApiPage;
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
  searchBarOption?: ISearchOptions; // 검색창
  showHeader?: boolean; // 테이블 헤어 표시 여부
  direction?: 'column' | 'column-reverse'; // 옵션 위치 선택
  buttonDirection?:
    | 'space-between'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-around'
    | 'space-evenly'
    | 'stretch';
}

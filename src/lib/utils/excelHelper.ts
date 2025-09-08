import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

interface ColDef<T> {
  field: keyof T;
  headerName?: string;
}

/**
 * JSON 데이터를 엑셀 파일로 다운로드
 * @param data 엑셀로 변환할 JSON 배열 예: BoardResponse 같은 타입
 * @param colDefs 엑셀 헤더 정보 AdminDataTableColDef 일부
 * @param fileName 저장될 파일명 (확장자 제외)
 */
export const exportToExcel = <T extends object>(
  data: T[],
  colDefs: ColDef<T>[],
  fileName = '엑셀다운로드'
) => {
  // 1. headerName 기반으로 key → label 매핑 생성
  const headerMap = colDefs.reduce<Record<string, string>>((acc, def) => {
    acc[def.field as string] = def.headerName || (def.field as string);
    return acc;
  }, {});

  // 2. 데이터 변환: key를 한글 headerName으로 치환
  const transformed = data.map((row) => {
    const obj: Record<string, any> = {};
    for (const def of colDefs) {
      obj[headerMap[def.field as string]] = row[def.field];
    }
    return obj;
  });

  // 3. 워크북 생성 및 파일 저장
  const worksheet = XLSX.utils.json_to_sheet(transformed);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

  const workbookOut = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([workbookOut], { type: 'application/octet-stream' });

  saveAs(blob, `${fileName}.xlsx`);
};

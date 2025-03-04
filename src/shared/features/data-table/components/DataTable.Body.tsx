import { useState } from 'react';
import { Table } from '@mantine/core';
import { DataTableRow } from '@/shared/features/data-table/components/DataTable.Row';
import {
  IDataTableCellBase,
  IDataTableColDef,
  IDataTableOptions,
} from '@/shared/features/data-table/DataTable.types';

export const DataTableBody = <T extends IDataTableCellBase>({
  page,
  currentPageData,
  colDefs,
  options,
}: {
  page: number;
  currentPageData: T[];
  colDefs: IDataTableColDef[];
  options?: IDataTableOptions;
}) => {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);

  const getRowNumber = (currentPageIndex: number) => {
    const pageSize = options?.pageSize || 10;
    return (page - 1) * pageSize + currentPageIndex + 1;
  };

  const getColumnSize = () => {
    return (
      colDefs.length +
      (options?.selectableRows ? 1 : 0) +
      (options?.showRowNumber !== false ? 1 : 0)
    );
  };

  const NoDataTableBody = () => (
    <Table.Tr>
      <Table.Td colSpan={getColumnSize()}>표시할 데이터가 없습니다.</Table.Td>
    </Table.Tr>
  );

  return (
    <Table.Tbody>
      {currentPageData.length === 0 && <NoDataTableBody />}
      {currentPageData.map((row, index) => (
        <DataTableRow
          key={index}
          rowNumber={getRowNumber(index)}
          row={row}
          isSelected={selectedRows.some((item) => item.id === row.id)}
          colDefs={colDefs}
          options={options}
          setSelectedRows={setSelectedRows}
        />
      ))}
    </Table.Tbody>
  );
};

import { Dispatch, SetStateAction, useState } from 'react';
import { Checkbox, Table, TableTr } from '@mantine/core';
import { DataTableData } from '@/shared/features/data-table/components/DataTable.Data';
import {
  IDataTableCellBase,
  IDataTableColDef,
  IDataTableOptions,
} from '@/shared/features/data-table/DataTable.types';

export const DataTableRow = <T extends IDataTableCellBase>({
  row,
  rowNumber,
  isSelected,
  colDefs,
  options,
  setSelectedRows,
}: {
  row: T;
  rowNumber: number;
  isSelected: boolean;
  colDefs: IDataTableColDef[];
  options?: IDataTableOptions;
  setSelectedRows: Dispatch<SetStateAction<T[]>>;
}) => {
  const [isBackground, setIsBackground] = useState<number | string | null>(null);

  const handleRowDoubleClick = (row: T) => {
    if (options?.onRowDoubleClick) {
      options.onRowDoubleClick(row);
    }
  };

  const handleRowClick = (row: T) => {
    if (options?.onRowClick) {
      options.onRowClick(row);
    }
    if (options?.selectedRowBackgroundColor) {
      setIsBackground(row.id);
    }
  };

  const handleCheckboxChange = (id: number | string, row: T) => {
    setSelectedRows((prevSelectedRows) => {
      const isSelected = prevSelectedRows?.some((item) => item.id === id);
      if (isSelected) {
        // 선택 해제
        return prevSelectedRows?.filter((item) => item.id !== id) || [];
      }
      // 선택 추가
      return [...(prevSelectedRows || []), row];
    });
  };

  return (
    <TableTr
      onDoubleClick={() => {
        handleRowDoubleClick(row);
      }}
      onClick={() => handleRowClick(row)}
      style={{
        cursor: options?.cursor || 'pointer',
        backgroundColor:
          isBackground === row.id
            ? 'var(--mantine-background-color-orange)'
            : 'var(--color-background-white)',
      }}
      bg={isSelected ? 'var(--mantine-color-blue-light)' : undefined}
    >
      {options?.selectableRows && (
        <Table.Td>
          <Checkbox checked={isSelected} onChange={() => handleCheckboxChange(row.id, row)} />
        </Table.Td>
      )}
      {/*{options?.showRowNumber !== false && <Table.Td>{rowNumber}</Table.Td>}*/}

      {colDefs.map((colDef, subIndex) => (
        <DataTableData
          key={`${rowNumber}-${colDef.field}-body-${subIndex}`}
          row={row}
          colDef={colDef}
        />
      ))}
    </TableTr>
  );
};

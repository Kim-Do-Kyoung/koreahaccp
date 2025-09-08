import { TableTd, Text } from '@mantine/core';
import { IDataTableCellBase, IDataTableColDef } from '@/shared/features/data-table/DataTable.types';

export const DataTableData = <T extends IDataTableCellBase>({
  row,
  colDef,
}: {
  row: T;
  colDef: IDataTableColDef;
}) => {
  const renderCell = () => {
    if (colDef.renderer) {
      return colDef.renderer(row);
    }

    const cellValue = getNestedValue(row, colDef.field);

    if (colDef.formatter) {
      return <Text lineClamp={1}>{colDef.formatter(cellValue)}</Text>;
    }

    if (colDef.codes) {
      return <Text lineClamp={1}>{colDef.codes.find((c) => c.value === cellValue)?.label}</Text>;
    }

    if (colDef.whiteSpace) {
      return cellValue;
    }

    return <Text lineClamp={1}>{cellValue}</Text>;
  };

  const getNestedValue = <T extends object>(row: T, field: string): any =>
    field
      .split('.')
      .reduce<unknown>(
        (acc, part) =>
          acc && typeof acc === 'object' && part in acc
            ? (acc as Record<string, unknown>)[part]
            : undefined,
        row
      );

  return (
    <>
      <TableTd
        miw={50}
        style={{ whiteSpace: 'pre-line', textAlign: colDef.align ?? 'left', height: colDef.height }}
      >
        {renderCell()}
      </TableTd>
    </>
  );
};

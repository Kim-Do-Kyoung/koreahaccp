import { TableTd, Text, TypographyStylesProvider } from '@mantine/core';
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

    if (colDef.showHtml) {
      return (
        <TypographyStylesProvider>
          <div
            dangerouslySetInnerHTML={{
              __html: getNestedValue(row, colDef.field),
            }}
          />
        </TypographyStylesProvider>
      );
    }

    if (colDef.whiteSpace) {
      return getNestedValue(row, colDef.field);
    }

    if (colDef.formatter) {
      return <Text lineClamp={1}>{colDef.formatter(getNestedValue(row, colDef.field))}</Text>;
    }

    return <Text lineClamp={1}>{getNestedValue(row, colDef.field)}</Text>;
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
      <TableTd className={colDef.align} miw={100} style={{ whiteSpace: 'pre-line' }}>
        {renderCell()}
      </TableTd>
    </>
  );
};

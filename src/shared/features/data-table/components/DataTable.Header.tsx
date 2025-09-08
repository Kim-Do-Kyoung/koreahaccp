import { Table } from '@mantine/core';
import { IDataTableColDef, IDataTableOptions } from '@/shared/features/data-table/DataTable.types';

export const DataTableHeader = ({
  options,
  colDefs,
}: {
  options?: IDataTableOptions;
  colDefs: IDataTableColDef[];
}) => {
  return (
    <Table.Thead style={{ borderTop: '1px solid var(--color-border-gray-dark)' }}>
      <Table.Tr>
        {options?.selectableRows && <Table.Th />}
        {options?.showRowNumber !== false && <Table.Th w={75}>#</Table.Th>}
        {colDefs.map((colDef, index) => (
          <Table.Th
            key={`${colDef.field}-header-${index}`}
            w={colDef.width}
            h={colDef.height}
            c={colDef.color ?? 'black'}
            style={{
              textAlign: colDef.headerAlign ?? 'left',
            }}
          >
            {colDef.headerName ?? colDef.field}
          </Table.Th>
        ))}
      </Table.Tr>
    </Table.Thead>
  );
};

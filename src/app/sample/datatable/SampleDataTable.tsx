import { DataTable } from '@/components/Tables/DataTable';
import { IDataTableColDef } from '@/components/Tables/DataTable.types';

export const SampleDataTable = ({ users }: { users: any }) => {
  const colDefs: IDataTableColDef[] = [
    { field: 'id', headerName: 'ID' },
    { field: 'name' },
    { field: 'username', headerName: 'UserName' },
    { field: 'address.city' },
    { field: 'address.geo.lat' },
  ];

  return <DataTable data={users} colDefs={colDefs} />;
};

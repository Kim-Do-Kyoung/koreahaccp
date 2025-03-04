import { fetchSampleUser } from '@/lib/api/sample/sample.data';
import { DataTable } from '@/shared/features/data-table/DataTable';
import { IDataTableColDef } from '@/shared/features/data-table/DataTable.types';

export const SampleDataTable = async () => {
  const users = await fetchSampleUser();

  const colDefs: IDataTableColDef[] = [
    { field: 'id', headerName: 'ID' },
    { field: 'name' },
    { field: 'username', headerName: 'UserName' },
    { field: 'address.city' },
    { field: 'address.geo.lat' },
  ];

  return <DataTable data={users} colDefs={colDefs} />;
};

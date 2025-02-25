import { fetchSampleUser } from '@/api/sample/sample.data';
import { SampleDataTable } from '@/app/sample/datatable/SampleDataTable';

export default async function SampleDatatablePage() {
  const users = await fetchSampleUser();
  return (
    <>
      <h1>This is Datatable sample page</h1>
      <SampleDataTable users={users} />
    </>
  );
}

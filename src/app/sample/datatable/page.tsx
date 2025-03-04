import { Suspense } from '@suspensive/react';
import { SampleDataTable } from '@/app/sample/datatable/sections/SampleDataTable';

export default function SampleDatatablePage() {
  return (
    <>
      <h1>This is Datatable sample page</h1>
      <Suspense>
        <SampleDataTable />
      </Suspense>
    </>
  );
}

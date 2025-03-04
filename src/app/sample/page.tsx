import Link from 'next/link';

export default function SamplePage() {
  return (
    <>
      <h1>Hi! This is Sample Page</h1>
      <li>
        <Link href="/sample/datatable">DataTable</Link>
      </li>
    </>
  );
}

import { ReactNode } from 'react';
import { AdminLayout } from '@/shared/features/layouts/components/AdminLayout';

export default function AdminMainLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <AdminLayout>{children}</AdminLayout>;
}

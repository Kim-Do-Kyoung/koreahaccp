'use client';

import { ReactNode, useState } from 'react';
import { ClientOnly } from '@suspensive/react';
import { AppShell } from '@mantine/core';
import { AdminHeader } from '@/app/admin/componetns/AdminHeader';
import { AdminSideNav } from '@/app/admin/componetns/AdminSideNav';

export const AdminLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <AppShell
      className="admin-main-layout"
      layout="alt"
      padding="24"
      bg="#F7F7F8"
      header={{ height: 60 }}
      navbar={{
        width: collapsed ? 50 : 256,
        breakpoint: 'sm',
        collapsed: { desktop: false, mobile: true },
      }}
    >
      <AppShell.Header>
        <AdminHeader />
      </AppShell.Header>
      <AppShell.Navbar>
        <AdminSideNav collapsed={collapsed} setCollapsedAction={setCollapsed} />
      </AppShell.Navbar>
      <AppShell.Main>
        <ClientOnly>{children}</ClientOnly>
      </AppShell.Main>
    </AppShell>
  );
};

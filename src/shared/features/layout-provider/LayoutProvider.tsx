import { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { MantineProvider } from '@mantine/core';
import MainLayout from '@/shared/features/layouts/MainLayout';
import { cssResolver, theme } from '../../../../theme';

export default function LayoutProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith('/admin')) {
      document.documentElement.dataset.mode = 'admin';
    } else {
      document.documentElement.dataset.mode = 'site';
    }
  }, [pathname]);

  // if (pathname.startsWith('/admin')) {
  //   return (
  //     <MantineProvider theme={adminTheme} defaultColorScheme="light">
  //       <AdminMainLayout>{children}</AdminMainLayout>
  //     </MantineProvider>
  //   );
  // }

  return (
    <MantineProvider theme={theme} defaultColorScheme="light" cssVariablesResolver={cssResolver}>
      <MainLayout>{children}</MainLayout>
    </MantineProvider>
  );
}

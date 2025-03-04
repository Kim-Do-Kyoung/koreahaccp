'use client';

import { ReactNode } from 'react';
import { DefaultProps, DefaultPropsProvider } from '@suspensive/react';
import { MantineProvider } from '@mantine/core';
import { AppLoader } from '@/shared/ui/AppLoader';
import { cssResolver, theme } from '../../theme';

export default function AppProviders({ children }: { children: ReactNode }) {
  const defaultProps = new DefaultProps({
    Delay: {
      ms: 200,
    },
    Suspense: {
      fallback: <AppLoader />,
      clientOnly: false,
    },
  });

  return (
    <MantineProvider theme={theme} defaultColorScheme="light" cssVariablesResolver={cssResolver}>
      <DefaultPropsProvider defaultProps={defaultProps}>{children}</DefaultPropsProvider>
    </MantineProvider>
  );
}

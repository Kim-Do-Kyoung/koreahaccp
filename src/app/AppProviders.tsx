'use client';

import { ReactNode, useState } from 'react';
import { DefaultProps, DefaultPropsProvider } from '@suspensive/react';
import { Loader, MantineProvider } from '@mantine/core';
import { cssResolver, theme } from '../../theme';

export default function AppProviders({ children }: { children: ReactNode }) {
  const defaultProps = new DefaultProps({
    Delay: {
      ms: 200,
    },
    Suspense: {
      fallback: <Loader />,
      clientOnly: false,
    },
  });

  return (
    <MantineProvider theme={theme} defaultColorScheme="light" cssVariablesResolver={cssResolver}>
      <DefaultPropsProvider defaultProps={defaultProps}>{children}</DefaultPropsProvider>
    </MantineProvider>
  );
}

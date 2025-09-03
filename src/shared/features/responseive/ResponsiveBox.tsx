import { ReactNode } from 'react';
import { Box } from '@mantine/core';

/* 반응형 PC 기준 표시 */
export const ResponsiveBox = ({ children }: { children: ReactNode }) => {
  return <Box visibleFrom="md">{children}</Box>;
};

/* 반응형 모바일 기준 표시 */
export const ResponsiveMobileBox = ({ children }: { children: ReactNode }) => {
  return <Box hiddenFrom="md">{children}</Box>;
};

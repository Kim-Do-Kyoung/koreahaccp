import '@mantine/core/styles.css';

import type { Metadata } from 'next';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import AppProviders from '@/app/AppProviders';
import { theme } from '../../theme';

export const metadata: Metadata = {
  title: 'CODEIS Frontend Starter',
  description: 'CODEIS Frontend Starter Sample Project!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" {...mantineHtmlProps}>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}

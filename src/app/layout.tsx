import './globals.css';
import '@mantine/core/styles.css';

import type { Metadata } from 'next';
import { mantineHtmlProps } from '@mantine/core';
import AppProviders from '@/app/AppProviders';

export const metadata: Metadata = {
  title: '티에이치컴퍼니',
  description: 'thCompany',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" {...mantineHtmlProps}>
      <head>
        <title>티에이치컴퍼니</title>
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

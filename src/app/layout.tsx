import '@mantine/core/styles.css';

import React from 'react';
import Providers from '@/components/Providers/Providers';

export default async function RootLayout({ children }: { children: any }) {
  return (
    <html>
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

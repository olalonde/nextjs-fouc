'use client';

import { MantineProvider } from '@mantine/core';
import { ReactNode } from 'react';

// import { i18n, Messages } from '@lingui/core';
import { theme } from '@/theme';

export default function Providers({ children }: { children: ReactNode }) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}

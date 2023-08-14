import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import 'styles/global.scss';

export const metadata: Metadata = {
  title: 'SB-demo - Starbucks Demo Page',
  description: 'Starbucks Demo',
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

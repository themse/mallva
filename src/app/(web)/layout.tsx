import type { Metadata } from 'next';

import { Header, Footer } from 'components';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'Mallva - Starbucks Demo Page',
};

const WebLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen min-w-[320px] flex justify-between flex-col relative">
      <Header navbarVariant="complicated" />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
};

export default WebLayout;

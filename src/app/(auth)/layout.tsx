import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import { Header, Footer } from 'components';

export const metadata: Metadata = {
  title: 'SB-demo - Join now',
};

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen min-w-[320px] flex justify-between flex-col relative">
      <Header />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
};

export default AuthLayout;

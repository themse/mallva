import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import { Header } from 'components/admin';

export const metadata: Metadata = {
  title: 'SB-demo - Starbucks Admin Page',
};

const AdminLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen min-w-[320px] flex justify-between flex-col relative">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default AdminLayout;

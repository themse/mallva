import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import { Header, Footer, SidebarNav } from 'components';
import { SidebarProvider } from 'context';

export const metadata: Metadata = {
  title: 'SB-demo - Starbucks Home Page',
};

const WebLayout = ({ children }: PropsWithChildren) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen min-w-[320px] flex justify-between flex-col relative">
        <Header navbarVariant="complicated" />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>

      <SidebarNav />
    </SidebarProvider>
  );
};

export default WebLayout;

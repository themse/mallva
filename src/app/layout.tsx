import type { Metadata } from 'next';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import 'styles/global.scss';

export const metadata: Metadata = {
  title: 'Mallva - Starbucks Demo Page',
  description: 'Starbucks Demo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen min-w-[320px] flex justify-between flex-col relative">
          <Header />

          <main className="flex-1">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}

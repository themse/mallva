import { PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
  title: string;
};

export const PageTemplate = ({ title, children }: Props) => {
  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-green-900">
            {title}
          </h1>
        </div>
      </header>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>
    </>
  );
};

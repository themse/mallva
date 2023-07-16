import { PropsWithChildren } from 'react';

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className="3xl:container px-4 md:px-10">
      <div className="3xl:-px-20">{children}</div>
    </div>
  );
};

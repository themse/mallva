import { PropsWithChildren } from 'react';

import { Icon } from 'components';

type Props = PropsWithChildren & {
  errorMessage: string;
  hideError?: boolean;
};

export const FormControl = ({
  children,
  errorMessage,
  hideError = false,
}: Props) => {
  return (
    <div className="flex flex-col gap-1">
      {children}
      {!hideError && (
        <span className="text-sm text-red-600 flex gap-1">
          <Icon.Close />
          {errorMessage}
        </span>
      )}
    </div>
  );
};

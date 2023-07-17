import { PropsWithChildren } from 'react';

import { mergeClsx } from 'utils/helpers';
import { Overlay } from 'components';

type Props = PropsWithChildren & {
  className?: string;
  isOpen?: boolean;

  onOverlay?: () => void;
};

export const Drawer = ({
  className,
  onOverlay,
  children,
  isOpen = false,
}: Props) => {
  return (
    <>
      <div
        className={mergeClsx(
          'w-3/4 fixed top-0 -right-3/4 z-40 h-screen p-4 bg-white transition-position duration-500 ease-in-out',
          isOpen && 'right-0',
          className
        )}
        tabIndex={-1}
      >
        {children}
      </div>
      {isOpen && (
        <Overlay
          className={mergeClsx(
            'z-30 transition-opacity duration-300 ease-in-out opacity-0',
            isOpen && 'opacity-1'
          )}
          onClick={onOverlay}
        />
      )}
    </>
  );
};

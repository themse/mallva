import { SVGProps } from 'react';

import { mergeClsx } from 'utils/helpers';

type Props = SVGProps<SVGSVGElement>;

export const Close = ({ className }: Props) => {
  return (
    <svg
      className={mergeClsx(
        'w-[20px] h-[20px] overflow-visible fill-current',
        className
      )}
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path d="M13.06 12l5.72-5.72c.292-.292.292-.767 0-1.06-.294-.293-.768-.293-1.06 0L12 10.94 6.28 5.22c-.293-.293-.767-.293-1.06 0-.293.293-.293.768 0 1.06L10.94 12l-5.72 5.72c-.293.292-.293.767 0 1.06.146.146.338.22.53.22s.384-.074.53-.22L12 13.06l5.72 5.72c.145.146.337.22.53.22.19 0 .383-.074.53-.22.292-.293.292-.768 0-1.06L13.06 12z"></path>
    </svg>
  );
};

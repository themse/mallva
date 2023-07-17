import NextLink from 'next/link';

import { mergeClsx } from 'utils/helpers';

type Props = {
  className?: string;
};

export const Navbar = ({ className }: Props) => {
  return (
    <div
      className={mergeClsx(
        'flex gap-4 text-base md:text-sm font-medium px-2 pb-3 pt-2 sm:px-3 md:p-0',
        className
      )}
    >
      <NextLink
        href="/admin/dashboard"
        className="block bg-gray-900 text-white rounded-md px-3 py-2 "
      >
        Dashboard
      </NextLink>
      <NextLink
        href="/"
        className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2"
      >
        Visit Website
      </NextLink>
    </div>
  );
};

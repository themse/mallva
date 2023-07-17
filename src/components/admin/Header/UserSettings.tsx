import { mergeClsx } from 'utils/helpers';

type Props = {
  className?: string;
};

export const UserSettings = ({ className }: Props) => {
  return (
    <div
      className={mergeClsx(
        'mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
        className
      )}
      role="menu"
      tabIndex={-1}
    >
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700"
        role="menuitem"
        tabIndex={-1}
      >
        Your Profile
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700"
        role="menuitem"
        tabIndex={-1}
      >
        Sign out
      </a>
    </div>
  );
};

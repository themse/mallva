'use client';

import clsx from 'clsx';
import { mergeClsx } from 'utils/helpers';

type Props = {
  isOpen: boolean;
  toggleMenu: () => void;
  className?: string;
};

const burgerLineStyle =
  'block absolute w-[20px] h-[2px] bg-current transform transition duration-500 ease-in-out';

export const BurgerButton = ({ className, isOpen, toggleMenu }: Props) => {
  return (
    <button
      type="button"
      className={mergeClsx(
        'text-gray-500 w-[36px] h-[36px] relative focus:outline-none rounded-full hover:bg-gray-100',
        className
      )}
      onClick={toggleMenu}
    >
      <span className="sr-only">Open main menu</span>
      <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span
          aria-hidden="true"
          className={clsx([
            burgerLineStyle,
            isOpen && 'rotate-45',
            !isOpen && '-translate-y-1.5',
          ])}
        />
        <span
          aria-hidden="true"
          className={clsx([burgerLineStyle, isOpen && 'opacity-0'])}
        />
        <span
          aria-hidden="true"
          className={clsx([
            burgerLineStyle,
            isOpen && '-rotate-45',
            !isOpen && ' translate-y-1.5',
          ])}
        />
      </div>
    </button>
  );
};

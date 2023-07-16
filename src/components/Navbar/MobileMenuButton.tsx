'use client';

import { ComponentPropsWithoutRef } from 'react';

import { useSidebar } from 'context';
import { BurgerButton } from 'components';
import { mergeClsx } from 'utils/helpers';

type Props = ComponentPropsWithoutRef<'button'>;

export const MobileMenuButton = ({ className, ...props }: Props) => {
  const { isOpen, toggleSideBar } = useSidebar();

  return (
    <BurgerButton
      {...props}
      className={mergeClsx('md:hidden', className)}
      isOpen={isOpen}
      toggleMenu={toggleSideBar}
    />
  );
};

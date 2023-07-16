'use client';

import { Drawer } from 'components';
import { useSidebar } from 'context';
import { useLockedBody } from 'hooks';
import { mergeClsx } from 'utils/helpers';

export const SidebarNav = () => {
  const { isOpen, hideSidebar } = useSidebar();

  useLockedBody(isOpen);

  return (
    <Drawer
      className={mergeClsx('md:hidden pt-[104px]')}
      isOpen={isOpen}
      onOverlay={() => hideSidebar()}
    >
      <p>Lorem</p>
    </Drawer>
  );
};

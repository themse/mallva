'use client';

import { Drawer, MainMenu, Icon, Separator } from 'components';
import { CustomLink as LocationButton } from 'components/CustomLink';
import { CustomLink as AuthButton } from 'components/CustomLink';
import { useSidebar } from 'context';
import { useLockedBody } from 'hooks';
import { mergeClsx } from 'utils/helpers';

const SidebarNav = () => {
  const { isOpen, hideSidebar } = useSidebar();

  useLockedBody(isOpen);

  return (
    <Drawer
      className={mergeClsx('md:hidden pt-[104px]')}
      isOpen={isOpen}
      onOverlay={() => hideSidebar()}
    >
      <div className="flex flex-col gap-4 m-4">
        <MainMenu
          className="flex-col items-start gap-8"
          linkVariants="sidebarLink"
          linkSize="xlarge"
        />

        <Separator />

        <div className="flex gap-4 whitespace-nowrap">
          <AuthButton variant="btnLight" size="small" href="/sign-in">
            Sign in
          </AuthButton>
          <AuthButton variant="btnDark" size="small">
            Join now
          </AuthButton>
        </div>

        <LocationButton
          href="https://www.starbucks.com/store-locator?map=39.635307,-101.337891,5z"
          variant="default"
          size="small"
          isExternal
          iconLeft={<Icon.Location />}
          className="whitespace-nowrap"
        >
          <span>Find a store</span>
        </LocationButton>
      </div>
    </Drawer>
  );
};

export default SidebarNav;

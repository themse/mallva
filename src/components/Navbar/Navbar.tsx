import Link from 'next/link';

import { Icon, MainMenu } from 'components';
import { CustomLink as LocationButton } from 'components/CustomLink';
import { CustomLink as AuthButton } from 'components/CustomLink';
import MobileMenuButton from './MobileMenuButton';

type VariantRules = {
  isBrand: boolean;
  isMainMenu: boolean;
  isLocation: boolean;
  isAuthButtonGroup: boolean;
};

const variants: Record<'default' | 'complicated', VariantRules> = {
  default: {
    isBrand: true,
    isMainMenu: false,
    isLocation: false,
    isAuthButtonGroup: false,
  },
  complicated: {
    isBrand: true,
    isMainMenu: true,
    isLocation: true,
    isAuthButtonGroup: true,
  },
};

type Props = {
  variant?: keyof typeof variants;
};

export const Navbar = ({ variant = 'default' }: Props) => {
  const { isBrand, isMainMenu, isLocation, isAuthButtonGroup } =
    variants[variant];

  const isNavBody = isMainMenu || isLocation || isAuthButtonGroup;

  return (
    <nav className="flex item-center">
      {isBrand && (
        <Link href="/">
          <Icon.Brand className="w-[38px] h-[38px] md:w-[51px] md:h-[51px] mr-8 lg:mr-10" />
        </Link>
      )}

      {isMainMenu && <MainMenu className="hidden md:flex mr-2" />}

      <div className="ml-auto hidden md:flex items-center gap-4 lg:gap-10">
        {isLocation && (
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
        )}

        {isAuthButtonGroup && (
          <div className="flex gap-4 whitespace-nowrap">
            <AuthButton variant="btnLight" size="small" href="/sign-in">
              Sign in
            </AuthButton>
            <AuthButton variant="btnDark" size="small">
              Join now
            </AuthButton>
          </div>
        )}
      </div>

      {isNavBody && <MobileMenuButton className="ml-auto" />}
    </nav>
  );
};

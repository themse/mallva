'use client';

import NextLink from 'next/link';
import { useState } from 'react';

import { Icon } from 'components';
import { Avatar } from 'components/admin';
import { Navbar } from './Navbar';
import { UserSettings } from './UserSettings';
import BurgerButton from '../BurgerButton';
import { UserBio } from './UserBio';

const Header = () => {
  const [isUserMenu, setIsUserMenu] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenu((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenu((prev) => !prev);
  };

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <NextLink href="/admin">
                <Icon.Brand className="w-[38px] h-[38px] md:w-[51px] md:h-[51px] mr-8 lg:mr-10" />
              </NextLink>
            </div>
            <div className="hidden md:block ml-10">
              <Navbar />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    onClick={toggleUserMenu}
                  >
                    <span className="sr-only">Open user menu</span>
                    <Avatar />
                  </button>
                </div>
                {isUserMenu && (
                  <UserSettings className="absolute right-0 z-10 origin-top-right" />
                )}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <BurgerButton onClick={toggleMobileMenu} />
          </div>
        </div>
      </div>

      {isMobileMenu && (
        <div className="md:hidden">
          <Navbar className="flex-col gap-2" />

          <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <Avatar />
              </div>
              <div className="ml-3">
                <UserBio userName="John Snow" email="johnsnow@example.com" />
              </div>
            </div>
            <div className="mt-3 space-y-1 px-2">
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Your Profile
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;

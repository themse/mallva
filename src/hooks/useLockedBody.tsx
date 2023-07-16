import { useEffect } from 'react';

export const useLockedBody = (isLocked: boolean) => {
  useEffect(() => {
    const $body = document.body;

    if (isLocked) {
      $body.classList.add('overflow-hidden');
    } else {
      $body.classList.remove('overflow-hidden');
    }

    return () => {
      $body.classList.remove('overflow-hidden');
    };
  }, [isLocked]);
};

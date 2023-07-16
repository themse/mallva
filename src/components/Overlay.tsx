import { mergeClsx } from 'utils/helpers';

type Props = {
  className?: string;
  onClick?: () => void;
};

export const Overlay = ({ className, onClick }: Props) => {
  return (
    <div
      className={mergeClsx(
        'bg-black/[.38] bg-opacity-50 fixed inset-0 z-50 overflow-hidden',
        className
      )}
      onClick={() => onClick?.()}
    />
  );
};

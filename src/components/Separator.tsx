import { mergeClsx } from 'utils/helpers';

type Props = {
  className?: string;
};

export const Separator = ({ className }: Props) => {
  return (
    <hr
      className={mergeClsx('bg-black bg-opacity-10 my-4 h-[2px]', className)}
    />
  );
};

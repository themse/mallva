import { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'button'> & {};

const BurgerLine = () => {
  return <span className="block w-[20px] h-[2px] bg-black opacity-50" />;
};

export const BurgerButton = ({ className, ...props }: Props) => {
  return (
    <button type="button" className={className} {...props}>
      <div className="w-[36px] h-[36px] flex flex-col justify-center items-center gap-1 hover:bg-gray-100 rounded-full">
        {Array.from({ length: 3 }).map((_, index) => (
          <BurgerLine key={index} />
        ))}
      </div>
    </button>
  );
};

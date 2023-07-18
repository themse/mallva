import { ComponentPropsWithoutRef } from 'react';

type Props = Omit<ComponentPropsWithoutRef<'input'>, 'type'> & {
  label: string;
};

export const Checkbox = ({ name, label, ...props }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <input
        type="checkbox"
        name={name}
        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded hover:cursor-pointer"
        id={name}
        {...props}
      />
      <label className="text-lg hover:cursor-pointer" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

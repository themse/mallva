import { ComponentPropsWithoutRef, ChangeEventHandler } from 'react';

import { Asterisk } from './Asterisk';

type Props = Omit<ComponentPropsWithoutRef<'input'>, 'type'> &
  Partial<{
    label: string;
    required: boolean;
    onChange: (hex: string) => void;
  }>;

export const ColorPicker = ({ name, label, required, ...props }: Props) => {
  return (
    <div className="flex justify-center gap-2">
      {label && (
        <label className="text-lg hover:cursor-pointer" htmlFor={name}>
          {required && <Asterisk />} {label}
        </label>
      )}
      <input name={name} type="color" {...props} />
    </div>
  );
};

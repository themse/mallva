import { ComponentPropsWithoutRef } from 'react';

import { mergeClsx } from 'utils/helpers';
import { Asterisk } from './Asterisk';

type Props = ComponentPropsWithoutRef<'input'> &
  Partial<{
    defaultValue: string;
    placeholder: string;
    className: string;
    label: string;
    onChange: (value: string) => void;
  }>;

export const TextInput = ({
  name,
  defaultValue,
  value,
  placeholder,
  className,
  label,
  required,
  onChange: onChangeProp,
  type = 'text',
  ...props
}: Props) => {
  const isValueExist = Boolean(defaultValue || value);

  const onChange = (newValue: string): void => {
    onChangeProp?.(newValue);
  };

  return (
    <div className="relative">
      <input
        name={name}
        id={name}
        {...props}
        className={mergeClsx(
          'peer block min-h-[auto] w-full border rounded-lg bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-opacity duration-200 ease-linear focus:placeholder:opacity-100 motion-reduce:transition-none text-neutral-600 placeholder:text-neutral-300',
          className
        )}
        type={type}
        defaultValue={defaultValue}
        onChange={(event): void => onChange(event.target.value)}
        placeholder={placeholder}
      />
      {label && (
        <label
          htmlFor={name}
          className={mergeClsx(
            'text-xl pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate leading-[2.15] text-black transition-transform duration-200 ease-out  motion-reduce:transition-none',
            isValueExist && '-translate-y-[1rem] scale-[0.8]',
            !isValueExist &&
              'peer-focus:-translate-y-[1rem] peer-focus:scale-[0.8]'
          )}
        >
          {required && <Asterisk />} {label}
        </label>
      )}
    </div>
  );
};

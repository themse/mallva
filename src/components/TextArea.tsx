import { ComponentPropsWithoutRef } from 'react';

import { mergeClsx } from 'utils/helpers';
import { Asterisk } from './Asterisk';

type Props = ComponentPropsWithoutRef<'textarea'> &
  Partial<{
    defaultValue: string;
    placeholder: string;
    className: string;
    label: string;

    onChange: (value: string) => void;
  }>;

export const TextArea = ({
  name,
  label,
  defaultValue,
  value,
  placeholder,
  className,
  required,
  onChange,
  ...props
}: Props) => {
  const isLabelUp = Boolean(defaultValue || value || placeholder);

  return (
    <div className="relative">
      <textarea
        {...props}
        name={name}
        id={name}
        className={mergeClsx(
          'peer block min-h-[100px] w-full border rounded-lg bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-opacity duration-200 ease-linear focus:placeholder:opacity-100 motion-reduce:transition-none',
          className
        )}
        defaultValue={defaultValue}
        onChange={(event): void => onChange?.(event.target.value)}
        placeholder={placeholder}
      />
      {label && (
        <label
          htmlFor={name}
          className={mergeClsx(
            'text-xl pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate leading-[2.15] text-black transition-transform duration-200 ease-out  motion-reduce:transition-none',
            isLabelUp && '-translate-y-[1rem] scale-[0.8]',
            !isLabelUp &&
              'peer-focus:-translate-y-[1rem] peer-focus:scale-[0.8]'
          )}
        >
          {required && <Asterisk />} {label}
        </label>
      )}
    </div>
  );
};

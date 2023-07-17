'use client';

import { Field } from 'react-final-form';

import { TextInput, Icon } from 'components';

type Props = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  className?: string;
  hideError?: boolean;
  required?: boolean;
};

const FormInput = ({
  name,
  type,
  label,
  defaultValue,
  className,
  placeholder,
  required = false,
  hideError = false,
}: Props) => {
  return (
    <Field
      name={name}
      render={({ input, meta }): JSX.Element => (
        <div className="flex flex-col gap-1">
          <TextInput
            type={type}
            label={label}
            defaultValue={defaultValue}
            className={className}
            placeholder={placeholder}
            required={required}
            {...input}
          />
          {!hideError && meta.touched && meta.error && (
            <span className="text-sm text-red-600 flex gap-1">
              <Icon.Close />
              {meta.error}
            </span>
          )}
        </div>
      )}
    />
  );
};

export default FormInput;

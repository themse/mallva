'use client';

import { Field } from 'react-final-form';

import { TextInput } from 'components/TextInput';

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
        <div>
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
            <span>{meta.error}</span>
          )}
        </div>
      )}
    />
  );
};

export default FormInput;

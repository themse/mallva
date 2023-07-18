'use client';

import { Field } from 'react-final-form';

import { ColorPicker, FormControl } from 'components';

type Props = {
  name: string;
  label?: string;
  defaultValue?: string;
  className?: string;
  hideError?: boolean;
  required?: boolean;
};

const FormColorPicker = ({
  name,
  label,
  defaultValue,
  className,
  required = false,
  hideError = false,
}: Props) => {
  return (
    <Field
      name={name}
      render={({ input, meta }) => {
        const hasError = !hideError && meta.touched && meta.error;

        return (
          <FormControl errorMessage={meta.error} hideError={!hasError}>
            <ColorPicker
              {...input}
              label={label}
              defaultValue={defaultValue}
              className={className}
              required={required}
            />
          </FormControl>
        );
      }}
    />
  );
};

export default FormColorPicker;

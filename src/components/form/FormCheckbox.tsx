'use client';

import { Field } from 'react-final-form';

import { Checkbox, FormControl } from 'components';

type Props = {
  name: string;
  label: string;
  className?: string;
  hideError?: boolean;
  required?: boolean;
};

const FormCheckbox = ({
  name,
  label,
  className,
  required = false,
  hideError = false,
}: Props) => {
  return (
    <Field
      type="checkbox"
      name={name}
      render={({ input, meta }) => {
        const hasError = !hideError && meta.touched && meta.error;

        return (
          <FormControl errorMessage={meta.error} hideError={!hasError}>
            <Checkbox
              className={className}
              label={label}
              required={required}
              {...input}
            />
          </FormControl>
        );
      }}
    />
  );
};

export default FormCheckbox;

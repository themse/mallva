'use client';

import { Field } from 'react-final-form';

import { TextArea, FormControl } from 'components';

type Props = {
  name: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  className?: string;
  hideError?: boolean;
  required?: boolean;
};

const FormTextArea = ({
  name,
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
      render={({ input, meta }) => {
        const hasError = !hideError && meta.touched && meta.error;

        return (
          <FormControl errorMessage={meta.error} hideError={!hasError}>
            <TextArea
              label={label}
              defaultValue={defaultValue}
              className={className}
              placeholder={placeholder}
              required={required}
              {...input}
            />
          </FormControl>
        );
      }}
    />
  );
};

export default FormTextArea;

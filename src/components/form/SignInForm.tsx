'use client';

import { Form, FormProps } from 'react-final-form';
import * as Yup from 'yup';

import { Asterisk, CustomLink } from 'components';
import { FormInput } from 'components/form';

type FormValues = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const onSubmit = async (
    { email, password }: FormValues,
    formApi: FormProps<FormValues>['form']
  ) => {
    // TODO sign in logic
    console.log({ email, password });
  };

  const getValidationRules = async ({ email, password }: FormValues) => {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters long')
        .required('Password is required'),
    });

    try {
      await schema.validate({ email, password }, { abortEarly: false });

      return {};
    } catch (error) {
      // @ts-ignore
      return error.inner.reduce((acc, err) => {
        acc[err.path] = err.message;

        return acc;
      });
    }
  };

  return (
    <div className="sign-in rounded-xl p-8 w-1/2">
      <Form<FormValues>
        onSubmit={onSubmit}
        validate={getValidationRules}
        render={({ handleSubmit, submitting, hasValidationErrors }) => (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-8">
              <span>
                <Asterisk /> indicates required field
              </span>

              <div className="flex flex-col gap-6">
                <FormInput
                  name="email"
                  type="text"
                  label="Email address"
                  required
                />
                <FormInput
                  name="password"
                  type="password"
                  label="Password"
                  required
                />
              </div>

              <CustomLink
                className="text-green-900"
                isExternal
                href="https://www.starbucks.com/account/forgot-password"
                target="_blank"
              >
                Forgot your password?
              </CustomLink>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="block bg-green-900 rounded-full text-white text-lg px-6 py-5 hover:bg-opacity-90"
                  disabled={submitting || hasValidationErrors}
                >
                  Sign in
                </button>
              </div>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default SignInForm;

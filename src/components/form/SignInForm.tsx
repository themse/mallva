'use client';

import { Form, FormProps } from 'react-final-form';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';

import { Asterisk, CustomLink } from 'components';
import { FormInput } from 'components/form';
import { validateForm } from 'utils/helpers';

type FormValues = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const router = useRouter();

  const onSubmit = async (
    { email, password }: FormValues,
    _formApi: FormProps<FormValues>['form']
  ) => {
    // TODO sign in logic
    console.log({ email, password });

    router.push('/admin');
  };

  const getValidationRules = async (values: FormValues) => {
    const schema = Yup.object().shape({
      email: Yup.string()
        .required('Email is required')
        .email('Invalid email format'),
      password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long'),
    });

    return validateForm(schema, values);
  };

  return (
    <div className="sign-in rounded-xl p-8 w-[300px] sm:w-[500px]">
      <Form<FormValues>
        onSubmit={onSubmit}
        validate={getValidationRules}
        render={({ handleSubmit }) => (
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

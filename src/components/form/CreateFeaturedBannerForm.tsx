'use client';

import * as Yup from 'yup';
import { Form, FormProps } from 'react-final-form';

import { FeaturedBannerOrder } from 'services/entities';
import { validateForm } from 'utils/helpers';
import { Asterisk, FeaturedBanner } from 'components';
import {
  FormColorPicker,
  FormCheckbox,
  FormTextArea,
  FormInput,
} from 'components/form';

type FormValues = {
  title: string;
  description: string;
  ctaBtnLabel: string;
  bgColor: string;
  darkMode: boolean;
  position: number;
};

const CreateFeaturedBannerForm = () => {
  const onSubmit = async (
    values: FormValues,
    _formApi: FormProps<FormValues>['form']
  ) => {
    // TODO create banner logic
    console.log(values);
  };

  const getValidationRules = async (values: FormValues) => {
    const schema = Yup.object().shape({
      title: Yup.string().required('Title is required'),
      description: Yup.string().required('Description is required'),
      ctaBtnLabel: Yup.string().required('CTA button label is required'),
      bgColor: Yup.string()
        .matches(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, 'Invalid hex color code')
        .required('Background color is required'),
      darkMode: Yup.boolean(),
      position: Yup.number()
        .integer('Position must be an integer')
        .required('Position is required'),
    });

    return validateForm(schema, values);
  };

  return (
    <Form<FormValues>
      onSubmit={onSubmit}
      validate={getValidationRules}
      render={({ handleSubmit, values }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-8">
              <span>
                <Asterisk /> indicates required field
              </span>
              <div className="flex flex-col gap-6">
                <FormInput
                  name="title"
                  type="text"
                  label="Title"
                  placeholder="Enjoy summer savings with DashPass"
                  required
                />
                <FormTextArea
                  name="description"
                  label="Description"
                  placeholder="Now is a great time to save with DashPass. Enjoy $10 off Starbucks orders of $20+ on DoorDash."
                  required
                />
                <FormInput
                  name="ctaBtnLabel"
                  type="text"
                  label="Label of CTA button"
                  placeholder="Order now"
                  required
                />
                <div className="flex items-center justify-between gap-4">
                  <FormCheckbox
                    name="darkMode"
                    label="Font Color (light / dark)"
                  />

                  <FormColorPicker
                    name="bgColor"
                    label="Background color of a banner"
                  />

                  <FormInput
                    name="position"
                    type="number"
                    label="Position of banner in a list"
                    placeholder="7"
                    required
                  />
                </div>
              </div>

              <div>
                <p className="text-lg font-semibold mb-2">Preview</p>

                <FeaturedBanner
                  banner={{
                    title: values.title ?? 'Enjoy summer savings with DashPass',
                    description:
                      values.description ??
                      `
                        Now is a great time to save with DashPass. Enjoy $10 off Starbucks
                        orders of $20+ on DoorDash. *
                      `,
                    image: '/banners/1.jpg',
                    bgColor: values.bgColor ?? '#052E16',
                    order: FeaturedBannerOrder.BANNER_FIRST,
                    position: values.position ?? 0,

                    ctaBtnLabel: values.ctaBtnLabel ?? 'Order now',
                    darkMode: values.darkMode ?? false,
                  }}
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="block bg-green-900 rounded-full text-white text-lg px-6 py-5 hover:bg-opacity-90"
                >
                  Create a new banner
                </button>
              </div>
            </div>
          </form>
        );
      }}
    />
  );
};

export default CreateFeaturedBannerForm;

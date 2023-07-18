'use client';

import * as Yup from 'yup';
import { Form, FormProps } from 'react-final-form';

import { FeaturedBannerOrder } from 'services/entities';
import { validateForm } from 'utils/helpers';
import { Asterisk, FeaturedBanner } from 'components';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import FormCheckbox from './FormCheckbox';

type FormValues = {
  title: string;
  description: string;
  ctaBtnLabel: string;

  darkMode: boolean;
  position: number;
};

const CreateFeaturedBannerForm = () => {
  const onSubmit = async (
    { title, description, ctaBtnLabel, darkMode, position }: FormValues,
    _formApi: FormProps<FormValues>['form']
  ) => {
    // TODO create banner logic
    console.log({ title, description, ctaBtnLabel, darkMode, position });
  };

  const getValidationRules = async (values: FormValues) => {
    const schema = Yup.object().shape({
      title: Yup.string().required('Title is required'),
      description: Yup.string().required('Description is required'),
      ctaBtnLabel: Yup.string().required('CTA button label is required'),
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
      render={({ handleSubmit }) => (
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
              <div className="flex items-center gap-4">
                <FormCheckbox
                  name="darkMode"
                  label="Font Color (light / dark)"
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
                  id: '1',
                  title: 'Enjoy summer savings with DashPass',
                  description: `
                Now is a great time to save with DashPass. Enjoy $10 off Starbucks
                orders of $20+ on DoorDash. Offer valid 7/13-7/19 from 12 p.m. – 3
                p.m. only. Max discount of $10.*
              `,
                  image: {
                    id: '1',
                    path: '/banners/1.jpg',
                    title: 'Order now',
                  },
                  bgColor: '#052E16',
                  order: FeaturedBannerOrder.BANNER_FIRST,
                  position: 0,

                  ctaBtnLabel: 'Order now',
                  darkMode: false,
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
      )}
    />
  );
};

export default CreateFeaturedBannerForm;

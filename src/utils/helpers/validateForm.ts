import { ObjectSchema, AnyObject, Maybe } from 'yup'

export const validateForm = async <T extends Maybe<AnyObject>>(schema: ObjectSchema<T>, values: T) => {
    try {
        await schema.validate(values, { abortEarly: false });

        return {};
    } catch (error) {
        // @ts-ignore
        return error.inner.reduce((acc, err) => {
            acc[err.path] = err.message;

            return acc;
        }, {});
    }
};

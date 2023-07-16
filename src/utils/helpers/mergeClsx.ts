import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const mergeClsx = (...inputs: ClassValue[]): string => {
    const classNames = clsx(...inputs);

    return twMerge(classNames);
};

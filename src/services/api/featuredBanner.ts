import { FeaturedBannerOrder } from '@prisma/client'

import prisma from 'services/prisma';


export const getAllFeaturedBanners = async () => {
    const featuredBanners = await prisma.featuredBanner.findMany();

    return featuredBanners;
};

export const createFeaturedBanner = async (dto: {
    title: string;
    description: string;
    image: string;
    order: FeaturedBannerOrder;
    bgColor: string;
    ctaBtnLabel: string;

    darkMode?: boolean;
    position?: number;
}) => {
    const createdBanner = await prisma.featuredBanner.create({
        data: {
            title: dto.title,
            description: dto.description,
            image: dto.image,
            order: dto.order,
            bgColor: dto.bgColor,
            ctaBtnLabel: dto.ctaBtnLabel,
            darkMode: dto.darkMode,
            position: dto.position ?? 0,
        },
    });

    return createdBanner;
};

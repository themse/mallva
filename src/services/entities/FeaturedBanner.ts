import { Image } from "./Image";

export enum FeaturedBannerOrder {
    INFO_FIRST, BANNER_FIRST,
}

export interface FeaturedBanner {
    id: string;
    title: string;
    description: string;
    image: Image;
    order: FeaturedBannerOrder;
    bgColor: string;
    ctaBtnLabel: string;

    darkMode?: boolean;
    position?: number;
}

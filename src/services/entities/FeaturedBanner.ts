export enum FeaturedBannerOrder {
    INFO_FIRST, BANNER_FIRST,
}

export interface FeaturedBanner {
    id?: string;
    title: string;
    description: string;
    image: string;
    order: FeaturedBannerOrder;
    bgColor: string;
    ctaBtnLabel: string;

    darkMode?: boolean;
    position?: number;
}

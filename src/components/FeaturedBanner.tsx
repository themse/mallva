'use client';

import Image from 'next/image';
import clsx from 'clsx';

import { CustomLink as CtaLink } from 'components';
import {
  FeaturedBanner as FeaturedBannerEntity,
  FeaturedBannerOrder,
} from 'services/entities';

type Props = {
  banner: FeaturedBannerEntity;
};

const FeaturedBanner = ({ banner }: Props) => {
  const { title, description, image, bgColor, order, ctaBtnLabel } = banner;

  const onCtaClick = () => {
    console.log('cta is clicked');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1">
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            fill
            src={image.path}
            alt={image.title}
            className="object-cover w-auto h-auto"
          />
        </div>
      </div>

      <div
        style={{ backgroundColor: bgColor }}
        className={clsx(
          'min-h-[245px] md:min-h-[420px] px-12 py-8 flex flex-col justify-center items-center gap-6 text-white text-center',
          order === FeaturedBannerOrder.INFO_FIRST && 'order-first'
        )}
      >
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-xl leading-8">{description}</p>
        <CtaLink size="medium" variant="ctaBtnLight" onClick={onCtaClick}>
          {ctaBtnLabel}
        </CtaLink>
      </div>
    </div>
  );
};

export default FeaturedBanner;

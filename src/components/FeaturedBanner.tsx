import Image from 'next/image';

import { CustomLink as CtaLink } from 'components';

export const FeaturedBanner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1">
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/banners/1.jpg"
            alt="Order now"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="bg-green-950 min-h-[245px] md:min-h-[420px] px-12 py-8 flex flex-col justify-center items-center gap-6 text-white text-center">
        <h2 className="text-2xl font-semibold">
          Enjoy summer savings with DashPass
        </h2>
        <p className="text-xl leading-8">
          Now is a great time to save with DashPass. Enjoy $10 off Starbucks
          orders of $20+ on DoorDash. Offer valid 7/13-7/19 from 12 p.m. – 3
          p.m. only. Max discount of $10.*
        </p>
        <CtaLink size="medium" variant="ctaBtnLight">
          Order now
        </CtaLink>
      </div>
    </div>
  );
};

import { Container, FeaturedBanner } from 'components';
import { FeaturedBannerOrder } from 'services/entities';

const Home = () => {
  return (
    <div className="my-8">
      <Container>
        <div className="flex flex-col gap-8">
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
      </Container>
    </div>
  );
};

export default Home;

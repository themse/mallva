import { PageTemplate } from 'components/admin';
import { CreateFeaturedBannerForm } from 'components';

const FeaturedBanners = () => {
  return (
    <PageTemplate title="Featured Banners">
      <CreateFeaturedBannerForm />
    </PageTemplate>
  );
};

export default FeaturedBanners;

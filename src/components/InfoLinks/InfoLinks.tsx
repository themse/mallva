import { InfoLinkItem } from './InfoLinkItem';
import { infoLinks } from 'utils/consts';

export const InfoLinks = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-10">
      {infoLinks.map(({ title, links }) => (
        <InfoLinkItem key={title} title={title} links={links} />
      ))}
    </div>
  );
};

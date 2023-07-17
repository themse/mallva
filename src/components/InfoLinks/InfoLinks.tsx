import { InfoLinkItem } from './InfoLinkItem';
import { infoLinks } from 'utils/consts';

export const InfoLinks = () => {
  return (
    <div className="grid grid-cols-5">
      {infoLinks.map(({ title, links }) => (
        <InfoLinkItem key={title} title={title} links={links} />
      ))}
    </div>
  );
};

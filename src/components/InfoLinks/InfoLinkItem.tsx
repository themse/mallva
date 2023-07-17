import { CustomLink as InfoLink } from 'components';

type Props = {
  title: string;
  links: {
    url: string;
    label: string;
  }[];
};

export const InfoLinkItem = ({ title, links }: Props) => {
  return (
    <div>
      <h3 className="text-lg text-black/75 capitalize whitespace-nowrap mb-6">
        {title}
      </h3>
      <ul className="flex flex-col gap-4">
        {links.map(({ label, url }) => (
          <li key={url}>
            <InfoLink href={url} isExternal variant="infoLink" size="medium">
              {label}
            </InfoLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

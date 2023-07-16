import { mergeClsx } from 'utils/helpers';
import {
  CustomLink as NavLink,
  CustomLinkSize,
  CustomLinkVariant,
} from 'components';

const menuList = [
  {
    url: 'https://www.starbucks.com/menu',
    label: 'Menu',
  },
  {
    url: 'https://www.starbucks.com/rewards',
    label: 'Rewards',
  },
  {
    url: 'https://www.starbucks.com/gift',
    label: 'Gift Cards',
  },
];

type Props = Partial<{
  className: string;
  linkVariants: CustomLinkVariant;
  linkSize: CustomLinkSize;
}>;

export const MainMenu = ({
  className,
  linkVariants = 'navLink',
  linkSize = 'small',
}: Props) => {
  return (
    <ul
      className={mergeClsx(
        'flex gap-5 lg:gap-9 items-center tracking-wider',
        className
      )}
    >
      {menuList.map(({ url, label }) => (
        <li key={url}>
          <NavLink
            href={url}
            variant={linkVariants}
            size={linkSize}
            isExternal
            className="whitespace-nowrap"
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

import { mergeClsx } from 'utils/helpers';
import { CustomLink as NavLink } from 'components';

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
    label: 'Gift cards',
  },
];

type Props = {
  className?: string;
};

export const MainMenu = ({ className }: Props) => {
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
            variant="navLink"
            size="small"
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

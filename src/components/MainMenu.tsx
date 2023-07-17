import { mergeClsx } from 'utils/helpers';
import {
  CustomLink as NavLink,
  CustomLinkSize,
  CustomLinkVariant,
} from 'components';
import { menuList } from 'utils/consts';

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

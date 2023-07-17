import { socialLinks } from 'utils/consts';

export const SocialIcons = () => {
  return (
    <ul className="flex gap-4 my-4">
      {socialLinks.map(({ url, label, Icon }) => (
        <li key={url}>
          <a href={url} target="_blank">
            <Icon />
            <span className="sr-only">{label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

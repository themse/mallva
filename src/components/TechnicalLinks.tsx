import { Fragment } from 'react';

import { technicalLinks } from 'utils/consts';

const lastLinkIndex = technicalLinks.length - 1;

export const TechnicalLinks = () => {
  return (
    <ul className="flex flex-wrap flex-col sm:flex-row gap-4 py-4">
      {technicalLinks.map(({ label, url }, index) => (
        <Fragment key={url}>
          <li>
            <a
              href={url}
              target="_blank"
              className="hover:border-b pb-1 border-black whitespace-nowrap"
            >
              {label}
            </a>
          </li>
          {index !== lastLinkIndex && (
            <li className="mx-2 hidden sm:block">|</li>
          )}
        </Fragment>
      ))}
    </ul>
  );
};

import React from 'react';
import { FormattedHTMLMessage as FormattedMessage } from 'react-intl';

const footerLinks = [
  { name: 'title', href: '/', defaultMessage: 'Halcyon for Mastodon' },
  { name: 'donation', href: 'https://www.patreon.com/neetshin', defaultMessage: 'Donation' },
  { name: 'about', href: '', defaultMessage: 'About' },
  { name: 'terms', href: '/terms', defaultMessage: 'Terms' },
  { name: 'apps', href: 'https://github.com/tootsuite/documentation/blob/master/Using-Mastodon/Apps.md', defaultMessage: 'Apps' },
  { name: 'source-code', href: 'https://github.com/halcyon-suite/halcyon', defaultMessage: 'Source code' },
  { name: 'other-instances', href: 'https://github.com/tootsuite/documentation/blob/master/Using-Mastodon/List-of-Mastodon-instances.md', defaultMessage: 'Other instances' },
];

const WidgetFooter = () => (
  <footer className="widget-footer">
    <ul className="widget-footer__list">
      {footerLinks.map(info => (
        <li className="widget-footer__list__child">
          <a href={info.href}>
            <FormattedMessage id={`footer.${info.name}`} defaultMessage={info.defaultMessage} />
          </a>
        </li>
      ))}
    </ul>
  </footer>
);

export default WidgetFooter;

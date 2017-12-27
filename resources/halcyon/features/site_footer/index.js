import React from 'react';
import { FormattedMessage } from 'react-intl';

const SiteFooter = () => (
  <footer className='site-footer'>
    <ul className='site-footer__list'>

      <li className='site-footer__list-item'>
        <a href='https://joinmastodon.org' target='__blank' rel='noopener'>
          <FormattedMessage id='information.mastodon' defaultMessage='About Mastodon' />
        </a>
      </li>

      <li className='site-footer__list-item'>
        <a href='https://github.com/halcyon-suite/halcyon' target='__blank' rel='noopener'>
          <FormattedMessage id='information.source_code' defaultMessage='Source code' />
        </a>
      </li>

      <li className='site-footer__list-item'>
        <a href='https://github.com/halcyon-suite/halcyon/issues' target='__blank' rel='noopener'>
          <FormattedMessage id='information.feedback' defaultMessage='Feedback' />
        </a>
      </li>

      <li className='site-footer__list-item'>
        <a href='https://www.patreon.com/neetshin' target='__blank' rel='noopener'>
          <FormattedMessage id='information.donation' defaultMessage='Become a patron' />
        </a>
      </li>

    </ul>
  </footer>
);

export default SiteFooter;

import React from 'react';
import { FormattedMessage } from 'react-intl';

const LoginFormFooter = () => (
  <footer className='login-form-footer'>
    <ul className='login-form-footer__list'>

      <li>
        <a href='https://joinmastodon.org' target='__blank'>
          <FormattedMessage id='login.login_form.footer.mastodon' defaultMessage='About Mastodon' />
        </a>
      </li>

      <li>
        <a href='https://github.com/halcyon-suite/halcyon' target='__blank'>
          <FormattedMessage id='login.login_form.footer.source_code' defaultMessage='Source code' />
        </a>
      </li>

      <li>
        <a href='https://github.com/halcyon-suite/halcyon/issues' target='__blank'>
          <FormattedMessage id='login.login_form.footer.feedback' defaultMessage='Feedback' />
        </a>
      </li>

      <li>
        <a href='https://www.patreon.com/neetshin' target='__blank'>
          <FormattedMessage id='login.login_form.footer.donation' defaultMessage='Become a patron' />
        </a>
      </li>

    </ul>
  </footer>
);

export default LoginFormFooter;

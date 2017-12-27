import React from 'react';
import { FormattedMessage } from 'react-intl';
import SiteFooter from '../site_footer';

const NotFound = () => (
  <main className='page-container'>
    <article className='not-found'>
      <h2 className='not-found__title'>
        <FormattedMessage id='not_found.generic' defaultMessage='Sorry, Page not found' />
      </h2>

      <div className='not-found__shobon'>
        (´・ω・｀)
      </div>

      <SiteFooter />
    </article>
  </main>
);

export default NotFound;

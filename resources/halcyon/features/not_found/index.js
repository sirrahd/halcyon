import React from 'react';
import { FormattedMessage } from 'react-intl';
import SiteFooter from '../site_footer';

import Page from '../app/components/page';
import Content from '../app/components/content';

const NotFound = () => (
  <Page>
    <Content>
      <article className='not-found'>
        <h2 className='not-found__title'>
          <FormattedMessage id='not_found.generic' defaultMessage='Sorry, Page not found' />
        </h2>

        <div className='not-found__shobon'>
          (´・ω・｀)
        </div>

        <SiteFooter />
      </article>
    </Content>
  </Page>
);

export default NotFound;

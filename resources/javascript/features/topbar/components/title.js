import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const Title = () => (
  <div className='topbar__title-wrap'>
    <Link to='/'>
      <div className='topbar__title'>
        <h1 className='invisible'>
          <FormattedMessage id='topbar.title.halcyon' defaultMessage='halcyon' />
        </h1>
      </div>
    </Link>
  </div>
);

export default Title;

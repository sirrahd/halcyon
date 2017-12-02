import React from 'react';
import { FormattedMessage } from 'react-intl';

const TootButton = () => (
  <div className='user-nav__toot-button'>
    <button className='toot-button'>
      <FormattedMessage id='topbar.toot_form.compose' defaultMessage='Toot' />
    </button>
  </div>
);

export default TootButton;

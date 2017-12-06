import React from 'react';
import { FormattedMessage } from 'react-intl';

const TootButton = () => (
  <div className='user-nav__toot-button'>
    <button className='toot-button'>
      <FormattedMessage id='compose_form.toot' defaultMessage='Toot' />
    </button>
  </div>
);

export default TootButton;

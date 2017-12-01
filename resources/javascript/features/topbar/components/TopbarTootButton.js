import React from 'react';
import { FormattedMessage } from 'react-intl';

const TopbarActionNavTootButton = () => (
  <div className="user-nav__toot-button">
    <button className="toot-button">
      <FormattedMessage id="toot_form.compose" defaultMessage="Toot" />
    </button>
  </div>
);

export default TopbarActionNavTootButton;

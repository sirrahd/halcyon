import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

export default class ComposeSettings extends React.PureComponent {

  render () {
    return(
      <div className='settings__content'>
        <h3><FormattedMessage id='settings.timelines' defaultMessage='Timelines' /></h3>

      </div>
    );
  }

}

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

export default class ComposeSettings extends React.PureComponent {

  render () {
    return(
      <div className='settings__section'>
        <h3><FormattedMessage id='settings.timeline' defaultMessage='Timelines' /></h3>

      </div>
    );
  }

}

import React from 'react';
import { FormattedMessage } from 'react-intl';

const LoadingIndicator = () => (
  <div className='loading-indicator'>
    <div className='loading-indicator__icon'>
      <i className='fa fa-circle-o-notch fa-spin' aria-hidden='true' />
    </div>

    <div className='loading-indicator__label'>
      <FormattedMessage id='loading_indicator.label' defaultMessage='Loading...' />
    </div>
  </div>
);

export default LoadingIndicator;

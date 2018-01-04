import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

export default class LoadingIndicator extends React.PureComponent {

  static propTypes = {
    withLabel: PropTypes.bool,
    withSpinner: PropTypes.bool,
  }

  static defaultProps = {
    withLabel: true,
    withSpinner: true,
  }

  render () {
    const { withLabel, withSpinner } = this.props;

    return (
      <div className='loading-indicator'>
        {
          withSpinner && (
            <div className='loading-indicator__icon'>
              <i className='fa fa-circle-o-notch fa-spin' aria-hidden='true' />
            </div>
          )
        }

        {
          withLabel && (
            <div className='loading-indicator__label'>
              <FormattedMessage id='loading_indicator.label' defaultMessage='Loading...' />
            </div>
          )
        }
      </div>
    );
  }

}

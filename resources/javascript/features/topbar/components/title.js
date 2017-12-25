import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

export default class Title extends React.PureComponent {

  static propTypes = {
    isRequesting: PropTypes.bool.isRequired,
  }

  render () {
    const { isRequesting } = this.props;

    return (
      <div className='topbar__title-wrap'>
        <Link to='/'>
          {
            !isRequesting ? (
              <div className='topbar__title'>
                <h1 className='invisible'>
                  <FormattedMessage id='title.halcyon' defaultMessage='halcyon' />
                </h1>
              </div>
            ) : (
              <div className='topbar__spinner'>
                <i className='fa fa-spin fa-circle-o-notch' />
              </div>
            )
          }
        </Link>
      </div>
    );
  }

}

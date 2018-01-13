import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

export default class PublishingSettings extends React.PureComponent {

  render () {
    return(
      <div className='settings__content'>
        <h3><FormattedMessage id='settings.publishing' defaultMessage='Publishing' /></h3>

        <form>
          <div>
            <label>
              <input type='number' className='default-css' />
              Max status length
            </label>
          </div>
        </form>
      </div>
    );
  }

}

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

export default class ComposeSettings extends React.PureComponent {

  render () {
    return(
      <div className='settings__section'>
        <h3><FormattedMessage id='settings.compose' defaultMessage='Status' /></h3>

        <form>

          <div>
            Post privacy
            <select className='default-css'>
              <option>Public</option>
              <option>Private</option>
              <option>Unlisted</option>
              <option>Direct</option>
            </select>
          </div>

          <div>
            <label>
              <input type='checkbox' />
              Always mark media as sensitive
            </label>
          </div>

          <div>
            <label>
              <input type='number' />
              Max status length
            </label>
          </div>
        </form>
      </div>
    );
  }

}

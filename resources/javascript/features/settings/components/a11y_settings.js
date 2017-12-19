import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape, defineMessages, FormattedMessage } from 'react-intl';

export default class A11ySettings extends React.PureComponent {

  render () {
    return(
      <div className='settings__content'>
        <h3><FormattedMessage id='settings.a11y' defaultMessage='Accessibility' /></h3>

        <div>
          <label>
            <input type='checkbox' />
            Show confirmation dialog before unfollowing someone
          </label>
        </div>

        <div>
          <label>
            <input type='checkbox' />
            Show confirmation dialog before boosting
          </label>
        </div>

        <div>
          <label>
            <input type='checkbox' />
            Show confirmation dialog before deleting a toot
          </label>
        </div>

        <div>
          <label>
            <input type='checkbox' />
            Auto-play animated GIFs
          </label>
        </div>

        <div>
          <label>
            <input type='checkbox' />
            Reduce motion in animations
          </label>
        </div>
      </div>
    );
  }

}

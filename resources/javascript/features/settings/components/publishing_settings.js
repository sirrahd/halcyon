import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import SettingCheckbox from '../../../components/setting_checkbox';

export default class ComposeSettings extends React.PureComponent {

  render () {
    return(
      <div className='settings__content'>
        <h3><FormattedMessage id='settings.publishing' defaultMessage='Publishing' /></h3>

        <form>

          <div>
            <FormattedMessage id='settings.publishing.default_privacy' defaultMessage='Post privacy' />

            <ul>
              <li>
                <label>
                  <input type='radio' name='default_privacy' value='public' />
                  <FormattedMessage id='privacy.public.short' defaultMessage='Public' />
                </label>
              </li>

              <li>
                <label>
                  <input type='radio' name='default_privacy' value='unlisted' />
                  <FormattedMessage id='privacy.unlisted.short' defaultMessage='Unlisted' />
                </label>
              </li>

              <li>
                <label>
                  <input type='radio' name='default_privacy' value='private' />
                  <FormattedMessage id='privacy.private.short' defaultMessage='Followers-only' />
                </label>
              </li>
            </ul>
          </div>

          <div>
            <label>
              <input type='checkbox' />
              Always mark media as sensitive
            </label>
          </div>

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

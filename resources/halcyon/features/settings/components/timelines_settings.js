import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, FormattedMessage } from 'react-intl';
import ImmutablePropTypes from 'react-immutable-proptypes';

// import SettingSelect from '../utils/setting_select';
import SettingRadio from '../utils/setting_radio';

const messages = defineMessages({
  round_avatars: { id: 'settings.ui.round_avatars', defaultMessage: 'Round avatars' },
  navigations_label: { id: 'settings.ui.navigations_label', defaultMessage: 'Show labels in the navigation bar' },
  acct_display: { id: 'settings.ui.acct_display', defaultMessage: 'Username display style' },
  remote_only: { id: 'settings.ui.acct_display.remote_only', defaultMessage: 'Remote only @username@domain' },
  always_full: { id: 'settings.ui.acct_display.always_full', defaultMessage: 'Always @username@domain' },
  always_short: { id: 'settings.ui.acct_display.always_short', defaultMessage: 'Always @username' },
});

export default class ComposeSettings extends React.PureComponent {

  propTypes = {
    intl: PropTypes.object.isRequired,
    settings: ImmutablePropTypes.map.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  render () {
    const { intl, settings, onChange } = this.props;

    return(
      <div className='settings__content'>
        <h3><FormattedMessage id='settings.timelines' defaultMessage='Timelines' /></h3>

        <div>
          <SettingRadio
            settings={settings}
            settingKey={['halcyon', 'usernameDisplay']}
            name='halcyon-username-display'
            options={[
              { text: intl.formatMessage(messages.remote_only), value: 'remote_only' },
              { text: intl.formatMessage(messages.always_full), value: 'always_full' },
              { text: intl.formatMessage(messages.always_short), value: 'always_short' },
            ]}
            onChange={onChange}
          />
        </div>
      </div>
    );
  }

}

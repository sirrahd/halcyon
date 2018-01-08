import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, FormattedMessage } from 'react-intl';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { LANUAGES, THEMES } from '../../../constants';

import SettingCheckbox from '../utils/setting_checkbox';

const messages = defineMessages({
  round_avatars: { id: 'settings.ui.round_avatars', defaultMessage: 'Round avatars' },
  navigations_label: { id: 'settings.ui.navigations_label', defaultMessage: 'Show labels in the navigation bar' },
});

export default class UISettings extends React.PureComponent {

  static propTypes = {
    settings: ImmutablePropTypes.map.isRequired,
    onChange: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired,
  }

  render () {
    const { settings, onChange, intl } = this.props;

    return(
      <div className='settings__content'>
        <h3><FormattedMessage id='settings.ui' defaultMessage='User interface' /></h3>

        <div>
          <FormattedMessage id='settings.ui.language' defaultMessage='Language' />
          <select className='default-css'>
            { LANUAGES.map((data, i) => <option key={`${i}-${data.value}`} value={data.value}>{data.name}</option>)}
          </select>
        </div>

        <div>
          <FormattedMessage id='settings.ui.theme' defaultMessage='Theme' />
          <select className='default-css'>
            { THEMES.map((data, i) => <option key={`${i}-${data.value}`} value={data.value}>{data.name}</option>)}
          </select>
        </div>

        <div>
          <SettingCheckbox
            settings={settings}
            settingKey={['halcyon', 'roundAvatars']}
            label={intl.formatMessage(messages.round_avatars)}
            onChange={onChange}
          />
        </div>

        <div>
          <SettingCheckbox
            settings={settings}
            settingKey={['halcyon', 'showNavigationLabels']}
            label={intl.formatMessage(messages.navigations_label)}
            onChange={onChange}
          />
        </div>

      </div>
    );
  }

}

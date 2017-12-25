import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, defineMessages, FormattedMessage } from 'react-intl';
import ImmutablePropTypes from 'react-immutable-proptypes';
import SettingCheckbox from '../../../components/setting_checkbox';

const messages = defineMessages({
  unfollow_modal: { id: 'settings.a11y.unfollow_modal', defaultMessage: 'Show confirmation dialog before unfollowing someone' },
  boost_modal: { id: 'settings.a11y.boost_modal', defaultMessage: 'Show confirmation dialog before boosting' },
  delete_modal: { id: 'settings.a11y.delete_modal', defaultMessage: 'Show confirmation dialog deleting a toot' },
  auto_play_gif: { id: 'settings.a11y.auto_play_gif', defaultMessage: 'Auto-play animated GIFs' },
  reduce_motion: { id: 'settings.a11y.reduce_motion', defaultMessage: 'Reduce motion in animations' },
});

@injectIntl
export default class A11ySettings extends React.PureComponent {

  static propTypes = {
    intl: PropTypes.object.isRequired,
    meta: ImmutablePropTypes.map.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  render () {
    const { meta, intl, onChange } = this.props;

    return(
      <div className='settings__content'>
        <h3><FormattedMessage id='settings.a11y' defaultMessage='Accessibility' /></h3>

        <div>
          <SettingCheckbox settings={meta} settingKey={['unfollow_modal']} label={intl.formatMessage(messages.unfollow_modal)} onChange={onChange} />
        </div>

        <div>
          <SettingCheckbox settings={meta} settingKey={['boost_modal']} label={intl.formatMessage(messages.boost_modal)} onChange={onChange} />
        </div>

        <div>
          <SettingCheckbox settings={meta} settingKey={['delete_modal']} label={intl.formatMessage(messages.delete_modal)} onChange={onChange} />
        </div>

        <div>
          <SettingCheckbox settings={meta} settingKey={['auto_play_gif']} label={intl.formatMessage(messages.auto_play_gif)} onChange={onChange} />
        </div>

        <div>
          <SettingCheckbox settings={meta} settingKey={['reduce_motion']} label={intl.formatMessage(messages.reduce_motion)} onChange={onChange} />
        </div>
      </div>
    );
  }

}

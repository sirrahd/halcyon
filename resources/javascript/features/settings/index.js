import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { FormattedMessage } from 'react-intl';

import AccountSettingsContainer from './containers/account_settings_container';
import ComposeSettingsContainer from './containers/compose_settings_container';
import UISettingsContainer from './containers/ui_settings_container';
import A11ySettingsContainer from './containers/a11y_settings_container';

const tabsMap = [
  'account',
  'compose',
  'ui',
  'a11y',
];

export default class Settings extends React.PureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map.isRequired,
    settings: ImmutablePropTypes.map.isRequired,
    initialTab: PropTypes.string,
  }

  static defaultProps = {
    initialTab: 'account',
  }

  state = {
    currentTab: tabsMap.indexOf(this.props.initialTab),
  }

  handleToggleTab = e => {
    const i = Number(e.currentTarget.getAttribute('data-index'));
    e.preventDefault();

    if ( tabsMap.length >= i ) {
      this.setState({ currentTab: i });
    }
  }

  render () {
    const { currentTab } = this.state;

    return (
      <div className='settings'>
        <asie className='settings__tabs'>
          <ul className='settings__tabs-list'>
            <li className='settings__tabs-list-item'>
              <a data-index={0} onClick={this.handleToggleTab}>
                <FormattedMessage id='settings.account' defaultMessage='Account' />
              </a>
            </li>

            <li className='settings__tabs-list-item'>
              <a data-index={1} onClick={this.handleToggleTab}>
                <FormattedMessage id='settings.compose' defaultMessage='Status' />
              </a>
            </li>

            <li className='settings__tabs-list-item'>
              <a data-index={2} onClick={this.handleToggleTab}>
                <FormattedMessage id='settings.ui' defaultMessage='User interface' />
              </a>
            </li>

            <li className='settings__tabs-list-item'>
              <a data-index={3} onClick={this.handleToggleTab}>
                <FormattedMessage id='settings.a11y' defaultMessage='Accessibility' />
              </a>
            </li>
          </ul>
        </asie>

        <section className='settings__wrapper'>
          <AccountSettingsContainer visible={(currentTab === 0)} />
          <ComposeSettingsContainer visible={(currentTab === 1)} />
          <UISettingsContainer visible={(currentTab === 2)} />
          <A11ySettingsContainer visible={(currentTab === 3)} />
        </section>
      </div>
    );
  }

}

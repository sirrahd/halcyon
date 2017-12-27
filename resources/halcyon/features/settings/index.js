import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { injectIntl, defineMessages } from 'react-intl';
import classNames from 'classnames';

import AccountsSettingsContainer from './containers/accounts_settings_container';
import PublishingSettingsContainer from './containers/publishing_settings_container';
import TimelinesSettingsContainer from './containers/timelines_settings_container';
import UISettingsContainer from './containers/ui_settings_container';
import A11ySettingsContainer from './containers/a11y_settings_container';

const messages = defineMessages({
  accounts: { id: 'settings.accounts', defaultMessage: 'Accounts' },
  publishing: { id: 'settings.publishing', defaultMessage: 'Publishing' },
  timelines: { id: 'settings.timelines', defaultMessage: 'Timelines' },
  ui: { id: 'settings.ui', defaultMessage: 'User interface' },
  a11y: { id: 'settings.a11y', defaultMessage: 'Accessibility' },
});

class SettingsMenu extends React.PureComponent {

  static propTypes = {
    items: PropTypes.array.isRequired,
    active: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  handleClick = e => {
    const i = Number(e.currentTarget.getAttribute('data-index'));
    e.preventDefault();
    this.props.onChange(i);
  }

  renderItem(option, i) {
    const { id, label, iconClassName } = option;
    const { active } = this.props;

    return (
      <li className='settings__menu-list-item' key={`${i}-${id}`}>
        <a className={classNames('settings__menu-link', { active: active === i })} href='#' data-index={i} onClick={this.handleClick} onKeyDown={this.handleKetDown} autoFocus={(i === 0)}>
          <i className={`${iconClassName} settings__menu-icon`} aria-hidden='true' />
          <span>{label}</span>
        </a>
      </li>
    );
  }

  render () {
    const { items } = this.props;

    return (
      <aside className='settings__menu'>
        <ul className='settings__menu-list'>
          { items.map((option, i) => this.renderItem(option, i)) }
        </ul>
      </aside>
    );
  }

}

@injectIntl
export default class Settings extends React.PureComponent {

  static propTypes = {
    intl: PropTypes.object.isRequired,
  }

  state = {
    active: 0,
  }

  componentWillMount () {
    const { formatMessage } = this.props.intl;

    this.menu = [
      { id: 'accounts', component: AccountsSettingsContainer, label: formatMessage(messages.accounts), iconClassName: 'fa fa-address-book' },
      { id: 'publishing', component: PublishingSettingsContainer, label: formatMessage(messages.publishing), iconClassName: 'fa fa-pencil-square-o' },
      { id: 'timelines', component: TimelinesSettingsContainer, label: formatMessage(messages.timelines), iconClassName: 'fa fa-globe' },
      { id: 'ui', component: UISettingsContainer, label: formatMessage(messages.ui), iconClassName: 'fa fa-desktop' },
      { id: 'a11y', component: A11ySettingsContainer, label: formatMessage(messages.a11y), iconClassName: 'fa fa-universal-access' },
    ];
  }

  handleChange = i => {
    this.setState({ active: i });
  }

  render () {
    const { active } = this.state;
    const ActiveComponent = this.menu[active].component;

    return (
      <div className='settings'>
        <SettingsMenu
          items={this.menu}
          active={active}
          onChange={this.handleChange}
        />

        <div className='settings__contents-wrapper'>
          <ActiveComponent />
        </div>
      </div>
    );
  }

}

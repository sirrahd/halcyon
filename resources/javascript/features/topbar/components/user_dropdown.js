import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';
import { intlShape, defineMessages } from 'react-intl';

import normalizeAcct from '../../../normalize_acct';
import Avatar from '../../../containers/avatar_container';
import DropdownMenu from '../../../containers/dropmenu_menu_container';

const messages = defineMessages({
  tooltip: { id: 'user_navigation.tooltip', defaultMessage: 'Profile and Settings' },
  profile: { id: 'user_navigation.profile', defaultMessage: 'Profile' },
  list: { id: 'user_navigation.list', defaultMessage: 'Lists' },
  settings: { id: 'user_navigation.settings', defaultMessage: 'Settings' },
  keyboardShortcuts: { id: 'user_navigation.keyboard_shortcuts', defaultMessage: 'Keyboard shortcuts' },
  logout: { id: 'user_navigation.logout', defaultMessage: 'Log out' },
});

export default class UserDropdown extends ImmutablePureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map.isRequired,
    intl: intlShape.isRequired,
    onModalOpen: PropTypes.func.isRequired,
    onModalClose: PropTypes.func.isRequired,
  }

  renderButton() {
    return (
      <button className='user-dropdown-menu__button' onClick={this.handleToggle} ref={this.setTargetRef} data-tip={intl.formatMessage(messages.tooltip)}>
        <Avatar account={account} size={34} />
      </button>
    );
  }

  handleOpenSettingsModal = () => {
    this.props.onModalOpen('SETTINGS', {});
  }

  handleOpenKeyboardShortcutsModal = () => {
    this.props.onModalOpen('KEYBOARD_SHORTCUTS', {});
  }

  render() {
    const { intl, account } = this.props;
    const id          = account.get('id');
    const acct        = normalizeAcct(account.get('acct'), true);
    const displayName = account.get('display_name');
    const items = [
      {
        text: (
          <div>
            <h3 className='user-dropdown-menu__display-name'>
              {displayName}
            </h3>
            <span className='user-dropdown-menu__username'>
              {acct}
            </span>
          </div>
        ),
        to: `/accounts/${id}`,
      },
      null,
      {
        text: intl.formatMessage(messages.profile),
        to: `/accounts/${id}`,
      },
      {
        text: intl.formatMessage(messages.list),
        to: '/lists',
      },
      null,
      {
        text: intl.formatMessage(messages.settings),
        action: this.handleOpenSettingsModal,
      },
      {
        text: intl.formatMessage(messages.keyboardShortcuts),
        action: this.handleOpenKeyboardShortcutsModal,
      },
      {
        text: intl.formatMessage(messages.logout),
        to: '/logout',
      },
    ];

    return (
      <div className='user-navigation__user-dropdown-menu'>
        <DropdownMenu items={items} />
      </div>
    );
  }

}

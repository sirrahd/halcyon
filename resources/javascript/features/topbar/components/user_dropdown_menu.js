import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';
import { Link } from 'react-router-dom';
import Dropdown, { DropdownContent, DropdownTrigger } from 'react-simple-dropdown';
import { intlShape, FormattedMessage, defineMessages } from 'react-intl';
import normalizeAcct from '../../../normalize_acct';
import Avatar from '../../../components/avatar';

const messages = defineMessages({
  tooltip: { id: 'user_navigation.tooltip', defaultMessage: 'Profile and Settings' },
});

export default class UserDropdownMenu extends ImmutablePureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map.isRequired,
    intl: intlShape.isRequired,
  }

  render() {
    const { account, intl } = this.props;
    const id          = account.get('id');
    const displayName = account.get('display_name');
    const acct        = normalizeAcct(account.get('acct'), true);

    return (
      <div className='user-nav__user-dropdown-menu'>
        <Dropdown className='user-dropdown-menu dropdown--right'>

          <DropdownTrigger>
            <button className='user-dropdown-menu__button' data-tip={intl.formatMessage(messages.tooltip)}>
              <Avatar account={account} size={34} />
            </button>
          </DropdownTrigger>

          <DropdownContent>

            <div className='dropdown__caret'>
              <div className='dropdown__caret-outer' />
              <div className='dropdown__caret-inner' />
            </div>

            <ul className='dropdown__list'>

              <li className='dropdown__list-item dropdown-list-account'>
                <Link to={`/accounts/${id}`}>
                  <h3 className='dropdown-account__display-name'>
                    {displayName}
                  </h3>
                  <span className='dropdown-account__username'>
                    {acct}
                  </span>
                </Link>
              </li>

              <li className='dropdown__sep' />

              <li className='dropdown__list-item'>
                <Link to={`/accounts/${id}`}>
                  <FormattedMessage id='user_navigation.profile' defaultMessage='Profile' />
                </Link>
              </li>

              <li className='dropdown__list-item'>
                <Link to='/lists'>
                  <FormattedMessage id='user_navigation.list' defaultMessage='Lists' />
                </Link>
              </li>

              <li className='dropdown__sep' />

              <li className='dropdown__list-item'>
                <Link to='/settings'>
                  <FormattedMessage id='user_navigation.settings' defaultMessage='Settings' />
                </Link>
              </li>

              <li className='dropdown__list-item'>
                <Link to=''>
                  <FormattedMessage id='user_navigation.keyborad_shortcuts' defaultMessage='Keyborad shortcuts' />
                </Link>
              </li>

              <li className='dropdown__list-item'>
                <Link to=''>
                  <FormattedMessage id='user_navigation.logout' defaultMessage='Log out' />
                </Link>
              </li>

            </ul>

          </DropdownContent>

        </Dropdown>
      </div>
    );
  }

}

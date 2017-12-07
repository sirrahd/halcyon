import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';
import { Link } from 'react-router-dom';
import Dropdown, { DropdownContent, DropdownTrigger } from 'react-simple-dropdown';
import { intlShape, FormattedMessage, defineMessages } from 'react-intl';
import normalizeAcct from '../../../normalize_acct';

const messages = defineMessages({
  tooltip: { id: 'user_navigation.tooltip', defaultMessage: 'Profile and Settings' },
});

export default class AvatarDropdown extends ImmutablePureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map.isRequired,
    intl: intlShape.isRequired,
  }

  handleToggle = () => {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const { account, intl } = this.props;
    const avatar      = account.get('avatar');
    const displayName = account.get('display_name');
    const acct        = normalizeAcct(account.get('acct'), true);

    return (
      <div className='user-nav__avatar-dropdown'>
        <Dropdown className='avatar-dropdown'>

          <DropdownTrigger>
            <button className='avatar-dropdown__button' data-tip={intl.formatMessage(messages.tooltip)}>
              <img src={avatar} alt={displayName} />
            </button>
          </DropdownTrigger>

          <DropdownContent>

            <div className='dropdown__caret'>
              <div className='dropdown__caret-outer' />
              <div className='dropdown__caret-inner' />
            </div>

            <ul className='dropdown__list'>

              <li className='dropdown__list-item dropdown-account'>
                <h3 className='dropdown-account__displayName'>
                  {displayName}
                </h3>
                <span className='dropdown-account__username'>
                  {acct}
                </span>
              </li>

              <li className='dropdown__sep' />

              <li className='dropdown__list-item'>
                <Link to={`/${acct}`}>
                  <FormattedMessage id='user_navigation.profile' defaultMessage='Profile' />
                </Link>
              </li>

              <li className='dropdown__list-item'>
                <Link to={`/${acct}/lists`}>
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

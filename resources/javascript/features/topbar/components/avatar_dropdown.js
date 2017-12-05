import React from 'react';
import { Link } from 'react-router-dom';
import { intlShape, FormattedMessage, defineMessages } from 'react-intl';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ReactTooltip from 'react-tooltip';
import Dropdown, { DropdownContent } from 'react-simple-dropdown';
// import ImmutablePureComponent from 'react-immutable-pure-component';
import normalizeAcct from '../../../normalize_acct';

const messages = defineMessages({
  tooltip: { id: 'topbar.user_nav.avatar_dropdown.tooltip', defaultMessage: 'Profile and Settings' },
});

export default class AvatarDropdown extends React.Component {

  static propTypes = {
    account: ImmutablePropTypes.map.isRequired,
    intl: intlShape.isRequired,
  }

  state = {
    expanded: false,
  }

  shouldComponentUpdate (nextProps, nextState) {
    if ( this.state.expanded !== nextState.expanded || this.props.account !== nextProps.account ) {
      return true;
    }
    return false;
  }

  handleToggle = () => {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const { expanded } = this.state;
    const { account, intl } = this.props;
    const avatar      = account.get('avatar');
    const displayName = account.get('display_name');
    const acct        = normalizeAcct(account.get('acct'), true);

    return (
      <div className='user-nav__avatar-dropdown'>
        <Dropdown className='avatar-dropdown' active={expanded}>

          <button
            className='avatar-dropdown__button'
            data-tip={intl.formatMessage(messages.tooltip)}
            onClick={this.handleToggle}
          >
            <img src={avatar} alt={displayName} />
            <ReactTooltip effect='solid' disable={expanded} />
          </button>

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
                  <FormattedMessage id='topbar.user_nav.avatar_dropdown.profile' defaultMessage='Profile' />
                </Link>
              </li>

              <li className='dropdown__list-item'>
                <Link to={`/${acct}/lists`}>
                  <FormattedMessage id='topbar.user_nav.avatar_dropdown.list' defaultMessage='Lists' />
                </Link>
              </li>

              <li className='dropdown__sep' />

              <li className='dropdown__list-item'>
                <Link to='/settings'>
                  <FormattedMessage id='topbar.user_nav.avatar_dropdown.settings' defaultMessage='Settings' />
                </Link>
              </li>

              <li className='dropdown__list-item'>
                <Link to=''>
                  <FormattedMessage id='topbar.user_nav.avatar_dropdown.keyborad_shortcuts' defaultMessage='Keyborad shortcuts' />
                </Link>
              </li>

              <li className='dropdown__list-item'>
                <Link to=''>
                  <FormattedMessage id='topbar.user_nav.avatar_dropdown.logout' defaultMessage='Log out' />
                </Link>
              </li>

            </ul>
          </DropdownContent>

        </Dropdown>
      </div>
    );
  }

}

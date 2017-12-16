import React from 'react';
import Overlay from 'react-overlays/lib/Overlay';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';
import { Link } from 'react-router-dom';
import { intlShape, FormattedMessage, defineMessages } from 'react-intl';
import detectPassiveEvents from 'detect-passive-events';

import normalizeAcct from '../../../normalize_acct';
import Avatar from '../../../components/avatar';

const messages = defineMessages({
  tooltip: { id: 'user_navigation.tooltip', defaultMessage: 'Profile and Settings' },
});

const listenerOptions = detectPassiveEvents.hasSupport ? { passive: true } : false;

export default class UserDropdown extends ImmutablePureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map.isRequired,
    intl: intlShape.isRequired,
  }

  state = {
    expanded: false,
  }

  componentDidMount () {
    document.addEventListener('click', this.handleDocumentClick, false);
    document.addEventListener('touchend', this.handleDocumentClick, listenerOptions);
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.handleDocumentClick, false);
    document.removeEventListener('touchend', this.handleDocumentClick, listenerOptions);
  }

  handleToggle = () => {
    this.setState({ expanded: !this.state.expanded });
  }

  handleClose = () => {
    this.setState({ expanded: false });
  }

  handleDocumentClick = e => {
    if (this.menu && !this.menu.contains(e.target)) {
      this.handleClose();
    }
  }

  setTargetRef = c => {
    this.target = c;
  }

  setMenuRef = c => {
    this.menu = c;
  }

  findTarget = () => {
    return this.target;
  }

  render() {
    const { account, intl } = this.props;
    const { expanded } = this.state;
    const id          = account.get('id');
    const displayName = account.get('display_name');
    const acct        = normalizeAcct(account.get('acct'), true);

    return (
      <div className='user-nav__user-dropdown-menu'>
        <div className='user-dropdown-menu dropdown dropdown--right'>

          <button className='user-dropdown-menu__button' onClick={this.handleToggle} ref={this.setTargetRef} data-tip={intl.formatMessage(messages.tooltip)}>
            <Avatar account={account} size={34} />
          </button>

          <Overlay show={expanded} placement='bottom' target={this.findTarget} container={this}>
            <div className='dropdown__content'>

              <div className='dropdown__caret'>
                <div className='dropdown__caret-outer' />
                <div className='dropdown__caret-inner' />
              </div>

              <ul className='dropdown__list' ref={this.setMenuRef}>
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

            </div>
          </Overlay>
        </div>
      </div>
    );
  }

}

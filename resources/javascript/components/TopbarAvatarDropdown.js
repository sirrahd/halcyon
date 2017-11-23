import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Map as ImmutableMap } from 'immutable';
import { FormattedMessage } from 'react-intl';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ReactTooltip from 'react-tooltip';
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';
import OmaeMona from '../../images/omae_mona.png';

class TopbarAvatarDropdown extends React.PureComponent {
  // デモ用なので本番は.isRequiredを付ける
  static propTypes = {
    account: ImmutablePropTypes.map,
  }

  // デモ用Props
  static defaultProps = {
    account: ImmutableMap({
      display_name: '新都心',
      usename: '@neet',
      avatar: OmaeMona,
    }),
  }

  render() {
    const { account } = this.props;

    const avatar      = account.get('avatar');
    const displayName = account.get('display_name');
    // const username    = account.get('username');

    return (
      <div className="user-nav__avatar-dropdown">
        <Dropdown className="avatar-dropdown">

          <DropdownTrigger className="avatar-dropdown__trigger">
            <button className="avatar-dropdown__button" data-tip="Profile and settings">
              <img src={avatar} alt={displayName} />
              <ReactTooltip effect="solid" />
            </button>
          </DropdownTrigger>

          <DropdownContent>

            <div className="dropdown__caret">
              <div className="dropdown__caret-outer" />
              <div className="dropdown__caret-inner" />
            </div>

            <ul className="dropdown__list">

              <li className="dropdown__list-item">
                <Link to="">Profile</Link>
              </li>

              <li className="dropdown__sep" />

              <li className="dropdown__list-item">
                <Link to="">Settings and Privacy</Link>
              </li>

              <li className="dropdown__list-item">
                <Link to="">Keyborad shortcuts</Link>
              </li>

              <li className="dropdown__list-item">
                <Link to="">Log out</Link>
              </li>

              <li className="dropdown__sep" />

              <li className="dropdown__list-item">
                <Link to="">Night mode</Link>
              </li>

            </ul>
          </DropdownContent>

        </Dropdown>
      </div>
    );
  }
}

export default TopbarAvatarDropdown;

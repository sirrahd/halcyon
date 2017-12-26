import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import ImmutablePropTypes from 'react-immutable-proptypes';

@withRouter
export default class AccountHeaderCounters extends React.Component {

  static propTypes = {
    account: ImmutablePropTypes.map,
    history: PropTypes.object.isRequired,
  }

  shouldComponentUpdate (nextProps) {
    if ( this.props.history.location.pathname !== nextProps.history.location.pathname ) {
      return true;
    }

    return false;
  }

  render () {
    const { account } = this.props;

    if ( account === null ) {
      return <div />;
    }

    const id = account.get('id');

    return (
      <div className='account-header-counter'>
        <ul className='account-header-counter__list'>

          <li className='account-header-counter__list-item'>
            <NavLink exact to={`/accounts/${id}`} className='account-header-counter__link' activeClassName='account-header-counter__link--current'>
              <div className='account-header-counter__label'>
                <FormattedMessage id='account.toots' defaultMessage='Toots' />
              </div>

              <div className='account-header-counter__counter'>
                <FormattedNumber value={account.get('statuses_count')} />
              </div>
            </NavLink>
          </li>

          <li className='account-header-counter__list-item'>
            <NavLink exact to={`/accounts/${id}/following`} className='account-header-counter__link' activeClassName='account-header-counter__link--current'>
              <div className='account-header-counter__label'>
                <FormattedMessage id='account.following' defaultMessage='Following' />
              </div>

              <div className='account-header-counter__counter'>
                <FormattedNumber value={account.get('following_count')} />
              </div>
            </NavLink>
          </li>

          <li className='account-header-counter__list-item'>
            <NavLink exact to={`/accounts/${id}/followers`} className='account-header-counter__link' activeClassName='account-header-counter__link--current'>
              <div className='account-header-counter__label'>
                <FormattedMessage id='account.followers' defaultMessage='Followers' />
              </div>

              <div className='account-header-counter__counter'>
                <FormattedNumber value={account.get('followers_count')} />
              </div>
            </NavLink>
          </li>

        </ul>
      </div>
    );
  }

}

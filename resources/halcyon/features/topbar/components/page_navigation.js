import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

@withRouter
export default class PageNavigation extends React.Component {

  static propTypes = {
    location: PropTypes.object.isRequired,
  }

  shouldComponentUpdate (nextProps) {
    if ( this.props.location.pathname !== nextProps.location.pathname ) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <nav className='page-navigation'>
        <ul className='page-navigation__list'>
          <li className='page-navigation__list-item'>
            <NavLink exact to='/timelines/home' className='page-navigation__link' activeClassName='page-navigation__link--current'>
              <i className='page-navigation__icon icon-home' />
              <FormattedMessage id='page_navigation.home' defaultMessage='Home' />
            </NavLink>
          </li>

          <li className='page-navigation__list-item'>
            <NavLink exact to='/timelines/public/local' className='page-navigation__link' activeClassName='page-navigation__link--current'>
              <i className='page-navigation__icon icon-users' />
              <FormattedMessage id='page_navigation.local' defaultMessage='Local' />
            </NavLink>
          </li>

          <li className='page-navigation__list-item'>
            <NavLink exact to='/timelines/public' className='page-navigation__link' activeClassName='page-navigation__link--current'>
              <i className='page-navigation__icon icon-social' />
              <FormattedMessage id='page_navigation.federated' defaultMessage='Federated' />
            </NavLink>
          </li>

          <li className='page-navigation__list-item'>
            <NavLink exact to='/notifications' className='page-navigation__link' activeClassName='page-navigation__link--current'>
              <i className='page-navigation__icon icon-bell' />
              <FormattedMessage id='page_navigation.notifications' defaultMessage='Notifications' />
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }

}

import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

export default class PageNavigation extends React.PureComponent {

  renderItem = (itemName, isExact, linkTo, iconClass, messageId) => (
    <li key={itemName} className='page-nav__list-item'>
      <NavLink exact={isExact} to={linkTo} className='page-nav__navlink' activeClassName='page-nav__navlink--current'>
        <i className={`page-nav__icon ${iconClass}`} />
        <FormattedMessage id={messageId} defaultMessage={itemName} />
      </NavLink>
    </li>
  )

  render() {
    const items = [
      ['home', true, '/', 'icon-home', 'page_navigation.home'],
      ['local', false, '/local', 'icon-users', 'page_navigation.local'],
      ['federated', false, '/federated', 'icon-social', 'page_navigation.federated'],
      ['notifications', false, '/notifications', 'icon-bell', 'page_navigation.notifications'],
    ];

    return (
      <nav className='page-nav'>
        <ul className='page-nav__list'>
          { items.map(item => this.renderItem(...item)) }
        </ul>
      </nav>
    );
  }

}

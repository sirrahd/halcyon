import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

class PageNav extends React.PureComponent {

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
      ['home', true, '/', 'icon-home', 'topbar.page_nav.home'],
      ['local', false, '/local', 'icon-users', 'topbar.page_nav.local'],
      ['federated', false, '/federated', 'icon-social', 'topbar.page_nav.federated'],
      ['notifications', false, '/notifications', 'icon-bell', 'topbar.page_nav.notifications'],
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

export default PageNav;

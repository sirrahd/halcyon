import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const mapStateToProps = state => ({
  showNavigationLabels: state.getIn(['settings', 'halcyon', 'showNavigationLabels']),
});

@connect(mapStateToProps)
@withRouter
export default class PageNavigation extends React.Component {

  static propTypes = {
    location: PropTypes.object.isRequired,
    showNavigationLabels: PropTypes.bool.isRequired,
  }

  shouldComponentUpdate(nextProps) {
    if ( this.props.location !== nextProps.location ) {
      return true;
    }
    return false;
  }

  renderItem = (itemName, linkTo, iconClass, messageId) => (
    <li key={itemName} className='page-nav__list-item'>
      <NavLink exact to={linkTo} className='page-nav__navlink' activeClassName='page-nav__navlink--current'>
        <i className={`page-nav__icon ${iconClass}`} />
        <FormattedMessage id={messageId} defaultMessage={itemName} />
      </NavLink>
    </li>
  )

  render() {
    const items = [
      ['home', '/timelines/home', 'icon-home', 'page_navigation.home'],
      ['local', '/timelines/public/local', 'icon-users', 'page_navigation.local'],
      ['federated', '/timelines/public', 'icon-social', 'page_navigation.federated'],
      ['notifications', '/notifications', 'icon-bell', 'page_navigation.notifications'],
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

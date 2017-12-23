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
    if ( this.props.location.pathname !== nextProps.location.pathname ) {
      return true;
    }
    return false;
  }

  renderItem = (itemName, linkTo, iconClass, messageId) => (
    <li key={itemName} className='page-navigation__list-item'>
      <NavLink exact to={linkTo} className='page-navigation__link' activeClassName='page-navigation__link--current'>
        <i className={`page-navigation__icon ${iconClass}`} />
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
      <nav className='page-navigation'>
        <ul className='page-navigation__list'>
          { items.map(item => this.renderItem(...item)) }
        </ul>
      </nav>
    );
  }

}

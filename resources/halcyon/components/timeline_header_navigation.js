import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

export default class TimelineHeaderNavigation extends React.PureComponent {

  static propTypes = {
    id: PropTypes.string,
    location: PropTypes.object,
  }

  render () {
    const { id } = this.props;

    return (
      <div className='timeline-header-navigation'>
        <ul className='timeline-header-navigation__list'>

          <li className='timeline-header-navigation__list-item'>
            <NavLink exact to={`/accounts/${id}`} className='timline-header-navigation__link' activeClassName='timline-header-navigation__link--current'>
              <FormattedMessage id='account.toots' defaultMessage='Toots' />
            </NavLink>
          </li>

          <li className='timeline-header-navigation__list-item'>
            <NavLink exact to={`/accounts/${id}/with_replies`} className='timline-header-navigation__link' activeClassName='timline-header-navigation__link--current'>
              <FormattedMessage id='account.with_replies' defaultMessage='Toots with Replies' />
            </NavLink>
          </li>

          <li className='timeline-header-navigation__list-item'>
            <NavLink exact to={`/accounts/${id}/media`} className='timline-header-navigation__link' activeClassName='timline-header-navigation__link--current'>
              <FormattedMessage id='account.media' defaultMessage='Media' />
            </NavLink>
          </li>

        </ul>
      </div>
    );
  }

}

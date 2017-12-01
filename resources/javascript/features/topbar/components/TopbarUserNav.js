import React from 'react';
import SearchForm from '../containers/SearchForm';
import TopbarAvatarDropdown from './TopbarAvatarDropdown';
import TopbarTootButton from './TopbarTootButton';

const TopbarUserNav = () => (
  <div className="user-nav">
    <ul className="user-nav__list">

      <li className="user-nav__list-item">
        <SearchForm />
      </li>

      <li className="user-nav__list-item">
        <TopbarAvatarDropdown />
      </li>

      <li className="user-nav__list-item">
        <TopbarTootButton />
      </li>

    </ul>
  </div>
);

export default TopbarUserNav;

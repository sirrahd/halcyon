import React from 'react';
import SearchFormContainer from '../containers/search_form_container';
import UserDropdownMenuContainer from '../containers/user_dropdown_menu_container';
import TootButton from './toot_button';

const UserNav = () => (
  <div className='user-nav'>
    <ul className='user-nav__list'>

      <li className='user-nav__list-item'>
        <SearchFormContainer />
      </li>

      <li className='user-nav__list-item'>
        <UserDropdownMenuContainer />
      </li>

      <li className='user-nav__list-item'>
        <TootButton />
      </li>

    </ul>
  </div>
);

export default UserNav;

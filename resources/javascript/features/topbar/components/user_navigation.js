import React from 'react';
import SearchFormContainer from '../containers/search_form_container';
import UserDropdownMenuContainer from '../containers/user_dropdown_menu_container';
import TootButtonContainer from '../containers/toot_button_container';

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
        <TootButtonContainer />
      </li>

    </ul>
  </div>
);

export default UserNav;

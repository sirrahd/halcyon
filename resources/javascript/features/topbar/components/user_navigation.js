import React from 'react';
// import SearchFormContainer from '../containers/search_form_container';
import UserDropdownContainer from '../containers/user_dropdown_container';
import TootButtonContainer from '../../../containers/toot_button_container';

const UserNav = () => (
  <div className='user-navigation'>
    <ul className='user-navigation__list'>

      <li className='user-navigation__list-item'>
        {/* <SearchFormContainer /> */}
      </li>

      <li className='user-navigation__list-item'>
        <UserDropdownContainer />
      </li>

      <li className='user-navigation__list-item'>
        <div className='user-navigation__toot-button'>
          <TootButtonContainer />
        </div>
      </li>

    </ul>
  </div>
);

export default UserNav;

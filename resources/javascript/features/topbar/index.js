import React from 'react';

import TitleContainer from './containers/title_container';
import PageNavigation from './components/page_navigation';
import UserNavigation from './components/user_navigation';

export default class Topbar extends React.Component {

  render() {
    return (
      <header className='topbar' role='banner'>
        <div className='topbar__container unselectable'>

          <div className='topbar__item topbar__item--center'>
            <TitleContainer />
          </div>

          <div className='topbar__item topbar__item--left'>
            <PageNavigation />
          </div>

          <div className='topbar__item topbar__item--right'>
            <UserNavigation />
          </div>

        </div>
      </header>
    );
  }

}

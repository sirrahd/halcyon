import React from 'react';

import Title from './components/title';
import PageNavigation from './components/page_navigation';
import UserNavigation from './components/user_navigation';

export default class TopBar extends React.PureComponent {

  componentWillMount() {
    console.log('topbarがマウントされたよ');
  }

  componentWillUnmount() {
    console.log('topbarがアンマウントされたよ');
  }

  render() {
    return (
      <header className='topbar' role='banner'>
        <div className='topbar__container unselectable'>

          <div className='topbar__item topbar__item--center'>
            <Title />
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

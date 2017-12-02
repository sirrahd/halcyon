import React, { PureComponent } from 'react';

import Title from './components/title';
import PageNav from './components/page_nav';
import UserNav from './components/user_nav';

export default class TopBar extends PureComponent {

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
            <PageNav />
          </div>

          <div className='topbar__item topbar__item--right'>
            <UserNav />
          </div>

        </div>
      </header>
    );
  }

}

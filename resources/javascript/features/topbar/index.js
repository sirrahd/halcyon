import React, { PureComponent } from 'react';
import TopbarTitle from '../components/TopbarTitle';
import TopbarPageNav from '../components/TopbarPageNav';
import TopbarUserNav from '../components/TopbarUserNav';

export default class TopBar extends PureComponent {
  componentWillMount() {
    console.log('topbarがマウントされたよ');
  }

  componentWillUnmount() {
    console.log('topbarがアンマウントされたよ');
  }

  render() {
    return (
      <header className="topbar" role="banner">
        <div className="topbar__container unselectable">

          <div className="topbar__item topbar__item--center">
            <TopbarTitle />
          </div>

          <div className="topbar__item topbar__item--left">
            <TopbarPageNav />
          </div>

          <div className="topbar__item topbar__item--right">
            <TopbarUserNav />
          </div>

        </div>
      </header>
    );
  }
}

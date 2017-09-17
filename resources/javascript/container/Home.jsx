import React from 'react';
import PropTypes from 'prop-types';
import Timeline from './Timeline';
import DashboardLeft from './DashboardLeft';
import DashboardRight from './DashboardRight';

class HomeComponent extends React.Component {
  render() {
    return(
      <main id="main" className="main main--home">
        <article className="page-container page-container--home page-container--flexbox">
          <DashboardLeft />
          <Timeline />
          <DashboardRight />
        </article>
      </main>
    );
  }
}

export default HomeComponent;

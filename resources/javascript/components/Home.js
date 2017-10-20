import React from 'react';
import Topbar from './Topbar';
import Dashborad from './Dashborad';

const Home = () => (
  <div className="app-container">
    <Topbar />
    <main className="page-container">
      <Dashborad direction="left" />
      {/* <Timeline /> */}
      <Dashborad direction="right" />
    </main>
  </div>
);

export default Home;

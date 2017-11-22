import React from 'react';
import Topbar from '../components/Topbar';
import Dashborad from '../components/Dashborad';

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

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/* separeted components */
import Timeline from '../components/Timeline';

const Home = () => (
  <main id="main" className="main main--home">
    <article className="page-container page-container--home page-container--flexbox">

      <aside className="dashboard dashboard--left">
        content
      </aside>

      <Timeline header="compose" />

      <aside className="dashboard dashboard--right">
        content
      </aside>

    </article>
  </main>
);

export default Home;

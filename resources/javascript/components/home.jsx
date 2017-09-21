import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/* separeted components */
import Timeline from '../containers/Timeline';
import Footer from './WidgetFooter';

const Home = () => (
  <main id="main" className="main main--home">
    <article className="page-container page-container--home page-container--flexbox">

      <aside className="dashboard dashboard--left">
        content
      </aside>

      <Timeline header="compose" />

      <aside className="dashboard dashboard--right">
        <Footer />
      </aside>

    </article>
  </main>
);

export default Home;

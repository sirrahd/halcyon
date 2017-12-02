import React from 'react';
import Topbar from '../topbar';

const NotFound = () => (
  <div className='app-container'>
    <Topbar />
    <main className='page-container'>
      <article className='not-found'>
        <p>404 page not found</p>
      </article>
    </main>
  </div>
);

export default NotFound;

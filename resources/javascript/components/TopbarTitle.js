import React from 'react';
import { Link } from 'react-router-dom';

const TopbarTitle = () => (
  <div className="topbar__title-wrap">
    <Link to="/">
      <div className="topbar__title">
        <h1 className="invisible">
          Halcyon
        </h1>
      </div>
    </Link>
  </div>
);

export default TopbarTitle;

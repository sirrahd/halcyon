import React from 'react';
import ReactDOM from 'react-dom';
import ready from './ready';
import Halcyon from './components/Halcyon';

ready(() => {
  const mountNode = document.getElementById('halcyon');
  const props = JSON.parse(mountNode.getAttribute('data-props'));
  ReactDOM.render(<Halcyon {...props} />, mountNode);
});

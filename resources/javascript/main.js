import React from 'react';
import ReactDOM from 'react-dom';
import Halcyon from './components/Halcyon';
import ready from './ready';
import '../stylesheet/main.scss';

ready(() => {
  const mountNode = document.getElementById('halcyon');
  const props = JSON.parse(mountNode.getAttribute('data-props'));
  ReactDOM.render(<Halcyon {...props} />, mountNode);
});

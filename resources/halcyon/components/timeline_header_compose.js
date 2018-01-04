import React from 'react';
import PropTypes from 'prop-types';
import ComposeForm from '../features/compose/containers/compose_form_container';

export default class TimelineHeaderCompose extends React.PureComponent {

  render () {
    return (
      <div className='timeline-header-compose'>
        <ComposeForm />
      </div>
    );
  }

}

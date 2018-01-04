import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePureComponent from 'react-immutable-pure-component';
import ImmutablePropTypes from 'react-immutable-proptypes';

import StatusContainer from '../containers/status_container';

export default class StatusList extends ImmutablePureComponent {

  static propTypes = {
    statusIds: ImmutablePropTypes.list.isRequired,
  }

  render () {
    const { statusIds } = this.props;

    return (
      statusIds.map(statusId => <StatusContainer id={statusId} key={statusId} />)
    );
  }

}

import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePureComponent from 'react-immutable-pure-component';
import ImmutablePropTypes from 'react-immutable-proptypes';

import StatusContainer from '../containers/status_container';
import LoadingIndicator from '../components/loading_indicator';

export default class StatusList extends ImmutablePureComponent {

  static propTypes = {
    statusIds: ImmutablePropTypes.list.isRequired,
  }

  render () {
    const { statusIds } = this.props;

    if (!statusIds.size) {
      return <LoadingIndicator />;
    }

    return (
      statusIds.map(statusId => <StatusContainer id={statusId} key={statusId} />)
    );
  }

}

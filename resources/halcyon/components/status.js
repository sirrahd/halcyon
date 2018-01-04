import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePureComponent from 'react-immutable-pure-component';
import ImmutablePropTypes from 'react-immutable-proptypes';

import Avatar from '../containers/avatar_container';
import StatusContent from './status_content';
import StatusActionBar from './status_action_bar';

export default class Status extends ImmutablePureComponent {

  static propTypes = {
    status: ImmutablePropTypes.map,
  }

  render () {
    const { status } = this.props;

    if (!status) {
      return null;
    }

    return (
      <article className='status'>
        <Avatar account={status.get('account')} />
        <StatusContent status={status} />
        <StatusActionBar status={status} />
      </article>
    );
  }

}

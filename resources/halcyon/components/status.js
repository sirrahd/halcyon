import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePureComponent from 'react-immutable-pure-component';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Link } from 'react-router-dom';

import Avatar from '../containers/avatar_container';
import Acct from '../containers/acct_container';
import DisplayName from '../components/display_name';
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
        <div className='status__wrapper'>
          <div className='status__info'>
            <Link to={`/accounts/${status.getIn(['account', 'id'])}`}>
              <Avatar account={status.get('account')} size={48} />
              <DisplayName account={status.get('account')} />
              <Acct account={status.get('account')} />
            </Link>
          </div>

          <StatusContent status={status} />
          <StatusActionBar status={status} />
        </div>
      </article>
    );
  }

}

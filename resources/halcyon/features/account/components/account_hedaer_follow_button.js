import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';
import FollowButton from '../../../components';

export default class AccountHeaderFollowButton extends ImmutablePureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map,
  }

  render () {
    return (
      <div className='account-header-follow-button' />
    );
  }

}

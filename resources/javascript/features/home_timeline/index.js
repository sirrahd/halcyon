import React from 'react';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';
import Dashborad from '../app/components/dashboard';
import ProfileCard from '../profile_card';
import { me } from '../../initial_state';

const mapStateToProps = state => ({
  me: state.getIn(['accounts', me]),
  me_counters: state.getIn(['accounts_counters', me]),
});

@connect(mapStateToProps)
export default class HomeTimeline extends ImmutablePureComponent {

  static propTypes = {
    me: ImmutablePropTypes.map,
  }

  render() {
    const { me, me_counters } = this.props;

    return (
      <main className='page-container'>
        <Dashborad direction='left'>
          <ProfileCard account={me} account_counters={me_counters} hideNote />
        </Dashborad>

        <Dashborad direction='right' />
      </main>
    );
  }

}

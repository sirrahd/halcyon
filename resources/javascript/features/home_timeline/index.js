import React from 'react';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';
import Dashborad from '../dashboard';
import ProfileCard from '../profile_card';
import { me } from '../../initial_state';

const mapStateToProps = state => ({
  me: state.getIn(['accounts', me]),
});

@connect(mapStateToProps)
export default class HomeTimeline extends ImmutablePureComponent {

  static propTypes = {
    me: ImmutablePropTypes.map,
  }

  render() {
    const { me } = this.props;

    return (
      <main className='page-container'>
        <Dashborad direction='left'>
          <ProfileCard account={me} hideNote />
        </Dashborad>

        <Dashborad direction='right' />
      </main>
    );
  }

}

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';
import Dashborad from '../dashborad';
import ProfileCard from '../profile_card';
import { me } from '../../initial_state';
import AppContainer from '../app';

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
      <AppContainer>
        <main className='page-container'>
          <Dashborad direction='left'>
            <ProfileCard account={me} hideNote />
          </Dashborad>

          <Dashborad direction='right'>
            みぎ
          </Dashborad>
        </main>
      </AppContainer>
    );
  }

}

import React from 'react';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';
import { makeGetAccount } from '../../selectors';

import Page from '../app/components/page';
import Content from '../app/components/content';
import Dashborad from '../app/components/dashboard';
import ProfileCard from '../profile_card';
import { me } from '../../initial_state';

const makeMapStateToProps = () => {
  const getAccount = makeGetAccount();

  const mapStateToProps = state => ({
    me: getAccount(state, me),
  });

  return mapStateToProps;
};

@connect(makeMapStateToProps)
export default class HomeTimeline extends ImmutablePureComponent {

  static propTypes = {
    me: ImmutablePropTypes.map,
  }

  render() {
    const { me } = this.props;

    return (
      <Page>
        <Content>

          <Dashborad position='left'>
            <ProfileCard account={me} hideNote />
          </Dashborad>

          <Dashborad position='right' />

        </Content>
      </Page>
    );
  }

}

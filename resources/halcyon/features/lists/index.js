import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';
import { Link } from 'react-router-dom';
import { createSelector } from 'reselect';
import { fetchLists } from '../../actions/lists';
import { me } from '../../initial_state';

import Page from '../app/components/page';
import Content from '../app/components/content';
import Dashborad from '../app/components/dashboard';
import ProfileCard from '../../containers/profile_card_container';
import RecommendedAccounts from '../../containers/recommended_accounts_container';

const getOrderedLists = createSelector([state => state.get('lists')], lists => {
  if (!lists) {
    return lists;
  }

  return lists.toList().filter(item => !!item).sort((a, b) => a.get('title').localeCompare(b.get('title')));
});

const mapStateToProps = state => ({
  lists: getOrderedLists(state),
});

@connect(mapStateToProps)
export default class Lists extends ImmutablePureComponent {

  componentWillMount () {
    this.props.dispatch(fetchLists());
  }

  render () {
    const { lists } = this.props;

    return (
      <Page>
        <Content>
          <Dashborad position='left'>
            <ProfileCard accountId={me} withCounters />
          </Dashborad>

          <div>
            {lists.map(list => (
              <Link to={`/timelines/list/${list.get('id')}`}>
                { list.get('title') }
              </Link>
            ))}
          </div>

          <Dashborad position='right'>
            <RecommendedAccounts />
          </Dashborad>
        </Content>
      </Page>
    );
  }

}

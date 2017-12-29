import React from 'react';
import PropTypes from 'prop-types';

import Page from '../app/components/page';
import Content from '../app/components/content';
import Dashborad from '../app/components/dashboard';
import ComposeFormContainer from '../compose/containers/compose_form_container';

export default class Share extends React.PureComponent {

  componentWillMount () {
    // dispatch ?text query to the store
  }

  render () {
    return (
      <Page>
        <Content>
          <Dashborad position='left' />

          <div>
            <ComposeFormContainer />
          </div>

          <Dashborad position='right' />
        </Content>
      </Page>
    );
  }

}

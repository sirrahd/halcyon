import React from 'react';
import PropTypes from 'prop-types';

import Page from '../app/components/page';
import Content from '../app/components/content';
import Dashborad from '../app/components/dashboard';
import ComposeForm from '../compose_form';

export default class Share extends React.PureComponent {

  render () {
    return (
      <Page>
        <Content>
          <Dashborad position='left' />

          <div>
            <ComposeForm />
          </div>

          <Dashborad position='right' />
        </Content>
      </Page>
    );
  }

}

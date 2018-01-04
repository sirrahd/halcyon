import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeCompose } from '../../actions/compose';
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router-dom';
import querystring from 'querystring';

import Page from '../app/components/page';
import Content from '../app/components/content';
import ComposeFormContainer from '../compose/containers/compose_form_container';

const mapDispatchToProps = dispatch => ({
  onMount(text) {
    dispatch(changeCompose(text));
  },
});

@connect(null, mapDispatchToProps)
@withRouter
export default class Share extends React.PureComponent {

  static propTypes = {
    location: PropTypes.object.isRequired,
    onMount: PropTypes.func.isRequired,
  }

  componentWillMount () {
    const text = querystring.decode(this.props.location.search.substr(1)).text || '';
    this.props.onMount(text);
  }

  render () {
    return (
      <Page>
        <Content>
          <div className='share'>
            <h3 className='share__title'>
              <FormattedMessage id='share.title' defaultMessage='Share link to your followers' />
            </h3>

            <ComposeFormContainer />
          </div>
        </Content>
      </Page>
    );
  }

}

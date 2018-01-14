import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  verifyInstance,
  verifyResponse,
} from '../../actions/login';
import querystring from 'querystring';

import Page from '../app/components/page';
import Content from '../app/components/content';

const mapStateToProps = state => ({
  authorizationUri: state.getIn(['login', 'authorization_uri']),
  isVerifyingInstance: state.getIn(['login', 'is_verifying_instance']),
  isVerifyingResponse: state.getIn(['login', 'is_verifying_response']),
});

const mapDispatchToProps = dispatch => ({
  onVerifyInstance (instance_domain) {
    dispatch(verifyInstance(instance_domain));
  },

  onVerifyResponse (code, instance_domain) {
    dispatch(verifyResponse(code, instance_domain));
  },
});

@connect(mapStateToProps, mapDispatchToProps)
@withRouter
export default class Login extends React.PureComponent {

  static propTypes = {
    location: PropTypes.object.isRequired,
    authorizationUri: PropTypes.string,
    isVerifyingInstance: PropTypes.bool.isRequired,
    isVerifyingResponse: PropTypes.bool.isRequired,
    onVerifyInstance: PropTypes.func.isRequired,
    onVerifyResponse: PropTypes.func.isRequired,
  }

  componentDidMount () {
    const { code, instance_domain } = querystring.decode(this.props.location.search.substr(1));

    if ( code && instance_domain ) {
      this.props.onVerifyResponse(code, instance_domain);
    }
  }

  componentWillReceiveProps(nextProps) {
    if ( !this.props.authorizationUri && nextProps.authorizationUri && this.props.isVerifyingInstance && !nextProps.isVerifyingInstance ) {
      window.location.href = nextProps.authorizationUri;
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const value = this.input.value.split('@')[2];
    this.props.onVerifyInstance(value);
  }

  setRef = c => {
    this.input = c;
  }

  render () {
    const { isVerifyingInstance } = this.props;

    return (
      <Page>
        <Content>
          <form onSubmit={this.handleSubmit} >
            <input type='text' className='default-css' ref={this.setRef} />
            <input type='submit' className='generic-button' disabled={isVerifyingInstance} />
          </form>
        </Content>
      </Page>
    );
  }

}

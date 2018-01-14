import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  verifyInstance,
  verifyResponse,
} from '../../actions/login';
import querystring from 'querystring';
import {
  INITIAL_STATE_KEY,
  DEFAULT_INITIAL_STATE,
} from '../../constants';

import Page from '../app/components/page';
import Content from '../app/components/content';

const mapStateToProps = state => ({
  credentials: state.getIn(['login', 'credentials']),
  authorizationUri: state.getIn(['login', 'authorization_uri']),
  isVerifyingInstance: state.getIn(['login', 'is_verifying_instance']),
  isVerifyingResponse: state.getIn(['login', 'is_verifying_response']),
});

const mapDispatchToProps = dispatch => ({
  onVerifyInstance (instance_domain) {
    dispatch(verifyInstance(instance_domain));
  },

  onVerifyResponse (instance_domain, code) {
    dispatch(verifyResponse(instance_domain, code));
  },
});

@connect(mapStateToProps, mapDispatchToProps)
@withRouter
export default class Login extends React.PureComponent {

  static propTypes = {
    location: PropTypes.object.isRequired,
    credentials: PropTypes.object,
    authorizationUri: PropTypes.string,
    isVerifyingInstance: PropTypes.bool.isRequired,
    isVerifyingResponse: PropTypes.bool.isRequired,
    onVerifyInstance: PropTypes.func.isRequired,
    onVerifyResponse: PropTypes.func.isRequired,
  }

  componentDidMount () {
    const { instance_domain, code } = querystring.decode(this.props.location.search.substr(1));

    if ( instance_domain && code ) {
      this.props.onVerifyResponse(instance_domain, code);
    }
  }

  componentWillReceiveProps (nextProps) {
    if ( !this.props.authorizationUri && nextProps.authorizationUri && this.props.isVerifyingInstance && !nextProps.isVerifyingInstance ) {
      window.location.href = nextProps.authorizationUri;
    }

    if ( !this.props.credentials && nextProps.credentials && this.props.isVerifyingResponse && !nextProps.isVerifyingResponse ) {
      this.setInitialState(nextProps.credentials);
      window.location.href = '/timeline/home';
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const value = this.input.value.split('@')[2];
    this.props.onVerifyInstance(value);
  }

  setInitialState = credentials => {
    const initialState = Object.assign(
      DEFAULT_INITIAL_STATE,
      {
        meta: {
          streaming_api_base_url: `wss://${credentials.instance_domain}`,
          access_token: credentials.access_token,
          domain: credentials.instance_domain,
        },
      },
    );

    window.localStorage.setItem(INITIAL_STATE_KEY, JSON.stringify(initialState));
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

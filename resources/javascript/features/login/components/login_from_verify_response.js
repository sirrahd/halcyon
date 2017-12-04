import React from 'react';
import PropTypes from 'prop-types';
import QueryString from 'querystring';
import { Link } from 'react-router-dom';
import { intlShape, injectIntl, defineMessages } from 'react-intl';
import halcyon from '../../../api/halcyon';
import mastodon from '../../../api/mastodon';

const messages = defineMessages({
  fetching_access_token: { id: 'login.login_from_verify_response.fetching_access_token', defaultMessage: 'Fetching access token' },
  verifying_credentials: { id: 'login.login_from_verify_response.verifying_credentials', defaultMessage: 'Verifying credentials' },
});

@injectIntl
export default class LoginFormVerifyResponse extends React.PureComponent {

  static propTypes = {
    intl: intlShape.isRequired,
  }

  state = {
    message: '',
  }

  componentDidMount() {
    const {
      code,
      instance_domain,
      error,
    } = QueryString.parse(window.location.search.substr(1));

    const { intl } = this.props;

    if ( !error ) {
      this.setState({ message: intl.formatMessage( messages.fetching_access_token ) });
      halcyon().post('/api/login/verify_response', { code, instance_domain }).then(response => {
        const { access_token } = response.data;

        this.setState({ message: intl.formatMessage( messages.verifying_credentials ) });
        mastodon().get('/api/v1/accounts/verify_credentials').then(response => {
          const {
            id,
          } = response.data;

          const initialState = {

            meta: {
              streaming_api_base_url: `wss://${instance_domain}`,
              access_token,
              locale: JSON.parse(document.getElementById('halcyon').getAttribute('data-props')).lang,
              domain: instance_domain,
              me: id,
              unfollow_modal: false,
              boost_modal: false,
              delete_modal: true,
              auto_play_gif: false,
              reduce_motion: false,
            },

            compose: {
              me: id,
              default_privacy: 'public',
              default_sensitive: false,
            },

            accounts: {

            },


          };

          console.log(initialState);
        });
      });
    }
  }

  render() {
    const { message } = this.state;

    return (
      <section className='login-form-contaienr'>
        <h2 className='login-form-contaienr__title'>
          {message}
        </h2>
      </section>
    );
  }

}

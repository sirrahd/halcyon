import React from 'react';
import QueryString from 'querystring';
import { FormattedMessage } from 'react-intl';
import api from '../../../api/halcyon';

export default class LoginFormVerifyResponse extends React.PureComponent {

  state = {
    doneFetchAccessToken: false,
  }

  componentDidMount() {
    const { code, instance_domain } = QueryString.parse(window.location.search.substr(1));

    api().post('/api/login/verify_response', { code, instance_domain }).then((response) => {
      console.log(response.data.access_token);
    });
  }

  render() {
    return (
      <section className='login-form-contaienr'>
        <h2 className='login-form-contaienr__title'>
          <FormattedMessage id='login.login_form.verify' defaultMessage='Verifying credentials' />
        </h2>

        <div>
          <i className='fa fa-circle-o-notch fa-spin' />
        </div>
      </section>
    );
  }

}

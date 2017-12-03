import React from 'react';
import { FormattedMessage } from 'react-intl';
import api from '../../../api/halcyon';

export default class LoginForm extends React.PureComponent {

  state = {
    requesting: false,
  }

  setRef = (c) => {
    this.input = c;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.input.value) {
      this.setState({ requesting: true });
      api().post('/api/login/verify_instance', { acct: this.input.value }).then((response) => {
        location.href = response.data.verified_instance.authorization_uri;
      });
    } else {
      return;
    }
  }

  render() {
    const sendingClass = this.state.requesting ? 'login-form__submit--sending unsubmittable' : '';

    return (
      <section className='login-form-contaienr'>

        <h2 className='login-form-contaienr__title'>
          <FormattedMessage id='login.login_form.title' defaultMessage='Login to Halcton' />
        </h2>

        <form
          className='login-form'
          onSubmit={this.handleSubmit}
        >
          <input
            className='login-form__input'
            type='text'
            spellCheck='false'
            placeholder='@halcyon@mastodon.social'
            pattern='@[a-zA-Z0-9_]{1,30}@.+?\\..+?'
            ref={this.setRef}
          />

          <button className={`login-form__submit ${sendingClass}`}>
            { this.state.requesting ? <i className='fa fa-circle-o-notch fa-spin' /> : <FormattedMessage id='login.login_form.submit' defaultMessage='Login' /> }
          </button>
        </form>

        <a className='login-form-contaienr__create-account' href='https://joinmastodon.org' target='_blank'>
          <FormattedMessage id='login.login_form.create-account' defaultMessage='or create an account' />
        </a>

      </section>
    );
  }

}

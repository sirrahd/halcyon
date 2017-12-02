import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import api from '../../../api/halcyon';
import { ACCT_REGEXP } from '../../../constants';

export default class LoginForm extends React.PureComponent {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  setRef = (c) => {
    this.input = c;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.input.value) {
      api().post('/api/login/verify_instance', { acct: this.input.value }).then((response) => {
        location.href = response.data.verified_instance.authorization_uri;
      });
    }
  }

  render() {
    return (
      <section className='login-form'>
        <form
          onSubmit={this.handleSubmit}
        >

          <h2 className='login-form__title'>
            <FormattedMessage id='login.login_form.title' defaultMessage='Login to Halcton' />
          </h2>

          <input
            className='login-form__input'
            type='text'
            spellCheck='false'
            placeholder='@halcyon@mastodon.social'
            pattern={ACCT_REGEXP}
            ref={this.setRef}
          />

          <button className='login-form__submit'>
            <FormattedMessage id='login.login_form.submit' defaultMessage='Login' />
          </button>

        </form>
      </section>
    );
  }

}

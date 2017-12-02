import React from 'react';
import PropTypes from 'prop-types';
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

          <h2>Login to Halcyon</h2>

          <input
            className='login-form__input'
            type='text'
            spellCheck='false'
            placeholder='@halcyon@mastodon.social'
            pattern={ACCT_REGEXP}
            ref={this.setRef}
          />

          <button className='login-form__submit'>
            ボタンです
          </button>

        </form>
      </section>
    );
  }

}

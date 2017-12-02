import React from 'react';

export default class LoginForm extends React.PureComponent {

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.input.value) {

    }
  }

  render() {
    return (
      <section className='login-form'>
        <form>

          <h2>Login to Halcyon</h2>

          <input
            className='login-form__input'
            type='text'
            spellCheck='false'
            placeholder='@halcyon@mastodon.social'
            pattern='@[a-zA-Z0-9_]{1,30}@.+?\..+?'
          />

          <button className='login-form__submit'>
            ボタンです
          </button>

        </form>
      </section>
    );
  }

}

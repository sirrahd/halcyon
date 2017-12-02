import React from 'react';
import Topbar from '../topbar';
import LoginFormContainer from './containers/login_form_container';
// import WizardContainer from './containers/wizard_container';

const Login = () => (
  <div className='app-container'>
    <Topbar />

    <main className='page-container'>
      <article className='login'>
        <LoginFormContainer />
      </article>
    </main>

  </div>
);

export default Login;

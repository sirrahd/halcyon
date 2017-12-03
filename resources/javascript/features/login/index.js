import React from 'react';
import Topbar from '../topbar';
import LoginForm from './components/login_form';
import LoginFormFooter from './components/login_from_footer';

const Login = () => (
  <div className='app-container'>
    <Topbar />

    <main className='page-container login-page'>
      <LoginForm />
      <LoginFormFooter />
    </main>

  </div>
);

export default Login;

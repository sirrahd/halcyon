import React from 'react';
import { Route, Switch } from 'react-router';
import Topbar from '../topbar';

import LoginForm from './components/login_form';
import LoginFormVerifyResponse from './components/login_from_verify_response';
import LoginFormFooter from './components/login_from_footer';

const Login = () => (
  <div className='app-container'>
    <Topbar />

    <main className='page-container login-page'>
      <Switch>
        <Route exact path='/login/verify_response' component={LoginFormVerifyResponse} />
        <Route exact path='/login' component={LoginForm} />
      </Switch>
      <LoginFormFooter />
    </main>
  </div>
);

export default Login;

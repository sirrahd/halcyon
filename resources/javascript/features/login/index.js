import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import AppContainer from '../app';

import LoginForm from './components/login_form';
import LoginFormVerifyResponse from './components/login_from_verify_response';
import LoginFormFooter from './components/login_from_footer';

const Login = () => (
  <AppContainer>
    <main className='page-container'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/login/verify_response' component={LoginFormVerifyResponse} />
          <Route path='/login' component={LoginForm} />
        </Switch>
      </BrowserRouter>

      <LoginFormFooter />
    </main>
  </AppContainer>
);

export default Login;

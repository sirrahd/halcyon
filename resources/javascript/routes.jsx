import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import HomeComponent from './components/Home';

// <Route path="/local" component={LocalComponent}/>
// <Route path="/federated" component={FederatedComponent}/>
// <Route path="/notifications" component={NotificationsComponent}/>
// <Route path="/search" component={SearchComponent}/>
// <Route path="/user(^@[a-zA-Z0-9_]{1,30}@(.+?)\.(.+?)$)" component={ProfileComponent}/>
// <Route path="/login" component={LoginComponent}/>

export default function defineRoutes() {
  const history = createBrowserHistory();
  const AppComponent = () => (
    <Router history={history}>
      <div>
        <Route exact path="/" component={HomeComponent} />
      </div>
    </Router>
  );

  render(
    <AppComponent />,
    document.getElementById('app'),
  );
}


import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { DefaultRoute, Link, Route, RouteHandler,IndexRoute } from 'react-router';
import thunk from 'redux-thunk';
import Router from 'react-router';  
import createBrowserHistory from 'history/lib/createBrowserHistory';
const history = createBrowserHistory();
import userLoginApp from './reducers/reducers.js';
import Navbar from './components/navbar.js';
// import LoginForm from './components/loginForm.js';
import LoginPage from './components/loginPage.js';
import LandingPage from './components/landingPage.js';
import ProfilePage from './components/profilePage.js';
// import CreateAccountForm from './components/createAccountForm.js';
import CreateAccountPage from './components/createAccountPage.js';
import ChatPage from './components/chatPage.js';



let createStoreWithMiddleware = applyMiddleware(
  thunk
  )(createStore);

let store = createStoreWithMiddleware(userLoginApp);

let rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Navbar}>
        <IndexRoute component={LandingPage}/>
        <Route path="createaccount" component={CreateAccountPage}/>
        <Route path="login" component={LoginPage}/>
        <Route path="profile" component={ProfilePage}/>
        <Route path="chat" component={ChatPage}/>
      </Route>
    </Router>
  </Provider>,
  rootElement
);

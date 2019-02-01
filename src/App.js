import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyle } from './style';
import { Iconfont } from "./statics/iconfont/iconfont";
import store from './store';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import UserProtocol from './pages/register/components/useServiceProtocol';
import PrivacyPolicy from './pages/register/components/privacyPolicy';

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle/>
        <Iconfont/>
        <BrowserRouter>
          <div>
            <Route
              path="/login"
              exact
              component={Login}
            >
            </Route>
            <Route
              path="/register"
              exact
              component={Register}
            >
            </Route>
            <Route
              path="/register/userProtocol"
              exact
              component={UserProtocol}
            >
            </Route>
            <Route
              path="/register/privacyPolicy"
              exact
              component={PrivacyPolicy}
            >
            </Route>
            <Route
              path="/"
              exact
              component={Home}
            >
            </Route>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;

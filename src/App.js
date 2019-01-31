import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyle } from './style';
import store from './store';
import Login from './pages/login';
import Register from './pages/register';
import UserProtocol from './pages/register/components/useServiceProtocol';

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle/>
        <BrowserRouter>
          <div>
            <Route
              path="/"
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
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;

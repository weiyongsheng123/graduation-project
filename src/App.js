import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyle } from './style';
import { Iconfont } from "./statics/iconfont/iconfont";
import 'antd/dist/antd.css';
import store from './store';
import Login from './pages/login/loadable';
import Register from './pages/register/loadable';
import Home from './pages/home/loadable';
import Resume from './pages/resume/loadable';
import Company from './pages/company/loadable';
import Search from './pages/search/loadable';
import Positions from './pages/positions/loadable';
import Help from './pages/help/loadable';
import Feedback from './pages/feedback/loadable';
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
            <Route
              path="/resume"
              exact
              component={Resume}
            >
            </Route>
            <Route
              path="/company"
              exact
              component={Company}
            >
            </Route>
            <Route
              path="/search"
              exact
              component={Search}
            >
            </Route>
            <Route
              path="/positions/:Id"
              exact
              component={Positions}
            >
            </Route>
            <Route
              path="/help"
              exact
              component={Help}
            >
            </Route>
            <Route
              path="/feedback"
              exact
              component={Feedback}
            >
            </Route>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;

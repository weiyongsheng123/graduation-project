import React, { PureComponent } from 'react';
import Header from '../../common/header';
import Show from './components/show';
import LoginInput from './components/loginInput';
import Telephone from './components/telephone';
import { LoginWrapper } from './style';

class Login extends PureComponent {

  render () {
    return (
      <LoginWrapper>
        <Header/>
        <Show/>
        <LoginInput/>
        <Telephone/>
      </LoginWrapper>
    )
  }
};

export default Login;
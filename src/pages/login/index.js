import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Header from '../../common/header';
import Ajax from '../../common/ajax';
import Show from './components/show';
import LoginInput from './components/loginInput';
import Telephone from './components/telephone';
import { LoginWrapper } from './style';
import { changeApplicantRegiste, changeCompanyRegiste } from '../register/store/actionCreators';

class Login extends PureComponent {

  render () {
    return (
      <LoginWrapper>
        <Header/>
        <Show/>
        <LoginInput/>
        <Telephone/>
        <Ajax/>
      </LoginWrapper>
    )
  }
  componentDidMount () {
    this.props.revise();
  }
};

const mapDispatch= (dispatch) => {
  return {
    revise () {
      dispatch(changeApplicantRegiste(false));
      dispatch(changeCompanyRegiste(false));
    }
  }
}

export default connect(null,mapDispatch)(Login);

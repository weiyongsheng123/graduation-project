import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Header from '../../common/header';
import Ajax from '../../common/ajax';
import Advertbackground from './components/advertBackground';
import RegisterApplicant from './components/registerApplicant';
import RegisterCompany from './components/registerCompany';
import { RegisterWrapper } from './style';

class Register extends PureComponent {

  render () {
    console.log("bbb");
    const { pattern } = this.props;
    let register = null;
    if(pattern==='求职者端'){
      register = <RegisterApplicant/>
    }
    else {
      register = <RegisterCompany/>
    }
    return (
      <RegisterWrapper>
        <Header/>
        <Advertbackground/>
        {register}
        <Ajax/>
      </RegisterWrapper>
    )
  }
};

const mapState = (state) => ({
  pattern: state.getIn(['header','pattern'])
});

const mapDispatch = (dispatch) => {
  return {
    
  }
}

export default connect(mapState,mapDispatch)(Register);

import React, { PureComponent } from 'react';
import { CompanyWrapper, CompanyContent } from './style';
import { connect } from 'react-redux';
import Head from '../../common/head';
import Suspension from '../../common/suspension';
import Ajax from '../../common/ajax';
import CompanyDesc from './components/companyDesc';
import CompanyIssue from './components/issueResume';
import CompanyReserive from './components/reseriveResume';
import AddNewResume from './components/addNewResume';
import { CSSTransition } from 'react-transition-group';

class Company extends PureComponent {

  render () {
    const { newResumeShow } = this.props;
    return (
      <CompanyWrapper>
        <Head/>
        <CompanyDesc/>
        <CompanyContent >
          <CompanyIssue/>
          <CompanyReserive/>
        </CompanyContent>
        <CSSTransition
          in={ newResumeShow }
          timeout={1000}
          classNames='fade'
          unmountOnExit
          >
            <AddNewResume/>
          </CSSTransition>
        <Suspension/>
        <Ajax/>
      </CompanyWrapper>
    )
  }
  componentDidMount () {
    window.scrollTo( 0, 0);
  }
};

const mapState = (state) => ({
  newResumeShow: state.getIn(['company','newResumeShow'])
});

const mapDispatch = (dispatch) => {
  return {
   
  }
};

export default connect(mapState,mapDispatch)(Company);

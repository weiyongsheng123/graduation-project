import React, { PureComponent } from 'react';
import { CompanyWrapper } from './style';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Head from '../../common/head';
import Suspension from '../../common/suspension';
import Ajax from '../../common/ajax';
import CompanyDesc from './components/companyDesc';
import CompanyIssue from './components/issueResume';
import CompanyReserive from './components/reseriveResume';
import AddNewResume from './components/addNewResume';
import { CSSTransition } from 'react-transition-group';
import { jobseekShowCompany, changeRouterCompanyId } from './store/actionCreators';

class Company extends PureComponent {

  render () {
    const { newResumeShow, routerId, companyId } = this.props;
    return (
      <CompanyWrapper>
        <Head/>
        <CompanyDesc/>
        <CompanyIssue/>
        {
          routerId === companyId ? <CompanyReserive/> : null
        }
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
    const { getId, company, getRouterId } = this.props;
    let Id = this.props.match.params.Id;
    const newCompany = company.toJS();
    const len = Object.keys(newCompany).length;
    if (!len || newCompany['Id'] !== Id) {
      getId(Id);
    }
    else {
      getRouterId(Id);
    }
  }
};

const mapState = (state) => ({
  newResumeShow: state.getIn(['company','newResumeShow']),
  company: state.getIn(['login','company']),
  routerId: state.getIn(['company','routerId']),
  companyId: state.getIn(['login','companyId'])
});

const mapDispatch = (dispatch) => {
  return {
    getId (Id) {
      dispatch(jobseekShowCompany(Id));
      dispatch(changeRouterCompanyId(Id));
    },
    getRouterId (Id) {
      dispatch(changeRouterCompanyId(Id));
    }
  }
};

export default connect(mapState,mapDispatch)(withRouter(Company));

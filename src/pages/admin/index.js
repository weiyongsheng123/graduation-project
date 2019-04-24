import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { AdminWrapper } from './style';
import Ajax from '../../common/ajax';
import AdminHeader from './components/header';
import AdminJobseeker from './components/jobseeker';
import AdminCompany from './components/company';
import AdminResumeItem from './components/resumeitem';
import AdminApply from './components/apply';
import AdminSuggest from './components/suggest';
import { Redirect } from 'react-router-dom';
import {  } from './store/actionCreators';

class Admin extends PureComponent {

  render () {
    const { loginState, option } = this.props;
    let redirect = null;
    if (!loginState) {
      redirect = <Redirect to="/adminLogin"></Redirect>;
    }
    let tableShow = null;
    switch (option) {
        case '求职者':
          tableShow = <AdminJobseeker />;break;
        case '企业':
          tableShow = <AdminCompany />;break;
        case '已发布职位':
          tableShow = <AdminResumeItem />;break;
        case '职位申请':
          tableShow = <AdminApply />;break;
        case '建议反馈':
          tableShow = <AdminSuggest />;break;
        default:
          break;
    }
    return (
      <AdminWrapper>
        <AdminHeader />
        { tableShow }
        { redirect }
        <Ajax />
      </AdminWrapper>
    )
  }
};

const mapState = (state) => ({
  loginState: state.getIn(['admin','loginState']),
  option: state.getIn(['admin','option'])
});

const mapDispatch = (dispatch) => {
 return {
   
 }
}

export default connect(mapState,mapDispatch)(Admin);

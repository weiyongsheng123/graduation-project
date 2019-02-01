import React, { PureComponent } from 'react';
import { HeadWrapper, CityChange, RecruitInfo, CompanyServer, PersonCenter, RegisterLogin, TelephoneContact } from './style';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Head extends PureComponent {

  render () {
   const { pattern } = this.props;
   let choice = null;
   if (pattern === '求职者端') {
     choice = <PersonCenter>个人中心</PersonCenter>;
   }
   else {
     choice = <CompanyServer>企业服务</CompanyServer>;
   }
    return (
     <HeadWrapper>
       <CityChange><i className="iconfont">&#xe62e;</i>城市求职</CityChange>
       <TelephoneContact>300-154-564</TelephoneContact>
       <RegisterLogin><Link to="/login">登录</Link>|<Link to="/register">注册</Link></RegisterLogin>
       { choice }
       <RecruitInfo>招聘信息</RecruitInfo>
     </HeadWrapper>
    )
  };
};

const mapState = (state) => ({
  pattern: state.getIn(['header','pattern'])
});

export default connect(mapState,null)(Head);

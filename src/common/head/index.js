import React, { PureComponent } from 'react';
import { HeadWrapper, BackHome, CityChange, CityChoose, RecruitInfo, CompanyServer, PersonCenter, RegisterLogin, HeadHelp, TelephoneContact, HeadQuit } from './style';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeShow, changeCity } from './store/actionCreators';
import { clearAndQuit, openAutoRemeber, checkAccount } from "../../pages/login/store/actionCreators";
import { clearAndQuitCompany } from "../../pages/company/store/actionCreators";
import { clearAndQuitJobseek } from "../../pages/resume/store/actionCreators";
import { getAreaSalaryExperience, getPosition } from "../../pages/home/store/actionCreators";
import { changeHeaderPattern } from '../header/store/actionCreators';
import { jobseekShowCompany, changeRouterCompanyId, getReleaseResume } from '../../pages/company/store/actionCreators';

class Head extends PureComponent {
  constructor (props) {
    super(props);
    this.quitLogin = this.quitLogin.bind(this);
    this.reloadOwn = this.reloadOwn.bind(this);
  }
  
  render () {
    const { pattern, isShow, nowCity, loginOrNot, phoneNumber, areaList, showCityList, setCity, companyId, jobseekId } = this.props;
    let choice = null;
    let loginRegister = null;
    if (loginOrNot) {
      loginRegister = <Link to="/"><HeadQuit onClick={this.quitLogin}>登出</HeadQuit></Link>;
      if (pattern === '求职者端') {
        choice = <Link to={"/resume/"+jobseekId}><PersonCenter>个人中心</PersonCenter></Link>;
      }
      else {
        choice = <Link to={"/company/"+companyId}><CompanyServer onClick={this.reloadOwn}>企业服务</CompanyServer></Link>;
      }
    }
    else {
      loginRegister = <RegisterLogin><Link to="/login">登录</Link>&nbsp;|&nbsp;<Link to="/register">注册</Link></RegisterLogin>;
      choice = null;
   }
   const alist = areaList.toJS();
    return (
     <HeadWrapper>
       <Link to="/">
         <BackHome>首页</BackHome>
       </Link>
       <CityChange onMouseOver={()=>{showCityList(true)}} onMouseLeave={()=>{showCityList(false)}}>
         <i className="iconfont">&#xe62e;</i>
         <span>{ nowCity }</span>
         { 
           isShow ? <CityChoose>
                      <div className="triangle"></div>
                      <p className="city_name">安徽省</p>
                      <ul>
                        {
                          alist.map((item)=>{
                            return (
                              <li onClick={(e)=>{setCity(false,e)}} key={item}>{item}</li>
                            )
                          })
                        }
                      </ul>
                    </CityChoose> : null
         }
       </CityChange>
       <TelephoneContact>{ phoneNumber }</TelephoneContact>
       <Link to="/help"><HeadHelp>帮助中心</HeadHelp></Link>
       { loginRegister }
       { choice }
       <Link to="/search">
         <RecruitInfo>招聘信息</RecruitInfo>
       </Link>
     </HeadWrapper>
    )
  };
  reloadOwn () {
    const { getId, company, companyId } = this.props;
    const newCompany = company.toJS();
    const len = Object.keys(newCompany).length;
    if (!len || newCompany['Id'] !== companyId) {
      getId(companyId);
    }
  };
  quitLogin () {
    this.props.quitAccount();
  };
  componentDidMount () {
    const { loginOrNot, autoLogin, openAuto, getAreaSalaryExperienceList, getPositionList, positionList, areaList } = this.props;
    var storage=window.localStorage;
    if (!loginOrNot && storage["peiqiAccount"] && openAuto) {
      const accountInfo = JSON.parse(storage["peiqiAccount"]);
      autoLogin(accountInfo,accountInfo['pattern']);
    }
    let existPlist = positionList.toJS();
    let existAlist = areaList.toJS();
    if (!existPlist.length || !existAlist.length) {
      getAreaSalaryExperienceList();
      getPositionList();
    }
  };
};

const mapState = (state) => ({
  pattern: state.getIn(['header','pattern']),
  isShow: state.getIn(['head','cityListShow']),
  nowCity: state.getIn(['head','nowCity']),
  loginOrNot: state.getIn(['login','loginOrNot']),
  phoneNumber: state.getIn(['login','telephonenumber']),
  areaList: state.getIn(['home','areaList']),
  openAuto: state.getIn(['login','openAuto']),
  companyId: state.getIn(['login','companyId']),
  jobseekId: state.getIn(['login','jobseekId']),
  positionList: state.getIn(['home','positionList']),
  company: state.getIn(['login','company'])
});

const mapDispatch = (dispatch) => {
  return {
    showCityList (show) {
      dispatch(changeShow(show));
    },
    setCity (show,e) {
      dispatch(changeShow(show));
      dispatch(changeCity(e.target.innerHTML));
    },
    quitAccount () {
      dispatch(clearAndQuit());
      dispatch(clearAndQuitCompany());
      dispatch(clearAndQuitJobseek());
      dispatch(openAutoRemeber(false));
    },
    autoLogin (values,pattern) {
      dispatch(changeHeaderPattern(pattern));
      dispatch(checkAccount(values,pattern));
    },
    getAreaSalaryExperienceList () {
      dispatch(getAreaSalaryExperience());
    },
    getPositionList () {
      dispatch(getPosition());
    },
    getId (Id) {
      dispatch(jobseekShowCompany(Id));
      dispatch(changeRouterCompanyId(Id));
      dispatch(getReleaseResume(Id));
    }
  }
}

export default connect(mapState,mapDispatch)(Head);

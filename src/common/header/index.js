import React, { PureComponent } from 'react';
import { HeaderWrapper, HeaderImg, HeaderPattern, HeaderLogin, HeaderHelp, HeaderLine } from './style';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAreaSalaryExperience } from "../../pages/home/store/actionCreators";

class Header extends PureComponent {

  render () {
    const { pattern } = this.props;
    return (
     <HeaderWrapper>
       <HeaderImg src="./files/image/logo1.png"/>
       <HeaderLine className="left">|</HeaderLine>
       <HeaderPattern>{pattern}</HeaderPattern>
       <Link to="/help"><HeaderHelp>帮助中心</HeaderHelp></Link>
       <HeaderLine className="right">&nbsp;&nbsp;&nbsp;</HeaderLine>
       <Link to="/"><HeaderLogin>首页</HeaderLogin></Link>
     </HeaderWrapper>
    )
  };
  componentDidMount () {
    const { getAreaSalaryExperienceList, areaList } = this.props;
    let existAlist = areaList.toJS();
    if (!existAlist.length) {
      getAreaSalaryExperienceList();
    }
  }
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
    getAreaSalaryExperienceList () {
      dispatch(getAreaSalaryExperience());
    }
  }
}

export default connect(mapState,mapDispatch)(Header);

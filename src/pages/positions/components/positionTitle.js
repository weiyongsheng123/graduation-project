import React, { PureComponent } from 'react';
import { TitleArea, TitleContinue, TitleTitle, TitleCompany, TitleButton } from '../style';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { getResumePositionList } from '../../search/store/actionCreators';
import { getPositionCompanyData } from '../store/actionCreators';

class PositionTitle extends PureComponent {

  render () {
    const { pattern, positionResumeList, nowPositionId, getCompanyDesc } = this.props;
    let newPosition = positionResumeList.toJS();
    let titleList = {};
    if (newPosition.length) {
      titleList = newPosition.find((item) => {
        if(item.Id === nowPositionId){
          return item;
        }
        else {
          return false;
        }
      });
      if (titleList) {
        getCompanyDesc(titleList['companyId']);
      }
      else {
        titleList = {};
      }
    }
    return (
      <TitleArea>
        <TitleContinue>
          <i className="iconfont">&#xe61a;</i>
          招聘中
        </TitleContinue>
        <TitleTitle>
          <span className="left">{titleList['title']}</span>
          <span className="right"><i className="iconfont">&#xe615;</i>{titleList['salary']}/月</span>
        </TitleTitle>
        <TitleCompany>
          <span className="left">{titleList['companyName']}</span>
          <p className="right">
            <span>{titleList['education']}</span>
            <span>{titleList['experience']}</span>
            <span>{titleList['area']}</span>
            <span>{titleList['numbers']}</span>
          </p>
        </TitleCompany>
        <TitleButton>
          <Button disabled={pattern === '求职者端' ? false: true} title={pattern === '求职者端' ? "立刻申请" : "企业端不可选"} type="primary">立即申请</Button>
        </TitleButton>
      </TitleArea>
    )
  };
  componentDidMount () {
    const { positionResumeList, getList } = this.props;
    let existPlist = positionResumeList.toJS();
    if (!existPlist.length) {
      getList();
    }
  };
};

const mapState = (state) => ({
  pattern: state.getIn(['header','pattern']),
  positionResumeList: state.getIn(['search','positionResumeList']),
  nowPositionId: state.getIn(['positions','nowPositionId'])
});

const mapDispatch = (dispatch) => {
  return {
    getList () {
      dispatch(getResumePositionList());
    },
    getCompanyDesc (companyId) {
      dispatch(getPositionCompanyData(companyId));
    }
  }
};

export default connect(mapState,mapDispatch)(PositionTitle);

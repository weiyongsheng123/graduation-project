import React, { PureComponent } from 'react';
import { TitleArea, TitleContinue, TitleTitle, TitleCompany, TitleButton } from '../style';
import { Modal, Button } from 'antd';
import { connect } from 'react-redux';
import { getResumePositionList, addNewApply } from '../../search/store/actionCreators';
import { getPositionCompanyData } from '../store/actionCreators';
import { changeAjax } from '../../../common/ajax/store/actionCreators';

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
          <span className="left" onClick={(e)=>this.routerToCompany(titleList['companyId'],e)}>{titleList['companyName']}</span>
          <p className="right">
            <span>{titleList['education']}</span>
            <span>{titleList['experience']}</span>
            <span>{titleList['area']}</span>
            <span>{titleList['numbers']}</span>
          </p>
        </TitleCompany>
        <TitleButton>
          <Button disabled={pattern === '求职者端' ? false: true} title={pattern === '求职者端' ? "立刻申请" : "企业端不可选"} onClick={(e)=>{this.handleApply(titleList,e)}} type="primary">立即申请</Button>
        </TitleButton>
      </TitleArea>
    )
  };
  routerToCompany (Id,e) {
    e.stopPropagation();
    const { loginOrNot } = this.props;
    if (!loginOrNot) {
      const _this = this;
      Modal.confirm({
        title: '查看公司失败',
        content: '还未登录账号，登录后即可查看',
        okText: '好的',
        cancelText: '稍等',
        onOk () {
          _this.props.history.push('/login');
        }
      });
    }
    else {
      this.props.history.push('/company/'+Id);
    }
  };
  handleApply (resume,e) {
    e.preventDefault();
    const { loginOrNot, jobSeek, submitNewApply, ajaxSend } = this.props;
    if (!loginOrNot) {
      const _this = this;
      Modal.confirm({
        title: '申请失败',
        content: '还未登录账号，现在去登录',
        okText: '好的',
        cancelText: '稍等',
        onOk () {
          _this.props.history.push('/login');
        }
      });
    }
    else {
      let applyData = { };
      const newJobSeek = jobSeek.toJS();
      applyData['resumeId'] = resume['Id'];
      applyData['jobseekId'] = newJobSeek['Id'];
      applyData['companyId'] = resume['companyId'];
      applyData['resumeName'] = resume['title'];
      applyData['jobseekName'] = newJobSeek['name'];
      applyData['companyName'] = resume['companyName'];
      let date = new Date();
      let time = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
      applyData['time'] = time;
      submitNewApply(applyData);
      ajaxSend();
    }
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
  nowPositionId: state.getIn(['positions','nowPositionId']),
  loginOrNot: state.getIn(['login','loginOrNot']),
  jobSeek: state.getIn(['login','jobSeek'])
});

const mapDispatch = (dispatch) => {
  return {
    getList () {
      dispatch(getResumePositionList());
    },
    getCompanyDesc (companyId) {
      dispatch(getPositionCompanyData(companyId));
    },
    submitNewApply (values) {
      dispatch(addNewApply(values));
    },
    ajaxSend () {
      dispatch(changeAjax('send'));
    }
  }
};

export default connect(mapState,mapDispatch)(PositionTitle);

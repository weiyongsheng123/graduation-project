import React, { PureComponent } from 'react';
import { InfoArea, InfoTitle, InfoPassword, InputContain, InfoInput, InfoSuccess, InfoStep, BackoutArea, Backout } from '../style';
import { Input, Button, Steps } from 'antd';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { modifyAccountData } from '../store/actionCreators';
import { changeAjax } from '../../../common/ajax/store/actionCreators';

class HelpInfo extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      step: 0,
      judgment: false,
      password: '',
      submitPassword: false,
      modifyData: {
        password: '',
        email: '',
        telNumber: ''
      },
      modifyTruly: {
        password: true,
        email: true,
        telNumber: true
      },
      validatePasswordError: 0,
      submitModify: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.showPassword = this.showPassword.bind(this);
    this.showInfo = this.showInfo.bind(this);
    this.showSuccess = this.showSuccess.bind(this);
  }
  render () {
    const Step = Steps.Step;
    const { step, judgment, password, submitPassword, modifyTruly, validatePasswordError, submitModify } = this.state;
    const { loginOrNot, modifySuccess } = this.props;
    let stepNow = step;
    if (loginOrNot&&judgment) {
      stepNow = 1;
    }
    if (submitPassword && validatePasswordError===2) {
      stepNow = 2;
    }
    if (modifySuccess) {
      stepNow = 3;
    }
    return (
      <InfoArea>
        {
          loginOrNot || !judgment ? null :
            <BackoutArea>
              <Backout>
                <h3>尚未登录，不能留言</h3>
                <Link to="/login"><Button>去登录</Button></Link>
                <Link to="/"><Button>回首页</Button></Link>
              </Backout>
            </BackoutArea>
        }
        <InfoStep>
           <Steps current={stepNow}>
             <Step title="登录修改" description="请先登录后再来修改" />
             <Step title="输入密码" description="输入密码验证身份" />
             <Step title="修改信息" description="修改你的信息" />
             <Step title="成功修改" description="修改成功返回主页" />
           </Steps>
        </InfoStep>
        <InfoTitle onClick={this.showPassword}>
          <span className="iconfont">&#xe60f;</span>
          <span className="content">修改信息</span>
        </InfoTitle>
        <CSSTransition
            in={ loginOrNot&&judgment ? true : false }
            timeout={1000}
            classNames='fade'
            unmountOnExit
          >
          <InfoPassword>
            <span className="Info">你的密码：</span>
            { submitPassword&&!password ? <span className="warn">密码不能为空</span> : null }
            <Input allowClear name="password" onChange={this.handleChange}/>
            { validatePasswordError===1 ? <span className="error">密码错误</span> : null}
              <Button type="primary" onClick={this.showInfo}>
                下一步
              </Button>
          </InfoPassword>
        </CSSTransition>
        <CSSTransition
            in={ submitPassword&&validatePasswordError===2 ? true : false }
            timeout={1000}
            classNames='fade'
            unmountOnExit
          >
          <InfoInput>
            <InputContain>
              <Input placeholder="请输入邮箱" allowClear name="email" onChange={this.handleChange1}/>
              { !modifyTruly['email']&&submitModify ? <span className="warn">邮箱不合格</span> : null }
            </InputContain>
            <InputContain>
              <Input placeholder="请输入7位以上手机号码" allowClear name="telNumber" onChange={this.handleChange1}/>
              { !modifyTruly['telNumber']&&submitModify ? <span className="warn">手机号码不合格</span> : null }
            </InputContain>
            <InputContain>
              <Input placeholder="请输入6位以上字母加数字密码" name="password" allowClear onChange={this.handleChange1}/>
              { !modifyTruly['password']&&submitModify ? <span className="warn">密码不合格</span> : null }
            </InputContain>
            { modifySuccess === 2 ? <span className="error">请仔细检查每项是否合格</span> : null }
            <Button type="primary" loading={false} onClick={this.showSuccess}>
              提交
            </Button>
          </InfoInput>
        </CSSTransition>
        <CSSTransition
            in={ modifySuccess === 1 ? true : false }
            timeout={1000}
            classNames='fade'
            unmountOnExit
          >
          <InfoSuccess>
            <span className="success">成功修改</span>
            <Link to="/login">
              <Button type="primary">重新登录</Button>
            </Link>
          </InfoSuccess>
        </CSSTransition>
      </InfoArea>
    )
  }
  handleChange1 (e) {
    const index = e.target.name;
    const item = e.target.value;
    const newArray = {...this.state.modifyData};
    newArray[index] = item;
    this.setState({
      modifyData: newArray
    })
  };
  handleChange (e) {
    const item = e.target.value;
    this.setState({
      password: item
    })
  };
  showPassword () {
    this.setState({
      judgment: true
    })
  };
  showInfo () {
    const { jobSeek, company, pattern } = this.props;
    const { password } = this.state;
    this.setState({
      submitPassword: true
    });
    if (password) {
      let validatePasswordError = 0;
      if (pattern === '求职者端') {
        const newJobseek = jobSeek.toJS();
        validatePasswordError = password === newJobseek['password'] ? 2 : 1;
      }
      else {
        const newCompany = company.toJS();
        validatePasswordError = password === newCompany['password'] ? 2 : 1;
      }
      this.setState({
        validatePasswordError: validatePasswordError
      });
    }
  };
  showSuccess () {
    const { submitModifyData, pattern, jobSeek, company, ajaxSend } = this.props;
    const newModifyTruly = {...this.state.modifyTruly};
    const newModifyData = {...this.state.modifyData};
    let success = true;
    var re0 = /[a-z0-9]{6,25}/g;
    if (re0.test(newModifyData['password'])) {
      newModifyTruly['password'] = true;
    }
    else {
      newModifyTruly['password'] = false;
      success = false;
    }
    var re = /^\w+@[0-9a-z]+\.[a-z]+$/g;
    if (re.test(newModifyData['email'])) {
      newModifyTruly['email'] = true;
    }
    else {
      newModifyTruly['email'] = false;
      success = false;
    }
    var re1 = /\d{7,13}/g;
    if (re1.test(newModifyData['telNumber'])) {
      newModifyTruly['telNumber'] = true;
    }
    else {
      newModifyTruly['telNumber'] = false;
      success = false;
    }
    this.setState({
      submitModify: true,
      modifyTruly: newModifyTruly
    });
    if (success) {
      let id = 0;
      if (pattern === '求职者端') {
        const newJobseek = jobSeek.toJS();
        id = newJobseek['Id'];
      }
      else {
        const newCompany = company.toJS();
        id = newCompany['Id'];
      }
      newModifyData['Id'] = id;
      newModifyData['pattern'] = pattern;
      submitModifyData(newModifyData);
      ajaxSend();
    }
  }
};

const mapState = (state) => ({
  loginOrNot: state.getIn(['login','loginOrNot']),
  pattern: state.getIn(['header','pattern']),
  jobSeek: state.getIn(['login','jobSeek']),
  company: state.getIn(['login','company']),
  modifySuccess: state.getIn(['help','modifySuccess'])
});

const mapDispatch = (dispatch) => {
  return {
    submitModifyData (values) {
      dispatch(modifyAccountData(values));
    },
    ajaxSend () {
      dispatch(changeAjax('load'));
    }
  }
};

export default connect(mapState,mapDispatch)(HelpInfo);
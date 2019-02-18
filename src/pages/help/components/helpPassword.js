import React, { PureComponent } from 'react';
import { PasswordArea, PasswordTitle, PasswordInput, InputContanier, PasswordSuccess, PasswordStep } from '../style';
import { Input, Button, Steps } from 'antd';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPassword } from '../store/actionCreators';
import { changeAjax } from '../../../common/ajax/store/actionCreators';

class HelpPassword extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      step: 0,
      stepTwo: false,
      validateInfo: {
        name: '',
        email: '',
        telNumber: ''
      },
      submit: false
    }
  }
  render () {
    const Step = Steps.Step;
    const { step, stepTwo, validateInfo, submit } = this.state;
    const { password, getError } = this.props;
    let stepNow = step;
    if (password) {
      stepNow = 2;
    }
    return (
      <PasswordArea>
        <PasswordStep>
           <Steps current={stepNow}>
             <Step title="点击找回" description="点击开启找回" />
             <Step title="输入信息等待" description="输入相关信息开始找回" />
             <Step title="成功返回" description="发现你的密码." />
           </Steps>
        </PasswordStep>
        <PasswordTitle onClick={this.showInput.bind(this)}>
          <span className="iconfont">&#xe60b;</span>
          <span className="content">找回密码</span>
        </PasswordTitle>
        <CSSTransition
            in={ stepTwo }
            timeout={1000}
            classNames='fade'
            unmountOnExit
          >
          <PasswordInput>
            <InputContanier>
              <Input placeholder="请输入姓名" allowClear name="name" onChange={this.handleChange.bind(this)}/>
              { !validateInfo['name']&&submit ? <span className="warn">姓名不能为空</span> : null }
            </InputContanier>
            <InputContanier>
              <Input placeholder="请输入邮箱" allowClear name="email" onChange={this.handleChange.bind(this)}/>
              { !validateInfo['email']&&submit ? <span className="warn">邮箱不能为空</span> : null }
            </InputContanier>
            <InputContanier>
              <Input placeholder="请输入手机号码" allowClear name="telNumber" onChange={this.handleChange.bind(this)}/>
              { !validateInfo['telNumber']&&submit ? <span className="warn">手机号码不能为空</span> : null }
            </InputContanier>
            <Button type="primary" loading={false} onClick={this.showPassword.bind(this)}>
              提交
            </Button>
            { getError ? <span className="error">账户信息错误，请检查重试</span> : null }
          </PasswordInput>
        </CSSTransition>
        <CSSTransition
            in={ password ? true : false }
            timeout={1000}
            classNames='fade'
            unmountOnExit
          >
          <PasswordSuccess>
            <span className="password">你的密码：</span>
            <Input allowClear value={ password } />
            <Link to="/login">
              <Button type="primary">回到登录页</Button>
            </Link>
          </PasswordSuccess>
        </CSSTransition>
      </PasswordArea>
    )
  }
  handleChange (e) {
    const index = e.target.name;
    const item = e.target.value;
    const newArray = {...this.state.validateInfo};
    newArray[index] = item;
    this.setState({
      validateInfo: newArray
    })
  };
  showInput () {
    this.setState({
      stepTwo: true,
      step: 1
    })
  };
  showPassword () {
    const { getOwnPassword, ajaxSend } = this.props;
    const validateInfo = {...this.state.validateInfo};
    let goNext = true;
    for (var index in validateInfo) {
      if (!validateInfo[index]) {
        goNext = false;
        this.setState({
          submit: true
        });
      }
      else {
        break;
      }
    }
    if (goNext) {
      getOwnPassword(validateInfo);
      ajaxSend();
    }
  }
};

const mapState = (state) => ({
  password: state.getIn(['help','password']),
  getError: state.getIn(['help','getError'])
});

const mapDispatch = (dispatch) => {
  return {
    getOwnPassword (values) {
      dispatch(getPassword(values));
    },
    ajaxSend () {
      dispatch(changeAjax(true));
    }
  }
}

export default connect(mapState,mapDispatch)(HelpPassword);

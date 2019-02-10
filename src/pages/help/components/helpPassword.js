import React, { PureComponent } from 'react';
import { PasswordArea, PasswordTitle, PasswordInput, PasswordSuccess, PasswordStep } from '../style';
import { Input, Button, Steps } from 'antd';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

class HelpPassword extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      step: 0,
      stepTwo: false,
      stepThree: false
    }
  }
  render () {
    const Step = Steps.Step;
    const { step, stepTwo, stepThree } = this.state;
    return (
      <PasswordArea>
        <PasswordStep>
           <Steps current={step}>
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
            <Input placeholder="请输入姓名" allowClear />
            <Input placeholder="请输入邮箱" allowClear />
            <Input placeholder="请输入手机号码" allowClear />
            <Button type="primary" loading={false} onClick={this.showPassword.bind(this)}>
              提交
            </Button>
          </PasswordInput>
        </CSSTransition>
        <CSSTransition
            in={ stepThree }
            timeout={1000}
            classNames='fade'
            unmountOnExit
          >
          <PasswordSuccess>
            <span className="password">你的密码：</span>
            <Input allowClear />
            <Link to="/login">
              <Button type="primary">回到登录页</Button>
            </Link>
          </PasswordSuccess>
        </CSSTransition>
      </PasswordArea>
    )
  }
  showInput () {
    this.setState({
      stepTwo: true,
      step: 1
    })
  };
  showPassword () {
    this.setState({
      stepThree: true,
      step: 2
    })
  }
};

export default HelpPassword;
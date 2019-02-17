import React, { PureComponent } from 'react';
import { InfoArea, InfoTitle, InfoPassword, InfoInput, InfoSuccess, InfoStep } from '../style';
import { Input, Button, Steps } from 'antd';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

class HelpInfo extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      step: 0,
      stepTwo: false,
      stepThree: false,
      stepFour: false
    }
  }
  render () {
    const Step = Steps.Step;
    const { step, stepTwo, stepThree, stepFour } = this.state;
    return (
      <InfoArea>
        <InfoStep>
           <Steps current={step}>
             <Step title="登录修改" description="请先登录后再来修改" />
             <Step title="输入密码" description="输入密码验证身份" />
             <Step title="修改信息" description="修改你的信息" />
             <Step title="成功修改" description="修改成功返回主页" />
           </Steps>
        </InfoStep>
        <InfoTitle onClick={this.showPassword.bind(this)}>
          <span className="iconfont">&#xe60f;</span>
          <span className="content">修改信息</span>
        </InfoTitle>
        <CSSTransition
            in={ stepTwo }
            timeout={1000}
            classNames='fade'
            unmountOnExit
          >
          <InfoPassword>
            <span className="Info">你的密码：</span>
            <Input allowClear />
              <Button type="primary" onClick={this.showInfo.bind(this)}>
                下一步
              </Button>
          </InfoPassword>
        </CSSTransition>
        <CSSTransition
            in={ stepThree }
            timeout={1000}
            classNames='fade'
            unmountOnExit
          >
          <InfoInput>
            <Input placeholder="请输入称呼或公司联系人姓名" allowClear />
            <Input placeholder="请输入邮箱" allowClear />
            <Input placeholder="请输入手机号码" allowClear />
            <Button type="primary" loading={false} onClick={this.showSuccess.bind(this)}>
              提交
            </Button>
          </InfoInput>
        </CSSTransition>
        <CSSTransition
            in={ stepFour }
            timeout={1000}
            classNames='fade'
            unmountOnExit
          >
          <InfoSuccess>
              <span className="success">成功修改</span>
              <Link to="/">
                <Button type="primary">回到首页</Button>
              </Link>
            </InfoSuccess>
        </CSSTransition>
      </InfoArea>
    )
  }
  showPassword () {
    this.setState({
      stepTwo: true,
      step: 1
    })
  };
  showInfo () {
    this.setState({
      stepThree: true,
      step: 2
    })
  };
  showSuccess () {
    this.setState({
      stepFour: true,
      step: 3
    })
  };
};

export default HelpInfo;
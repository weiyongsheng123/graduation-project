import React, { PureComponent } from 'react';
import { RegisterDiv, AnimateArea, AnimatePart, InputH3, InputSpan, InputDiv, InputSubmit, IdentWContainer, BackLogin } from '../style';
import { Input, Button, Icon, Checkbox } from 'antd';
import Ident from '../../../common/identCode';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

class RegistrationForm extends PureComponent {
 constructor (props) {
      super(props);
      this.state = {
       fade: 1
     };
     this.prevOne = this.prevOne.bind(this);
     this.nextOne = this.nextOne.bind(this);
  }

  render () {
    const ButtonGroup = Button.Group;
    return (
      <RegisterDiv>
        <InputH3>
          <InputSpan className={this.state.fade%4 === 1? 'active' : ''} onClick={(e)=>{this.handleClick(1,e)}}>公司信息</InputSpan>
          <InputSpan className={this.state.fade%4 === 2? 'active' : ''} onClick={(e)=>{this.handleClick(2,e)}}>联系人信息</InputSpan>
          <InputSpan className={this.state.fade%4 === 3? 'active' : ''} onClick={(e)=>{this.handleClick(3,e)}}>账号密码</InputSpan>
          <InputSpan className={this.state.fade%4 === 0? 'active' : ''} onClick={(e)=>{this.handleClick(4,e)}}>验证提交</InputSpan>
        </InputH3>
        <AnimateArea>
          <CSSTransition
            in={ this.state.fade%4 === 1 }
            timeout={1000}
            classNames='fade'
            unmountOnExit
          >
         <AnimatePart>
           <InputDiv>
             <label htmlFor="CompanyName">公司名称</label>
             <Input className="input" name="CompanyName" placeholder="请输入公司名称" allowClear />
           </InputDiv>
           <InputDiv>
             <label htmlFor="RecruitArea">招聘地区</label>
             <Input className="input" name="RecruitArea" placeholder="请输入地区，可多选" allowClear />
           </InputDiv>
           <InputSubmit>
             <ButtonGroup>
               <Button type="primary" onClick={this.prevOne} disabled>
                 <Icon type="left" />上一步
               </Button>
               <Button type="primary" onClick={this.nextOne}>
                 下一步<Icon type="right" />
               </Button>
             </ButtonGroup>
          </InputSubmit>
          <Link to="/login">
            <BackLogin>已有账号，立即登录</BackLogin>
          </Link>
         </AnimatePart>
       </CSSTransition>
       <CSSTransition
            in={ this.state.fade%4 === 2 }
            timeout={1000}
            classNames='fade'
            unmountOnExit
          >
         <AnimatePart>
           <InputDiv>
              <label htmlFor="PersonName">姓名</label>
              <Input className="input" name="PersonName" placeholder="请输入公司联系人姓名" allowClear />
            </InputDiv>
            <InputDiv>
              <label htmlFor="PhoneNumber">手机号码</label>
              <Input className="input" name="PhoneNumber" placeholder="请输入手机号码" allowClear />
            </InputDiv>
            <InputDiv>
              <label htmlFor="Email">联系邮箱</label>
              <Input className="input" name="Email" placeholder="请输入联系邮箱" allowClear />
            </InputDiv>
            <InputSubmit>
              <ButtonGroup>
                <Button type="primary" onClick={this.prevOne}>
                  <Icon type="left" />上一步
                </Button>
                <Button type="primary" onClick={this.nextOne}>
                  下一步<Icon type="right" />
                </Button>
              </ButtonGroup>
           </InputSubmit>
         </AnimatePart>
       </CSSTransition>
       <CSSTransition
            in={ this.state.fade%4 === 3 }
            timeout={1000}
            classNames='fade'
            unmountOnExit
          >
         <AnimatePart>
           <InputDiv>
             <label htmlFor="Password">密码</label>
             <Input.Password className="input" name="Password" placeholder="请输入密码" allowClear />
           </InputDiv>
           <InputDiv>
             <label htmlFor="ResurePassword">确认密码</label>
             <Input.Password className="input" name="ResurePassword" placeholder="请再次确认密码" allowClear />
           </InputDiv>
           <InputSubmit>
             <ButtonGroup>
               <Button type="primary" onClick={this.prevOne}>
                 <Icon type="left" />上一步
               </Button>
               <Button type="primary" onClick={this.nextOne}>
                 下一步<Icon type="right" />
               </Button>
             </ButtonGroup>
           </InputSubmit>
         </AnimatePart>
       </CSSTransition>
       <CSSTransition
            in={ this.state.fade%4 === 0 }
            timeout={1000}
            classNames='fade'
            unmountOnExit
          >
         <AnimatePart>
           <InputDiv>
             <label htmlFor="captcha">验证码</label>
             <Input className="input captcha" name="captcha" placeholder="请输入验证码" allowClear />
             <IdentWContainer>
               <Ident className="ident"/>
             </IdentWContainer>
           </InputDiv>
           <Checkbox className='checkRead'>
             我已阅读
             <Link to="/register/userProtocol">
              <p className="inline">用户服务协议</p>
              </Link>
              <span className="inline">和</span>
              <Link to="/register/privacyPolicy">
              <p  className="inline">隐私政策</p>
              </Link>
           </Checkbox>
           <Button type="primary" block>注册</Button>
           <InputSubmit>
             <ButtonGroup>
               <Button type="primary" onClick={this.prevOne}>
                 <Icon type="left" />上一步
               </Button>
               <Button type="primary" onClick={this.nextOne} disabled>
                 下一步<Icon type="right" />
               </Button>
             </ButtonGroup>
           </InputSubmit>
         </AnimatePart>
       </CSSTransition>
        </AnimateArea>
      </RegisterDiv>
    )
  }
  handleClick (index,e) {
    e.stopPropagation();
    this.setState({
      fade: index
    })
  };
  prevOne () {
    this.setState({
      fade: (this.state.fade - 1)
    })
  };
  nextOne () {
    this.setState({
      fade: (this.state.fade + 1)
    })
  };
};

export default RegistrationForm;

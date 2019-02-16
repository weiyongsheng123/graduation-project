import React, { PureComponent } from 'react';
import { RegisterDiv, AnimateArea, AnimatePart, InputH3, InputSpan, InputDiv, InputSubmit, IdentContainer, BackLogin } from '../style';
import { Input, Button, Icon, Checkbox } from 'antd';
import Ident from '../../../common/identCode';
import { CSSTransition } from 'react-transition-group';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { submitCompany } from '../store/actionCreators';
import { changeAjax } from '../../../common/ajax/store/actionCreators';

class RegistrationForm extends PureComponent {
  constructor (props) {
      super(props);
      this.state = {
       fade: 1,
       values: {
         CompanyName: '',
         RecruitArea: '',
         PersonName: '',
         PhoneNumber: '',
         Email: '',
         Password: '',
         ResurePassword: '',
         Captcha: '',
         CheckRead: false
       },
       condition: {
         CompanyName: 3,
         RecruitArea: 3,
         PersonName: 3,
         PhoneNumber: 3,
         Email: 3,
         Password: 3,
         ResurePassword: 3,
         Captcha: 3,
         CheckRead: 3
       },
       warnInfo: {
         CompanyName: '公司名不能为空',
         RecruitArea: '招聘地区不能为空',
         PersonName: '联系人姓名不能为空',
         PhoneNumber: '电话号码不符合要求',
         Email: 'Email不符合要求',
         Password: '密码不符合要求',
         ResurePassword: '两次输入密码不一致',
         Captcha: '验证码错误',
         CheckRead: '请阅读后同意协议及政策'
       },
       success: true
     };
     this.prevOne = this.prevOne.bind(this);
     this.nextOne = this.nextOne.bind(this);
  }

  render () {
    const ButtonGroup = Button.Group;
    const { condition, warnInfo, success } = this.state;
    const { company } = this.props;
    const redirect = company ? <Redirect to="/login"></Redirect> : null;
    let headOne = true;
    let headTwo = true;
    let headThree = true;
    let headFour = true;
    let successed = false;
    if (success){
      if ( condition.CompanyName === 2 || condition.RecruitArea === 2 ){
        headOne = false;
      }
      if ( condition.PersonName === 2 || condition.PhoneNumber === 2 || condition.Email === 2 ){
        headTwo = false;
      }
      if ( condition.Password === 2 || condition.ResurePassword === 2 ){
        headThree = false;
      }
      if ( condition.Captcha === 2 || condition.CheckRead === 2 ){
        headFour = false;
      }
    }
    else {
      if ( condition.CompanyName !== 1 || condition.RecruitArea !== 1 ){
        headOne = false;
      }
      if ( condition.PersonName !== 1 || condition.PhoneNumber !== 1 || condition.Email !== 1 ){
        headTwo = false;
      }
      if ( condition.Password !== 1 || condition.ResurePassword !== 1 ){
        headThree = false;
      }
      if ( condition.Captcha !== 1 || condition.CheckRead !== 1 ){
        headFour = false;
      }
      let sub = true;
      for(let item in condition) {
        if (condition[item] !== 1) {
          sub = false;
          break;
        }
      }
      if(sub) {
        successed = true;
      }
    }
    
    return (
      <RegisterDiv>
        <InputH3>
          <InputSpan className={this.state.fade%4 === 1? 'active' : ''} onClick={(e)=>{this.handleClick(1,e)}}>{headOne ? null : <i className="iconfont">&#xe79f;</i>}公司信息</InputSpan>
          <InputSpan className={this.state.fade%4 === 2? 'active' : ''} onClick={(e)=>{this.handleClick(2,e)}}>{headTwo ? null : <i className="iconfont">&#xe79f;</i>}联系人信息</InputSpan>
          <InputSpan className={this.state.fade%4 === 3? 'active' : ''} onClick={(e)=>{this.handleClick(3,e)}}>{headThree ? null : <i className="iconfont">&#xe79f;</i>}账号密码</InputSpan>
          <InputSpan className={this.state.fade%4 === 0? 'active' : ''} onClick={(e)=>{this.handleClick(4,e)}}>{headFour ? null : <i className="iconfont">&#xe79f;</i>}验证提交</InputSpan>
        </InputH3>
        <AnimateArea>
          <CSSTransition
            in={ this.state.fade%4 === 1 }
            timeout={1000}
            classNames='fade'
          >
         <AnimatePart>
           <InputDiv>
             <label htmlFor="CompanyName">公司名称</label>
             <Input className="input" name="CompanyName" onBlur={(e)=>{this.handleRequired(e)}} onChange={(e)=>{this.handleChange(e)}} placeholder="请输入公司名称" allowClear />
             <span className="warning">{condition.CompanyName === 2 ? warnInfo.CompanyName : ''}</span>
           </InputDiv>
           <InputDiv>
             <label htmlFor="RecruitArea">招聘地区</label>
             <Input className="input" name="RecruitArea" onBlur={(e)=>{this.handleRequired(e)}} onChange={(e)=>{this.handleChange(e)}} placeholder="请输入地区，可多选" allowClear />
             <span className="warning">{condition.RecruitArea === 2 ? warnInfo.RecruitArea : ''}</span>
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
          >
         <AnimatePart>
           <InputDiv>
             <label htmlFor="PersonName">姓名</label>
             <Input className="input" name="PersonName" onBlur={(e)=>{this.handleRequired(e)}} onChange={(e)=>{this.handleChange(e)}} placeholder="请输入公司联系人姓名" allowClear />
             <span className="warning">{condition.PersonName === 2 ? warnInfo.PersonName : ''}</span>
           </InputDiv>
           <InputDiv>
             <label htmlFor="PhoneNumber">手机号码</label>
             <Input className="input" name="PhoneNumber" onBlur={(e)=>{this.handlePhone(e)}} onChange={(e)=>{this.handleChange(e)}} placeholder="请输入手机号码" allowClear />
             <span className="warning">{condition.PhoneNumber === 2 ? warnInfo.PhoneNumber : ''}</span>
           </InputDiv>
           <InputDiv>
             <label htmlFor="Email">联系邮箱</label>
             <Input className="input" name="Email" onBlur={(e)=>{this.handleEmail(e)}} onChange={(e)=>{this.handleChange(e)}} placeholder="请输入联系邮箱" allowClear />
             <span className="warning">{condition.Email === 2 ? warnInfo.Email : ''}</span>
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
          >
         <AnimatePart>
           <InputDiv>
             <label htmlFor="Password">密码</label>
             <Input.Password className="input" name="Password" onBlur={(e)=>{this.handlePassword(e)}} onChange={(e)=>{this.handleChange(e)}} placeholder="请输入六位以上数字加字母密码" allowClear />
             <span className="warning">{condition.Password === 2 ? warnInfo.Password : ''}</span>
           </InputDiv>
           <InputDiv>
             <label htmlFor="ResurePassword">确认密码</label>
             <Input.Password className="input" name="ResurePassword" onBlur={(e)=>{this.handleResure(e)}} onChange={(e)=>{this.handleChange(e)}} placeholder="请再次确认密码" allowClear />
             <span className="warning">{condition.ResurePassword === 2 ? warnInfo.ResurePassword : ''}</span>
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
          >
         <AnimatePart>
           <InputDiv>
             <label htmlFor="Captcha">验证码</label>
             <Input className="input captcha" name="Captcha" onBlur={(e)=>{this.handleCaptcha(e)}} onChange={(e)=>{this.handleChange(e)}} placeholder="请输入验证码" allowClear />
             <IdentContainer>
               <Ident className="ident"/>
             </IdentContainer>
             <span className="warning">{condition.Captcha === 2 ? warnInfo.Captcha : ''}</span>
           </InputDiv>
           <Checkbox className='checkRead' name="CheckRead" onChange={(e)=>{this.handleChecked(e)}} >
             我已阅读
             <Link to="/register/userProtocol">
               <p className="inline">用户服务协议</p>
             </Link>
             <span className="inline">和</span>
             <Link to="/register/privacyPolicy">
               <p  className="inline">隐私政策</p>
             </Link>
             <span className="warning">{condition.CheckRead === 2 ? warnInfo.CheckRead : ''}</span>
           </Checkbox>
           <Button type="primary" block onClick={this.submit.bind(this)}>注册</Button>
           <InputSubmit>
             {success || successed ? null : <span className="checkout">请仔细检查，存在不合格项!</span>}
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
        { redirect }
      </RegisterDiv>
    )
  }
  submit () {
    const newCondition = {...this.state.condition};
    let sub = true;
    for(let item in newCondition) {
      if (newCondition[item] !== 1) {
        sub = false;
        break;
      }
    }
    if(sub) {
      this.props.submit(this.state.values);
      this.props.ajaxSend();
    }
    else {
      this.setState({
        success: false
      })
    }
  }
  handleCaptcha (e) {
    const value = e.target.value;
    var strCaptcha = '';
    const newArray = this.props.code.toJS();
    for (let i = 0; i<newArray.length; i++) {
      strCaptcha = strCaptcha + newArray[i];
    }
    const newCondition = {...this.state.condition};
    if (value === strCaptcha) {
      newCondition['Captcha'] = 1;
    }
    else {
      newCondition['Captcha'] = 2;
    }
    this.setState({
      condition: newCondition
    })
  }
  handleResure (e) {
    const value = e.target.value;
    const password = this.state.values.Password;
    const newCondition = {...this.state.condition};
    if (value === password) {
      newCondition['ResurePassword'] = 1;
    }
    else {
      newCondition['ResurePassword'] = 2;
    }
    this.setState({
      condition: newCondition
    })
  }
  handlePassword (e) {
    const value = e.target.value;
    var re = /[a-z0-9]{6,25}/g;
    const newCondition = {...this.state.condition};
    if (re.test(value)) {
      newCondition['Password'] = 1;
    }
    else {
      newCondition['Password'] = 2;
    }
    this.setState({
      condition: newCondition
    })
  }
  handlePhone (e) {
    const value = e.target.value;
    var re = /\d{7,13}/g;
    const newCondition = this.state.condition
    if (re.test(value)) {
      newCondition['PhoneNumber'] = 1;
    }
    else {
      newCondition['PhoneNumber'] = 2;
    }
    this.setState({
      condition: newCondition
    })
  }
  handleRequired (e) {
    const value = e.target.value;
    const name = e.target.name;
    const newCondition = {...this.state.condition};
    if (value) {
      newCondition[name] = 1;
    }
    else {
      newCondition[name] = 2;
    }
    this.setState({
      condition: newCondition
    })
  }
  handleEmail (e) {
    const value = e.target.value;
    var re = /^\w+@[0-9a-z]+\.[a-z]+$/g;
    const newCondition = {...this.state.condition};
    if (re.test(value)) {
      newCondition['Email'] = 1;
    }
    else {
      newCondition['Email'] = 2;
    }
    this.setState({
      condition: newCondition
    })
  }
  handleChecked (e) {
    const newArray = {...this.state.values};
    newArray['CheckRead'] = e.target.checked;
    this.setState({
      values: newArray
    });
    const newCondition = {...this.state.condition};
    if (e.target.checked) {
      newCondition['CheckRead'] = 1;
    }
    else {
      newCondition['CheckRead'] = 2;
    }
    this.setState({
      condition: newCondition
    })
  }
  handleChange (e) {
    const name = e.target.name;
    const newArray = {...this.state.values};
    newArray[name] = e.target.value;
    this.setState({
      values: newArray
    })
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

const mapState = (state) => ({
  code: state.getIn(['ident','code']),
  company: state.getIn(['register','companyRegiste'])
});

const mapDispatch = (dispatch) => {
  return {
    submit (values) {
      dispatch(submitCompany(values));
    },
    ajaxSend () {
      dispatch(changeAjax(true));
    }
  }
}

export default connect(mapState,mapDispatch)(RegistrationForm);

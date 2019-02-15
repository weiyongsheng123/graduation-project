import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { InputArea, InputH3, InputSpan, InputDiv, InputRemerber, InputSubmit, InputForget } from '../style';
import { changeHeaderPattern } from '../../../common/header/store/actionCreators'
import { Input, Button, Checkbox } from 'antd';
import { Link, Redirect } from 'react-router-dom';
import { checkAccount, changeWarn } from '../store/actionCreators';
import { changeAjax } from '../../../common/ajax/store/actionCreators';

class LoginInput extends PureComponent {
  constructor (props) {
      super(props);
      this.state = {
        account: '',
        password: ''
     };
  }
  render () {
    const { changePattern, pattern, warn, loginOrNot } = this.props;
    let redirect = null;
    if (loginOrNot) {
      redirect = <Redirect to="/"></Redirect>;
    }
    else {
      redirect = null;
    }
    return (
      <InputArea>
        <InputH3>
          <InputSpan className={pattern === '求职者端'? 'active' : ''} onClick={()=>{changePattern('求职者端')} }>求职者登录</InputSpan>
          <InputSpan className={pattern === '企业端'? 'active' : ''} onClick={()=>{changePattern('企业端')} }>企业登录</InputSpan>
        </InputH3>
        <InputDiv>
          <label htmlFor="loginName">用户名</label>
          <Input className="input" name="loginName" onChange={(e)=>{this.handleChange(e)}} placeholder="请输入邮箱或手机号" allowClear />
        </InputDiv>
        <InputDiv className="second">
          <label htmlFor="loginPassword">密码</label>
          <Input.Password className="input" name="loginPassword" onChange={(e)=>{this.handleChange(e)}} placeholder="请输入密码" />
        </InputDiv>
        <InputRemerber>
          <Checkbox>记住我</Checkbox>
        </InputRemerber>
        <InputSubmit>
          <span className="warning">{ warn }</span>
          <Button type="primary" block onClick={()=>{this.submit(pattern)}}>登录</Button>
        </InputSubmit>
        <InputForget>
          <span className="left">还没有账号？</span>
          <Link to='/register'>
            <span className="left">立即注册</span>
          </Link>
          <Link to='/help'>
          <span className="right">忘记密码</span>
          </Link>
        </InputForget>
        { redirect }
      </InputArea>
    )
  }
  submit (pattern) {
    const { account, password } = this.state;
    const { changeWarning, check, ajaxSend } = this.props;
    if (!account || !password) {
      changeWarning("请填入账号及密码");
    }
    else {
      changeWarning("");
      var re =/@/g;
      let type = '';
      if(account.search(re) !== -1){
        type = 'email';
      }
      else {
        type = 'telNumber';
      }
      const values = {
        account: account,
        password: password,
        type: type,
        pattern: pattern
      }
      check(values,pattern);
      ajaxSend();
    }
  }
  handleChange (e) {
    const name = e.target.name;
    if ( name === "loginName" ) {
      this.setState({
        account: e.target.value
      })
    }
    else {
      this.setState({
        password: e.target.value
      })
    }
  }
};

const mapState = (state) => ({
  pattern: state.getIn(['header','pattern']),
  warn: state.getIn(['login','warn']),
  loginOrNot: state.getIn(['login','loginOrNot'])
});

const mapDispatch = (dispatch) => {
  return {
    changePattern (pattern) {
      dispatch(changeHeaderPattern(pattern))
    },
    check (values,pattern) {
      dispatch(checkAccount(values,pattern))
    },
    changeWarning (value) {
      dispatch(changeWarn(value));
    },
    ajaxSend () {
      dispatch(changeAjax(true));
    }
  }
}

export default connect(mapState,mapDispatch)(LoginInput);

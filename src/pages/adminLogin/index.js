import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Input, Tooltip, Icon, Button } from 'antd';
import { LoginHeader, LoginInput } from './style';
import { changeLogin } from '../admin/store/actionCreators';

class AdminLogin extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      account: '',
      password: '',
      loginResult: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render () {
    const { loginResult } = this.state;
    let result = null;
    if (loginResult === 1) {
      result = <Redirect to="/admin"></Redirect>;
    }
    else if (loginResult === 2) {
      result = <p>账号错误</p>;
    }
    else if (loginResult === 3) {
      result = <p>密码错误</p>;
    }
    return (
      <Fragment>
        <LoginHeader>管理员登录</LoginHeader>
        <LoginInput>
          <Input
            name="account"
            size="large"
            placeholder="输入你的账号"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            suffix={
              <Tooltip title="准确的账号信息">
                <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
              </Tooltip>
            }
            onChange={(e)=>this.handleChange(e)}
          />
          <Input.Password
            name="password"
            size="large"
            placeholder="输入你的密码"
            prefix={<Icon type="unlock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            onChange={(e)=>this.handleChange(e)}
            />
          <div className="btns">
            {result}
            <Button type="primary" size='large' onClick={this.handleSubmit}>登录</Button>
          </div>
        </LoginInput>
      </Fragment>
    )
  }
  handleChange (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }
  handleSubmit () {
    const { account, password } = this.state;
    const { logined } = this.props;
    if (account !== 'admin') {
      this.setState({
        loginResult: 2
      });
      return;
    }
    else if (password !== 'admin') {
      this.setState({
        loginResult: 3
      });
      return;
    }
    else {
      this.setState({
        loginResult: 1
      });
      logined();
      return;
    }
  }
  componentDidMount(){ 
    //组件挂载时候，注册keypress事件
      document.addEventListener('keypress',this.handleEnterKey);
  }
  componentWillUmount(){
    //组件卸载时候，注销keypress事件
    document.removeEventListener("keypress",this.handleEnterKey);
  }
  handleEnterKey = (e) => {
    if(e.keyCode === 13){ //主要区别就是这里，可以直接获取到keyCode的值
         this.handleSubmit();
    }
  }
}

const mapState = (state) => ({
  
});

const mapDispatch = (dispatch) => {
  return {
    logined () {
      dispatch(changeLogin(true));
    }
  }
}

export default connect(mapState,mapDispatch)(AdminLogin);

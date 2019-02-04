import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { InputArea, InputH3, InputSpan, InputDiv, InputRemerber, InputSubmit, InputForget } from '../style';
import { changeHeaderPattern } from '../../../common/header/store/actionCreators'
import { Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';

class LoginInput extends PureComponent {

  render () {
    const { changePattern, pattern } = this.props;
    return (
      <InputArea>
        <InputH3>
          <InputSpan className={pattern === '求职者端'? 'active' : ''} onClick={()=>{changePattern('求职者端')} }>求职者登录</InputSpan>
          <InputSpan className={pattern === '企业端'? 'active' : ''} onClick={()=>{changePattern('企业端')} }>企业登录</InputSpan>
        </InputH3>
        <InputDiv>
          <label htmlFor="loginName">用户名</label>
          <Input className="input" name="loginName" placeholder="请输入邮箱或手机号" allowClear />
        </InputDiv>
        <InputDiv className="second">
          <label htmlFor="loginPassword">密码</label>
          <Input.Password className="input" name="loginPassword" placeholder="请输入密码" />
        </InputDiv>
        <InputRemerber>
          <Checkbox>记住我</Checkbox>
        </InputRemerber>
        <InputSubmit>
          <Button type="primary" block>登录</Button>
        </InputSubmit>
        <InputForget>
          <span className="left">还没有账号？</span>
          <Link to='/register'>
            <span className="left">立即注册</span>
          </Link>
          <span className="right">忘记密码</span>
        </InputForget>
      </InputArea>
    )
  }
};

const mapState = (state) => ({
  pattern: state.getIn(['header','pattern'])
});

const mapDispatch = (dispatch) => {
  return {
    changePattern (pattern) {
      dispatch(changeHeaderPattern(pattern))
    }
  }
}

export default connect(mapState,mapDispatch)(LoginInput);

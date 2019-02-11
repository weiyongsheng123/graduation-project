import React, { PureComponent } from 'react';
import { FeedbackWrapper, FeedbackHead, FeedContent, InputDiv } from './style';
import Header from '../../common/header';
import { connect } from 'react-redux';
import { Button, Input } from 'antd';
import { Link } from 'react-router-dom';

class Feedback extends PureComponent {

  render () {
    const { TextArea } = Input;
    return (
      <FeedbackWrapper>
        <Header/>
        <FeedbackHead>
          <span className="iconfont">&#xe620;</span>
          意见反馈
        </FeedbackHead>
        <FeedContent>
          <InputDiv>
            <label htmlFor="feedbacktheme">反馈主题</label>
            <Input className="input" maxLength={35} name="feedbacktheme" placeholder="请输入反馈主题" allowClear />
          </InputDiv>
          <InputDiv className="chooseMany">
            <label htmlFor="反馈内容">反馈内容</label>
            <TextArea className="textarea" rows={8} name="projectdesc" placeholder="请输入反馈的具体内容"/>
          </InputDiv>
          <InputDiv className="center">
            <Button>提交</Button>
            <Link to="/">
              <Button>取消</Button>
            </Link>
          </InputDiv>
        </FeedContent>
      </FeedbackWrapper>
    )
  }
  componentDidMount () {
    window.scrollTo( 0, 0);
  }
};

const mapState = (state) => ({
  
});

const mapDispatch = (dispatch) => {
  return {
    
  }
};

export default connect(mapState,mapDispatch)(Feedback);

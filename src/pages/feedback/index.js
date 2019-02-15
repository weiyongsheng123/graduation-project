import React, { PureComponent } from 'react';
import { FeedbackWrapper, FeedbackHead, FeedContent, InputDiv, BackoutArea, Backout } from './style';
import Header from '../../common/header';
import { connect } from 'react-redux';
import { Button, Input } from 'antd';
import { Link, Redirect } from 'react-router-dom';
import { submitSuggest } from './store/actionCreators';
import { changeAjax } from '../../common/ajax/store/actionCreators';
import Ajax from '../../common/ajax';

class Feedback extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      checkTitle: 3,
      checkContent: 3
    }
  }
  render () {
    console.log("ccc");
    const { TextArea } = Input;
    const { checkTitle, checkContent } = this.state;
    const { loginOrNot, feedbackSuccess } = this.props;
    return (
      <FeedbackWrapper>
        {
          loginOrNot ? null :
            <BackoutArea>
              <Backout>
                <h3>尚未登录，不能留言</h3>
                <Link to="/login"><Button>去登录</Button></Link>
                <Link to="/"><Button>回首页</Button></Link>
              </Backout>
            </BackoutArea>
        }
        <Header/>
        <FeedbackHead>
          <span className="iconfont">&#xe620;</span>
          意见反馈
        </FeedbackHead>
        <FeedContent>
          <InputDiv>
            <label htmlFor="feedbacktheme">反馈主题</label>
            <Input className="input" maxLength={135} onChange={(e)=>{this.changeTitle(e)}} name="feedbacktheme" placeholder="请输入反馈主题" allowClear />
            { checkTitle === 2 ? <span className="warn">主题不能为空</span> : null }
          </InputDiv>
          <InputDiv className="chooseMany">
            <label htmlFor="反馈内容">反馈内容</label>
            <TextArea className="textarea" rows={8} onChange={(e)=>{this.changeContent(e)}} name="projectdesc" placeholder="请输入反馈的具体内容"/>
            { checkContent === 2 ? <span className="warn">内容不能为空</span> : null }
          </InputDiv>
          <InputDiv className="center">
            <Button onClick={this.submit.bind(this)}>提交</Button>
            <Link to="/">
              <Button>取消</Button>
            </Link>
          </InputDiv>
        </FeedContent>
        { feedbackSuccess ? <Redirect to="/"></Redirect> : null }
        <Ajax/>
      </FeedbackWrapper>
    )
  }
  submit () {
    const {title, content} = this.state;
    const { pattern, jobSeek, company, submitData, ajaxSend } = this.props
    const newJobSeek = jobSeek.toJS();
    const newCompany = company.toJS();
    if (title !== '' && content !== '') {
      this.setState({
        checkTitle: 1,
        checkContent: 1
      });
      let name = '';
      if (pattern === '求职者端') {
        name = newJobSeek['name'];
      }
      else {
        name = newCompany['name'] + '-' + newCompany['legalName'];
      }
      var date = new Date();
      var year = date.getFullYear();
      var mounth = date.getMonth() + 1;
      var day = date.getDate();
      const newArray = {
        title: title,
        content: content,
        time: year+ '-' + mounth + '-' + day,
        name: name
      };
      submitData(newArray);
      ajaxSend();
    }
    else if (title !== '' && content === '') {
      this.setState({
        checkTitle: 1,
        checkContent: 2
      })
    }
    else if (title === '' && content !== '') {
      this.setState({
        checkTitle: 2,
        checkContent: 1
      })
    }
    else {
      this.setState({
        checkTitle: 2,
        checkContent: 2
      })
    }
  }
  changeTitle (e) {
    this.setState({
      title: e.target.value
    })
  }
  changeContent (e) {
    this.setState({
      content: e.target.value
    })
  }
  componentDidMount () {
    window.scrollTo( 0, 0);
  }
};

const mapState = (state) => ({
  pattern: state.getIn(['header','pattern']),
  jobSeek: state.getIn(['login','jobSeek']),
  company: state.getIn(['login','company']),
  loginOrNot: state.getIn(['login','loginOrNot']),
  feedbackSuccess: state.getIn(['feedback','feedbackSuccess'])
});

const mapDispatch = (dispatch) => {
  return {
    submitData (value) {
      dispatch(submitSuggest(value));
    },
    ajaxSend () {
      dispatch(changeAjax(true));
    }
  }
};

export default connect(mapState,mapDispatch)(Feedback);

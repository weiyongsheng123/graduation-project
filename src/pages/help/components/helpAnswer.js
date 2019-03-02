import React, { PureComponent } from 'react';
import { AnswerArea, AnswerHeader, AnswerDetail, AnswerItem } from '../style';

class HelpAnswer extends PureComponent {

  render () {
    return (
      <AnswerArea>
        <AnswerHeader>
           <span className="iconfont">&#xe602;</span>常见问题
        </AnswerHeader>
        <AnswerDetail>
          <AnswerItem>
            <p className="question">
              <i className="iconfont">&#xe62b;</i>
              <span>如何注册账号？</span>
            </p>
            <p className="answer">
              <i className="iconfont">&#xe62a;</i>
              <span>在登录界面输入框的左下角即有注册按钮，选择你要注册的用户类型(求职者、企业)。</span>
            </p>
          </AnswerItem>
          <AnswerItem>
            <p className="question">
              <i className="iconfont">&#xe62b;</i>
              <span>点击记住密码以后如何去除保存的的账号及密码？</span>
            </p>
            <p className="answer">
              <i className="iconfont">&#xe62a;</i>
              <span>只要在点击登出以后，下次登录将记住密码勾选去除即可。另外修改账号密码以后也会自动去除已经记住的账号密码信息。</span>
            </p>
          </AnswerItem>
          <AnswerItem>
            <p className="question">
              <i className="iconfont">&#xe62b;</i>
              <span>我想要修改手机邮箱，在哪里修改？</span>
            </p>
            <p className="answer">
              <i className="iconfont">&#xe62a;</i>
              <span>在网页右上角的帮助中心的密码找回与修改信息->修改信息可完成修改。</span>
            </p>
          </AnswerItem>
          <AnswerItem>
            <p className="question">
              <i className="iconfont">&#xe62b;</i>
              <span>申请过的职位在哪里可以看到？</span>
            </p>
            <p className="answer">
              <i className="iconfont">&#xe62a;</i>
              <span>在个人中心中可以点击上侧选择查看已经申请的职位，可以删除来取消申请，企业端如果拒绝了你的申请也会从你的已申请列表中去除。</span>
            </p>
          </AnswerItem>
        </AnswerDetail>
      </AnswerArea>
    )
  }
};

export default HelpAnswer;
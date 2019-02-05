import React, { PureComponent } from 'react';
import { WorkArea, WorkTitle, WorkButton, WorkList, InputDiv, WorkItem, WorkEdit } from '../style';
import { Button, Input } from 'antd';
import { CSSTransition } from 'react-transition-group';

class ResumeWork extends PureComponent {
  constructor (props) {
      super(props);
      this.state = {
        fade: 1,
        experienceList: [
          {
            companyName: '平头哥',
            workTime: '3个月',
            workDuty: 'web前端开发',
            workSalary: '2300/月'
          },
          {
            companyName: '平头哥',
            workTime: '3个月',
            workDuty: 'web前端开发',
            workSalary: '2300/月'
          },
          {
            companyName: '平头哥',
            workTime: '3个月',
            workDuty: 'web前端开发',
            workSalary: '2300/月'
          },
          {
            companyName: '平头哥',
            workTime: '3个月',
            workDuty: 'web前端开发',
            workSalary: '2300/月'
          }
        ]
     };
    this.showProfile = this.showProfile.bind(this);
    this.showEdit = this.showEdit.bind(this);
  }
  render () {

    return (
      <WorkArea>
        <WorkTitle>工作经验</WorkTitle>
        <WorkButton>
          <Button type="dashed" onClick={this.showEdit}>
            <i className="iconfont">&#xe601;</i>
            添加工作经验
          </Button>
        </WorkButton>
        <CSSTransition
            in={ this.state.fade === 1 }
            timeout={1000}
            classNames='fade'
            unmountOnExit
        >
          <WorkList>
            {
              this.state.experienceList.map((item,index)=>{
                return (
                  <WorkItem key={index}>
                    <span className="index">{++index}、</span>
                    <span className="iconfont" onClick={this.delete.bind(this,--index)}>&#xe603;</span>
                    <div className="container">
                      <span>公司名：</span><p>{item.companyName}</p>
                    </div>
                    <div className="container">
                      <span>工作时长：</span><p>{item.workTime}</p>
                    </div>
                    <div className="container">
                      <span>工作职位：</span><p>{item.workDuty}</p>
                    </div>
                    <div className="container">
                      <span>薪资：</span><p>{item.workSalary}</p>
                    </div>
                  </WorkItem>
                )
              })
            }
          </WorkList>
        </CSSTransition>
        <CSSTransition
            in={ this.state.fade === 2 }
            timeout={1000}
            classNames='fade'
            unmountOnExit
        >
          <WorkEdit>
            <i onClick={this.showProfile} className="iconfont close">&#xe603;</i>
            <InputDiv>
              <label htmlFor="companyName">公司名</label>
              <Input className="input" name="companyName" placeholder="请输入公司名" allowClear />
            </InputDiv>
            <InputDiv>
              <label htmlFor="worktime">工作时长</label>
              <Input className="input" name="worktime" placeholder="请输入工作时长" allowClear />
            </InputDiv>
            <InputDiv>
              <label htmlFor="workduty">工作职位</label>
              <Input className="input" name="workduty" placeholder="请输入工作职位" allowClear />
            </InputDiv>
            <InputDiv>
              <label htmlFor="worksalary">工作薪资</label>
              <Input className="input" name="worksalary" placeholder="请输入工作薪资（月工资）" allowClear />
            </InputDiv>
            <InputDiv>
              <Button onClick={this.showProfile}>添加</Button>
              <Button onClick={this.showProfile}>取消</Button>
            </InputDiv>
          </WorkEdit>
        </CSSTransition>
      </WorkArea>
    )
  };
  delete (index) {
    const list = [...this.state.experienceList];
    list.splice(index,1);
    this.setState({
      experienceList: list
    });
  };
  showEdit () {
    this.setState({
      fade: 2
    })
  };
  showProfile () {
    this.setState({
      fade: 1
    })
  };
};

export default ResumeWork;
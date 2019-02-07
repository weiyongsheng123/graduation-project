import React, { PureComponent } from 'react';
import { WorkArea, WorkTitle, WorkButton, WorkList, InputDiv, WorkItem, WorkEdit } from '../style';
import { Button, Input, Select } from 'antd';
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
    const Option = Select.Option;
    return (
      <WorkArea id="resumework">
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
              <Select
                name="experience"
                showSearch
                placeholder="请选择经验时长"
                optionFilterProp="children"
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="无经验">无经验</Option>
                <Option value="3-6个月">3-6个月</Option>
                <Option value="6个月-1年">6个月-1年</Option>
              </Select>
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
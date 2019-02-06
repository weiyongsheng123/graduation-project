import React, { PureComponent } from 'react';
import { ProjectArea, ProjectTitle, ProjectButton, ProjectList, InputDiv, ProjectItem, ProjectEdit } from '../style';
import { Button, Input } from 'antd';
import { CSSTransition } from 'react-transition-group';

class ResumeProject extends PureComponent {
  constructor (props) {
      super(props);
      this.state = {
        fade: 1,
        experienceList: [
          {
            projectName: '平头哥官网',
            projectTime: '2018年12月至2019年1月',
            projectDuty: '主要前端负责',
            projectDesc: '在项目中对前端负责，由UI所给出的设计图纸并实现，另外也对。。。。'
          },
          {
            projectName: '平头哥官网',
            projectTime: '2018年12月至2019年1月',
            projectDuty: '主要前端负责',
            projectDesc: '在项目中对前端负责，由UI所给出的设计图纸并实在项目中对前端负责，由UI所给出的设计图在项目中对前端负责，由UI所给出的设计图纸并在项目中对前端负责，由UI所给出的设计图纸并实现，另外也对。实现，另外也对。纸并实现，另外也对。现，另外也对。。。。'
          },
          {
            projectName: '平头哥官网',
            projectTime: '2018年12月至2019年1月',
            projectDuty: '主要前端负责',
            projectDesc: '在项目中对前端负责，由UI所给出的设计图纸并实现，另外也对。。。。'
          }
        ]
     };
    this.showProfile = this.showProfile.bind(this);
    this.showEdit = this.showEdit.bind(this);
  }
  render () {
    const { TextArea } = Input;
    return (
      <ProjectArea id="resumeproject">
        <ProjectTitle>项目经验</ProjectTitle>
        <ProjectButton>
          <Button type="dashed" onClick={this.showEdit}>
            <i className="iconfont">&#xe601;</i>
            添加项目经验
          </Button>
        </ProjectButton>
        <CSSTransition
            in={ this.state.fade === 1 }
            timeout={1000}
            classNames='fade'
            unmountOnExit
        >
          <ProjectList>
            {
              this.state.experienceList.map((item,index)=>{
                return (
                  <ProjectItem key={index}>
                    <span className="index">{++index}、</span>
                    <span className="iconfont" onClick={this.delete.bind(this,--index)}>&#xe603;</span>
                    <div className="container">
                      <span>项目名称：</span><p>{item.projectName}</p>
                    </div>
                    <div className="container">
                      <span>起止时间：</span><p>{item.projectTime}</p>
                    </div>
                    <div className="container">
                      <span>项目职责：</span><p>{item.projectDuty}</p>
                    </div>
                    <div className="container twoLine">
                      <span>项目描述：</span><p>{item.projectDesc}</p>
                    </div>
                  </ProjectItem>
                )
              })
            }
          </ProjectList>
        </CSSTransition>
        <CSSTransition
            in={ this.state.fade === 2 }
            timeout={1000}
            classNames='fade'
            unmountOnExit
        >
          <ProjectEdit>
            <i onClick={this.showProfile} className="iconfont close">&#xe603;</i>
            <InputDiv>
              <label htmlFor="projectName">项目名称</label>
              <Input className="input" name="projectName" placeholder="请输入项目名称" allowClear />
            </InputDiv>
            <InputDiv>
              <label htmlFor="projecttime">起止时间</label>
              <Input className="input" name="projecttime" placeholder="请输入项目起止时间" allowClear />
            </InputDiv>
            <InputDiv>
              <label htmlFor="projectduty">项目职责</label>
              <Input className="input" name="projectduty" placeholder="请输入项目中负责任务" allowClear />
            </InputDiv>
            <InputDiv className="chooseMany">
              <label htmlFor="projectdesc">项目描述</label>
              <TextArea rows={4} name="projectdesc" placeholder="请输入在此项目工作中的具体描述"/>
            </InputDiv>
            <InputDiv>
              <Button onClick={this.showProfile}>添加</Button>
              <Button onClick={this.showProfile}>取消</Button>
            </InputDiv>
          </ProjectEdit>
        </CSSTransition>
      </ProjectArea>
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

export default ResumeProject;
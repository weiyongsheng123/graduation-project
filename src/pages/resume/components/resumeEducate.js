import React, { PureComponent } from 'react';
import { EducateArea, EducateTitle, EducateButton, EducateList, InputDiv, EducateItem, EducateEdit } from '../style';
import { Button, Input, DatePicker, Select } from 'antd';
import { CSSTransition } from 'react-transition-group';

class ResumeEducate extends PureComponent {
  constructor (props) {
      super(props);
      this.state = {
        fade: 1,
        experienceList: [
          {
            schoolName: '安徽财经大学',
            schoolFormal: '本科',
            schoolSpecialty: '计算机科学与技术',
            schoolGraduate: '2019-6-30'
          },
          {
            schoolName: '安徽财经大学',
            schoolFormal: '本科',
            schoolSpecialty: '计算机科学与技术',
            schoolGraduate: '2019-6-30'
          }
        ]
     };
    this.showProfile = this.showProfile.bind(this);
    this.showEdit = this.showEdit.bind(this);
  }
  render () {
    const InputGroup = Input.Group;
    const Option = Select.Option;
    return (
      <EducateArea id="resumeeducate">
        <EducateTitle>教育经历</EducateTitle>
        <EducateButton>
          <Button type="dashed" onClick={this.showEdit}>
            <i className="iconfont">&#xe601;</i>
            添加教育经历
          </Button>
        </EducateButton>
        <CSSTransition
            in={ this.state.fade === 1 }
            timeout={1000}
            classNames='fade'
            unmountOnExit
        >
          <EducateList>
            {
              this.state.experienceList.map((item,index)=>{
                return (
                  <EducateItem key={index}>
                    <span className="index">{++index}、</span>
                    <span className="iconfont" onClick={this.delete.bind(this,--index)}>&#xe603;</span>
                    <div className="container">
                      <span>学校名称：</span><p>{item.schoolName}</p>
                    </div>
                    <div className="container">
                      <span>学历：</span><p>{item.schoolFormal}</p>
                    </div>
                    <div className="container">
                      <span>专业：</span><p>{item.schoolSpecialty}</p>
                    </div>
                    <div className="container">
                      <span>毕业时间：</span><p>{item.schoolGraduate}</p>
                    </div>
                  </EducateItem>
                )
              })
            }
          </EducateList>
        </CSSTransition>
        <CSSTransition
            in={ this.state.fade === 2 }
            timeout={1000}
            classNames='fade'
            unmountOnExit
        >
          <EducateEdit>
            <i onClick={this.showProfile} className="iconfont close">&#xe603;</i>
            <InputDiv>
              <label htmlFor="companyName">学校名称</label>
              <Input className="input" name="companyName" placeholder="请输入学校名称" allowClear />
            </InputDiv>
            <InputDiv>
              <label htmlFor="education">学历</label>
              <Select
                name="education"
                showSearch
                placeholder="请选择学历"
                optionFilterProp="children"
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="大专">大专</Option>
                <Option value="本科">本科</Option>
                <Option value="研究生">研究生</Option>
              </Select>
            </InputDiv>
            <InputDiv>
              <label htmlFor="Educateduty">专业</label>
              <Input className="input" name="Educateduty" placeholder="请输入专业" allowClear />
            </InputDiv>
            <InputDiv>
              <label htmlFor="Educatesalary">毕业时间</label>
              <InputGroup compact>
                <DatePicker name="Educatesalary" placeholder="请选择时间"/>
              </InputGroup>
            </InputDiv>
            <InputDiv className="chooseMany">
              <Button onClick={this.showProfile}>添加</Button>
              <Button onClick={this.showProfile}>取消</Button>
            </InputDiv>
          </EducateEdit>
        </CSSTransition>
      </EducateArea>
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

export default ResumeEducate;
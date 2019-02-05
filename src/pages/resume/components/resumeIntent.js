import React, { PureComponent } from 'react';
import { IntentArea, IntentTitle, IntentDetail, IntentProfile, IntentEdit, InputDiv } from '../style';
import { Input, Radio, Select, Button, Checkbox, Row, Col } from 'antd';
import { CSSTransition } from 'react-transition-group';

class ResumeIntent extends PureComponent {
  constructor (props) {
      super(props);
      this.state = {
       fade: 1
     };
     this.showProfile = this.showProfile.bind(this);
     this.showEdit = this.showEdit.bind(this);
  }
  render () {
    const RadioGroup = Radio.Group;
    const Option = Select.Option;
    return (
      <IntentArea>
        <CSSTransition
            in={ this.state.fade === 1 }
            timeout={1000}
            classNames='fade'
            unmountOnExit
          >
          <IntentProfile>
            <IntentTitle>求职意向</IntentTitle>
            <IntentDetail>
              <span>求职状态：</span>
              <p>离职</p>
            </IntentDetail>
            <IntentDetail>
              <span>期望从事地点：</span>
              <p>离职</p>
            </IntentDetail>
            <IntentDetail>
              <span>期望从事行业：</span>
              <p>离职</p>
            </IntentDetail>
            <IntentDetail>
              <span>期望从事职业：</span>
              <p>离职</p>
            </IntentDetail>
            <IntentDetail>
              <span>税前期望月薪：</span>
              <p>离职</p>
            </IntentDetail>
            <IntentDetail>
              <span>期望工作性质：</span>
              <p>离职</p>
            </IntentDetail>
            <span className="showEdit" onClick={this.showEdit}>
              <span className="iconfont">&#xe609;</span>
              编辑
            </span>
          </IntentProfile>
        </CSSTransition>
        <CSSTransition
            in={ this.state.fade === 2 }
            timeout={1000}
            classNames='fade'
            unmountOnExit
        >
          <IntentEdit>
            <i onClick={this.showProfile} className="iconfont close">&#xe603;</i>
            <InputDiv className="chooseMany">
              <label htmlFor="state">求职状态</label>
              <RadioGroup>
                <Radio name="state" value='在职'>在职</Radio>
                <Radio name="state" value='离职'>离职</Radio>
                <Radio name="state" value='在校'>在校</Radio>
              </RadioGroup>
            </InputDiv>
             <InputDiv className="chooseMany">
              <label htmlFor="state">期望地点</label>
              <Checkbox.Group name="state" style={{ width: '100%' }} onChange={(value)=>{this.onChange(value)}}>
                <Row>
                  <Col span={8}><Checkbox value="淮南">淮南</Checkbox></Col>
                  <Col span={8}><Checkbox value="蚌埠">蚌埠</Checkbox></Col>
                  <Col span={8}><Checkbox value="合肥">合肥</Checkbox></Col>
                  <Col span={8}><Checkbox value="淮北">淮北</Checkbox></Col>
                  <Col span={8}><Checkbox value="马鞍山">马鞍山</Checkbox></Col>
                </Row>
              </Checkbox.Group>
            </InputDiv>
             <InputDiv>
              <label htmlFor="industry">期待行业</label>
              <Input className="input" name="industry" placeholder="请输入期待行业" allowClear />
            </InputDiv>
             <InputDiv>
              <label htmlFor="occupation">期待职业</label>
              <Input className="input" name="occupation" placeholder="请输入期待职业" allowClear />
            </InputDiv>
             <InputDiv>
              <label htmlFor="salary">期待月薪</label>
              <Select
                name="salary"
                showSearch
                placeholder="请选择期望月薪"
                optionFilterProp="children"
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="2000-4000">2000-4000</Option>
                <Option value="4000-6000">4000-6000</Option>
                <Option value="6000-8000">6000-8000</Option>
              </Select>
            </InputDiv>
             <InputDiv className="chooseMany">
              <label htmlFor="nature">期待性质</label>
              <RadioGroup>
                <Radio name="nature" value='全职'>全职</Radio>
                <Radio name="nature" value='兼职'>兼职</Radio>
                <Radio name="nature" value='实习'>实习</Radio>
              </RadioGroup>
            </InputDiv>
            <InputDiv>
              <Button onClick={this.showProfile}>提交</Button>
              <Button onClick={this.showProfile}>取消</Button>
            </InputDiv>
          </IntentEdit>
        </CSSTransition>
      </IntentArea>
    )
  };
  onChange (checkedValues) {
    console.log('checked = ', checkedValues);
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

export default ResumeIntent;
import React, { PureComponent } from 'react';
import { IntentArea, IntentTitle, IntentDetail, IntentProfile, IntentEdit, InputDiv } from '../style';
import { Input, Radio, Select, Button, Checkbox, Row, Col, message } from 'antd';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { modifyJobseekIntentData, changeModifyIntent, getJobseekIntentData } from '../store/actionCreators';
import { changeAjax } from '../../../common/ajax/store/actionCreators';

class ResumeIntent extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
     fade: 1,
     first: true,
     modifyData: {
       state: '',
       area: '',
       industry: '',
       occupation: '',
       salary: '',
       nature: '',
     },
     submit: false,
     boxNumber: 0
   };
  this.showProfile = this.showProfile.bind(this);
  this.showEdit = this.showEdit.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.handleChangeSalary = this.handleChangeSalary.bind(this);
  this.submitModify = this.submitModify.bind(this);
 }
  render () {
    const RadioGroup = Radio.Group;
    const Option = Select.Option;
    const { salaryList, areaList, intentData, routerId, jobseekId } = this.props;
    const { submit, modifyData, boxNumber } = this.state;
    const newIntentData = intentData.toJS();
    return (
      <IntentArea id="resumeintent">
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
              <p>{newIntentData['state']}</p>
            </IntentDetail>
            <IntentDetail>
              <span>期望从事地点：</span>
              <p>{newIntentData['area']}</p>
            </IntentDetail>
            <IntentDetail>
              <span>期望从事行业：</span>
              <p>{newIntentData['industry']}</p>
            </IntentDetail>
            <IntentDetail>
              <span>期望从事职业：</span>
              <p>{newIntentData['occupation']}</p>
            </IntentDetail>
            <IntentDetail>
              <span>税前期望月薪：</span>
              <p>{newIntentData['salary']}</p>
            </IntentDetail>
            <IntentDetail>
              <span>期望工作性质：</span>
              <p>{newIntentData['nature']}</p>
            </IntentDetail>
            {
              routerId === jobseekId ? <span className="showEdit" onClick={this.showEdit}>
                                    <span className="iconfont">&#xe609;</span>
                                    编辑
                                  </span> :
                                  null
            }
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
              <RadioGroup name="state" onChange={this.handleChange}>
                <Radio name="state" value='在职'>在职</Radio>
                <Radio name="state" value='离职'>离职</Radio>
                <Radio name="state" value='在校'>在校</Radio>
              </RadioGroup>
              { submit && !modifyData['state'] ? <span className="warn">求职状态是必填</span> : null }
            </InputDiv>
             <InputDiv className="chooseMany">
              <label htmlFor="state" className="many">期望地点(最多三项)</label>
              <Checkbox.Group disabled={boxNumber >= 3 ? true : false} name="state" onChange={(value)=>{this.handleChangeArea(value)}}>
                <Row>
                  {
                    areaList.map((item,index)=>{
                      return (
                        <div key={item}>
                          <Col span={8}><Checkbox value={item}>{item}</Checkbox></Col>
                        </div>
                      )
                    })
                  }
                </Row>
              </Checkbox.Group>
            </InputDiv>
             <InputDiv>
              <label htmlFor="industry">期待行业</label>
              <Input className="input" name="industry" onChange={this.handleChange} placeholder="请输入期待行业" allowClear />
            </InputDiv>
             <InputDiv>
              <label htmlFor="occupation">期待职业</label>
              <Input className="input" name="occupation" onChange={this.handleChange} placeholder="请输入期待职业" allowClear />
              { submit && !modifyData['occupation'] ? <span className="warn">期待职业是必填的</span> : null }
            </InputDiv>
             <InputDiv>
              <label htmlFor="salary">期待月薪</label>
              <Select
                name="salary"
                showSearch
                placeholder="请选择期望月薪"
                optionFilterProp="children"
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                onChange={this.handleChangeSalary}
              >
                {
                  salaryList.map((item)=>{
                    return (
                      <Option value={item} key={item}>{item}</Option>
                    )
                  })
                }
              </Select>
            </InputDiv>
             <InputDiv className="chooseMany">
              <label htmlFor="nature">期待性质</label>
              <RadioGroup name="nature" onChange={this.handleChange} >
                <Radio name="nature" value='全职'>全职</Radio>
                <Radio name="nature" value='兼职'>兼职</Radio>
                <Radio name="nature" value='实习'>实习</Radio>
              </RadioGroup>
            </InputDiv>
            <InputDiv>
              <Button onClick={this.submitModify}>提交</Button>
              <Button onClick={this.showProfile}>取消</Button>
            </InputDiv>
          </IntentEdit>
        </CSSTransition>
      </IntentArea>
    )
  };
  showIntent () {
    const { getData, jobSeek } = this.props;
    const NewJobseek = jobSeek.toJS();
    const id = NewJobseek['Id'];
    getData(id);
    this.setState({
      first: false
    })
  };
  componentDidMount () {
    const { loginOrNot, jobSeek } =this.props;
    const newJobseek = jobSeek.toJS();
    const len = Object.keys(newJobseek);
    if (loginOrNot && len.length) {
      this.showIntent();
    }
  }
  componentDidUpdate () {
    const { modifyIntent, backState, loginOrNot, jobSeek } =this.props;
    const { first } = this.state;
    const newJobseek = jobSeek.toJS();
    const len = Object.keys(newJobseek);
    if (loginOrNot && first && len.length) {
      this.showIntent();
    }
    if (modifyIntent === 1) {
      this.setState({
        fade: 1,
        submit: false
      });
      backState();
    }
    else if (modifyIntent === 2) {
      message.error("更新出错");
      backState();
    }
  }
  submitModify () {
    this.setState({
      submit: true
    });
    const newModify = {...this.state.modifyData};
    const { jobSeek, modify, ajaxSend } =this.props;
    let success = true;
    if ( !newModify['state'] ) {
      success = false;
    }
    if( !newModify['occupation'] ) {
      success = false;
    }
    if (success) {
      const NewJobseek = jobSeek.toJS();
      const id = NewJobseek['Id'];
      newModify['Id'] = id;
      modify(newModify);
      ajaxSend();
    }
  }
  handleChangeSalary (e) {
    const value = `${e}`;
    const name = 'salary';
    const newModify = {...this.state.modifyData};
    newModify[name] = value;
    this.setState({
      modifyData: newModify
    })
  };
  handleChangeArea (area) {
    const name = 'area';
    const newModify = {...this.state.modifyData};
    let areaStr = '';
    for (let i =0;i<area.length;i++) {
      areaStr=areaStr + area[i] + ' ';
    }
    newModify[name] = areaStr;
    this.setState({
      modifyData: newModify,
      boxNumber: area.length
    })
  };
  handleChange (e) {
    const value = e.target.value;
    const name = e.target.name;
    const newModify = {...this.state.modifyData};
    newModify[name] = value;
    this.setState({
      modifyData: newModify
    })
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

const mapState = (state) => ({
  salaryList: state.getIn(['home','salaryList']),
  areaList: state.getIn(['home','areaList']),
  jobSeek: state.getIn(['login','jobSeek']),
  modifyIntent: state.getIn(['resume','modifyIntent']),
  intentData: state.getIn(['resume','intentData']),
  loginOrNot: state.getIn(['login','loginOrNot']),
  routerId: state.getIn(['resume','routerId']),
  jobseekId: state.getIn(['login','jobseekId'])
});

const mapDispatch = (dispatch) => {
  return {
    modify (values) {
      dispatch(modifyJobseekIntentData(values));
    },
    backState () {
      dispatch(changeModifyIntent(0));
    },
    getData (Id) {
      dispatch(getJobseekIntentData(Id));
    },
    ajaxSend () {
      dispatch(changeAjax('load'));
    }
  }
};

export default connect(mapState,mapDispatch)(ResumeIntent);
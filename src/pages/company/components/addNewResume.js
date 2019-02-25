import React, { PureComponent } from 'react';
import { InputDiv, NewArea, NewInputs, InputTitle, PositionPicker } from '../style';
import { Button, Input, Select, InputNumber, Cascader } from 'antd';
import { connect } from 'react-redux';
import { showOrHide, addNewResumeData } from '../store/actionCreators';
import { changeAjax } from '../../../common/ajax/store/actionCreators';

class AddNewResume extends PureComponent {
  constructor (props) {
    super(props);
    this.state={
      resumeData: {
        title: '',
        position: '',
        salary: '',
        education: '',
        experience: '',
        numbers: 1,
        area: '',
        detailArea: '',
        infomation: '',
        request: '',
        benefits: ''
      },
      submit: false,
      positionState: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangePosition = this.handleChangePosition.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.submitData = this.submitData.bind(this);
  }
  render () {
    const Option = Select.Option;
    const { TextArea } = Input;
    const { submit, resumeData, positionState } = this.state;
    const { showEdit, positionList, salaryList, areaList, experienceList } = this.props;
    const plist = positionList.toJS();
    return (
          <NewArea>
            <NewInputs>
              <InputTitle>
                发布新的招聘启事
                <i className="iconfont" onClick={()=>showEdit(false)}>&#xe603;</i>
              </InputTitle>
              <InputDiv className="marTop">
                <label htmlFor="title">职位标题</label>
                <Input className="input" name="title" onChange={this.handleChange} placeholder="请输入职位标题" allowClear />
                { submit && !resumeData['title'] ? <span className="warn">招聘启事的标题必填</span> : null }
              </InputDiv>
              <PositionPicker>
                <label htmlFor="position">职位</label>
                <Cascader name="position" options={plist} onChange={this.handleChangePosition} changeOnSelect placeholder="请选择职位"/>
                { submit && !resumeData['position'] ? <span className="warn">招聘的职位必选</span> : null }
                { submit && !positionState ? <span className="warn">招聘的职位未选择完全</span> : null }
              </PositionPicker>
              <InputDiv className="marTop">
                <label htmlFor="salary">薪资</label>
                <Select
                  name="salary"
                  showSearch
                  placeholder="请选择职位工资"
                  optionFilterProp="children"
                  filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                  className="selectMoney"
                  onChange={(e)=>this.handleChangeSelect('salary',e)}
                >
                  {
                    salaryList.map((item)=>{
                      return (
                        <Option key={item} value={item}>{item}</Option>
                      )
                    })
                  }
                </Select>
                { submit && !resumeData['salary'] ? <span className="warn">职位工资必选</span> : null }
              </InputDiv>
              <InputDiv className="marTop">
                <label htmlFor="education">学历</label>
                <Select
                  name="education"
                  showSearch
                  placeholder="请选择学历要求"
                  optionFilterProp="children"
                  filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                  onChange={(e)=>this.handleChangeSelect('education',e)}
                >
                  <Option value="专职">专职</Option>
                  <Option value="高中">高中</Option>
                  <Option value="大专">大专</Option>
                  <Option value="本科">本科</Option>
                  <Option value="研究生">研究生</Option>
                  <Option value="博士">博士</Option>
                </Select>
                { submit && !resumeData['education'] ? <span className="warn">学历要求必选</span> : null }
              </InputDiv>
              <InputDiv className="marTop">
                  <label htmlFor="experience">经验</label>
                  <Select
                    name="experience"
                    showSearch
                    placeholder="请选择经验要求"
                    optionFilterProp="children"
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    onChange={(e)=>this.handleChangeSelect('experience',e)}
                  >
                    {
                      experienceList.map((item)=>{
                        return (
                          <Option key={item} value={item}>{item}</Option>
                        )
                      })
                    }
                  </Select>
                  { submit && !resumeData['experience'] ? <span className="warn">经验要求必填</span> : null }
                </InputDiv>
                <InputDiv className="marTop">
                  <label htmlFor="numbers">人数</label>
                  <InputNumber name="numbers" min={1} max={100} defaultValue={1} onChange={this.handleChangeNumber}/>
                  { submit && !resumeData['numbers'] ? <span className="warn">人数要求必填</span> : null }
                </InputDiv>
                <InputDiv className="marTop">
                  <label htmlFor="area">地区</label>
                  <Select
                    name="area"
                    showSearch
                    placeholder="请选择地区"
                    optionFilterProp="children"
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    onChange={(e)=>this.handleChangeSelect('area',e)}
                  >
                    {
                      areaList.map((item)=>{
                        return (
                          <Option key={item} value={item}>{item}</Option>
                        )
                      })
                    }
                  </Select>
                  { submit && !resumeData['experience'] ? <span className="warn">地区必填</span> : null }
                </InputDiv>
                <InputDiv className="marTop">
                  <label htmlFor="detailArea">详细地址</label>
                  <Input className="input" name="detailArea" onChange={this.handleChange} placeholder="请输入工作详细地址" allowClear />
                  { submit && !resumeData['detailArea'] ? <span className="warn">详细地址必填</span> : null }
                </InputDiv>
                <br/>
                <InputDiv className="chooseMany marTop">
                  <label htmlFor="infomation">职位信息</label>
                  <TextArea rows={6} name="infomation" onChange={this.handleChange} placeholder="请输入在此项目工作中的具体描述"/>
                  { submit && !resumeData['infomation'] ? <span className="warn">职位信息必填</span> : null }
                </InputDiv>
                <InputDiv className="chooseMany marTop">
                  <label htmlFor="request">职位要求</label>
                  <TextArea rows={6} name="request" onChange={this.handleChange} placeholder="请输入在此项目工作中的具体描述"/>
                  { submit && !resumeData['request'] ? <span className="warn">职位要求必填</span> : null }
                </InputDiv>
                <InputDiv className="chooseMany marTop">
                  <label htmlFor="benefits">公司福利</label>
                  <TextArea rows={6} name="benefits" onChange={this.handleChange} placeholder="请输入在此项目工作中的具体描述"/>
                  { submit && !resumeData['benefits'] ? <span className="warn">公司福利必填</span> : null }
                </InputDiv>
                <InputDiv className="center">
                  <Button onClick={this.submitData}>添加</Button>
                  <Button onClick={()=>showEdit(false)}>取消</Button>
                </InputDiv>
            </NewInputs>
          </NewArea>
    )
  };
  submitData () {
    this.setState({
      submit: true
    });
    const { positionState } = this.state;
    const { company, addNewData, ajaxSend } = this.props;
    const newCompany = company.toJS();
    const newResume = {...this.state.resumeData};
    let success = true;
    for (let item in newResume) {
      if (newResume[item]) {
        continue;
      }
      else {
        success = false;
      }
    }
    if (!positionState) {
      success = false;
    }
    if (success) {
      newResume['companyName'] = newCompany['name'];
      newResume['companyId'] = newCompany['Id'];
      newResume['numbers'] = newResume['numbers'] + '人';
      let date1 = new Date();
      let dateString = date1.getFullYear() + '-' + (date1.getMonth()+1) + '-' + date1.getDate();
      newResume['time'] = dateString;
      addNewData(newResume);
      ajaxSend();
    }
  }
  handleChange (e) {
    const value = e.target.value;
    const name = e.target.name;
    const newResume = {...this.state.resumeData};
    newResume[name] = value;
    this.setState({
      resumeData: newResume
    })
  };
  handleChangePosition (value) {
    const name = 'position';
    let newPositionState = true;
    if (value.length<3 && value.length>0) {
      newPositionState = false;
    }
    let positionString = value[0] + '-' + value[1] + '-' + value[2];
    const newResume = {...this.state.resumeData};
    newResume[name] = positionString;
    this.setState({
      resumeData: newResume,
      positionState: newPositionState
    })
  };
  handleChangeSelect (name,e) {
    const value = `${e}`;
    const newResume = {...this.state.resumeData};
    newResume[name] = value;
    this.setState({
      resumeData: newResume
    })
  };
  handleChangeNumber (e) {
    const value = e;
    const name = 'numbers';
    const newResume = {...this.state.resumeData};
    newResume[name] = value;
    this.setState({
      resumeData: newResume
    })
  };
};

const mapState = (state) => ({
  company: state.getIn(['login','company']),
  positionList: state.getIn(['home','positionList']),
  salaryList: state.getIn(['home','salaryList']),
  areaList: state.getIn(['home','areaList']),
  experienceList: state.getIn(['home','experienceList'])
});

const mapDispatch = (dispatch) => {
  return {
    showEdit (show) {
      dispatch(showOrHide(show));
      if (!show) {
        window.onmousewheel = document.onmousewheel= () => {return true};
      }
    },
    addNewData (values) {
      dispatch(addNewResumeData(values));
    },
    ajaxSend () {
      dispatch(changeAjax(true));
    }
  }
};

export default connect(mapState,mapDispatch)(AddNewResume);

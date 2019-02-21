import React, { PureComponent } from 'react';
import { EducateArea, EducateTitle, EducateButton, EducateList, InputDiv, EducateItem, EducateEdit } from '../style';
import { Popconfirm, message, Button, Input, DatePicker, Select } from 'antd';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { getJobseekEducateData, changeModifyEducate, modifyJobseekEducateData, deleteJobseekEducateData } from '../store/actionCreators';
import { changeAjax } from '../../../common/ajax/store/actionCreators';

class ResumeEducate extends PureComponent {
  constructor (props) {
      super(props);
      this.state = {
        fade: 1,
        first: true,
        resure: '确认要删除此条',
        modifyData: {
          school: '',
          education: '',
          major: '',
          time: ''
        },
        submit: false
     };
    this.showProfile = this.showProfile.bind(this);
    this.showEdit = this.showEdit.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeEducate = this.handleChangeEducate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitModify = this.submitModify.bind(this);
  }
  render () {
    const InputGroup = Input.Group;
    const Option = Select.Option;
    const { educateData } = this.props;
    const { submit, modifyData, resure } = this.state;
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
              educateData.map((item,index)=>{
                return (
                  <EducateItem key={item.get('Id')}>
                    <span className="index">{++index}、</span>
                    <Popconfirm placement="rightTop" title={resure} onConfirm={()=>{this.handleDelete(item.get('Id'))}} okText="Yes" cancelText="No">
                      <span className="iconfont">&#xe603;</span>
                    </Popconfirm>
                    <div className="container">
                      <span>学校名称：</span><p>{item.get('school')}</p>
                    </div>
                    <div className="container">
                      <span>学历：</span><p>{item.get('education')}</p>
                    </div>
                    <div className="container">
                      <span>专业：</span><p>{item.get('major')}</p>
                    </div>
                    <div className="container">
                      <span>毕业时间：</span><p>{item.get('time')}</p>
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
              <label htmlFor="school">学校名称</label>
              <Input className="input" name="school" onChange={this.handleChange} placeholder="请输入学校名称" allowClear />
              { submit && !modifyData['school'] ? <span className="warn">学校名称必填</span> : null }
            </InputDiv>
            <InputDiv>
              <label htmlFor="education">学历</label>
              <Select
                name="education"
                showSearch
                placeholder="请选择学历"
                optionFilterProp="children"
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                onChange={this.handleChangeEducate}
              >
                <Option value="高中">高中</Option>
                <Option value="专职">专职</Option>
                <Option value="大专">大专</Option>
                <Option value="本科">本科</Option>
                <Option value="研究生">研究生</Option>
                <Option value="博士">博士</Option>
              </Select>
              { submit && !modifyData['education'] ? <span className="warn">学历必填</span> : null }
            </InputDiv>
            <InputDiv>
              <label htmlFor="major">专业</label>
              <Input className="input" name="major" onChange={this.handleChange} placeholder="请输入专业" allowClear />
              { submit && !modifyData['major'] ? <span className="warn">专业必填</span> : null }
            </InputDiv>
            <InputDiv>
              <label htmlFor="time">毕业时间</label>
              <InputGroup compact>
                <DatePicker name="time" onChange={this.handleChangeDate} placeholder="请选择时间"/>
              </InputGroup>
              { submit && !modifyData['time'] ? <span className="warn">毕业时间必填</span> : null }
            </InputDiv>
            <InputDiv className="chooseMany">
              <Button onClick={this.submitModify}>添加</Button>
              <Button onClick={this.showProfile}>取消</Button>
            </InputDiv>
          </EducateEdit>
        </CSSTransition>
      </EducateArea>
    )
  };
  showEducate () {
    const { getData, jobSeek } = this.props;
    const NewJobseek = jobSeek.toJS();
    const id = NewJobseek['Id'];
    getData(id);
    this.setState({
      first: false
    })
  };
  componentDidMount () {
    const { loginOrNot } =this.props;
    if (loginOrNot) {
      this.showEducate();
    }
  };
  componentDidUpdate () {
    const { loginOrNot, modifyEducate, backState } =this.props;
    const { first } = this.state;
    if (loginOrNot && first) {
      this.showEducate();
    }
    if (modifyEducate === 1) {
      this.setState({
        fade: 1,
        submit: false
      });
      backState();
    }
    else if (modifyEducate === 2) {
      alert("更新出错");
      backState();
    }
  };
  handleDelete (id) {
    message.info('删除中...');
    const { jobSeek, deleteItem, ajaxSend } = this.props;
    const NewJobseek = jobSeek.toJS();
    const Id = NewJobseek['Id'];
    deleteItem(Id,id);
    ajaxSend();
  };
  submitModify () {
    this.setState({
      submit: true
    });
    const newModify = {...this.state.modifyData};
    const { jobSeek, modify, ajaxSend } =this.props;
    let success = true;
    for (let item in newModify) {
      if (newModify[item]) {
        continue;
      }
      else {
        success = false;
      }
    }
    if (success) {
      const NewJobseek = jobSeek.toJS();
      const id = NewJobseek['Id'];
      newModify['Id'] = id;
      modify(newModify);
      ajaxSend();
    }
  };
  handleChangeEducate (e) {
    const value = `${e}`;
    const name = 'education';
    const newModify = {...this.state.modifyData};
    newModify[name] = value;
    this.setState({
      modifyData: newModify
    })
  };
  handleChangeDate (date,dateString) {
    const value = dateString;
    const name = 'time';
    const newModify = {...this.state.modifyData};
    newModify[name] = value;
    this.setState({
      modifyData: newModify
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
  educateData: state.getIn(['resume','educateData']),
  loginOrNot: state.getIn(['login','loginOrNot']),
  jobSeek: state.getIn(['login','jobSeek']),
  modifyEducate: state.getIn(['resume','modifyEducate'])
});

const mapDispatch = (dispatch) => {
  return {
    getData (Id) {
      dispatch(getJobseekEducateData(Id));
    },
    modify (values) {
      dispatch(modifyJobseekEducateData(values));
    },
    backState () {
      dispatch(changeModifyEducate(0));
    },
    ajaxSend () {
      dispatch(changeAjax(true));
    },
    deleteItem (Id,id) {
      dispatch(deleteJobseekEducateData(Id,id));
    }
  }
};

export default connect(mapState,mapDispatch)(ResumeEducate);

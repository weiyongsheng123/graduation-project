import React, { PureComponent } from 'react';
import { WorkArea, WorkTitle, WorkButton, WorkList, InputDiv, WorkItem, WorkEdit } from '../style';
import { Popconfirm, message, Button, Input, Select } from 'antd';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { getJobseekWorkData, changeModifyWork, modifyJobseekWorkData, deleteJobseekWorkData } from '../store/actionCreators';
import { changeAjax } from '../../../common/ajax/store/actionCreators';

class ResumeWork extends PureComponent {
  constructor (props) {
      super(props);
      this.state = {
        fade: 1,
        first: true,
        resure: '确认要删除此条',
        modifyData: {
          company: '',
          time: '',
          position: '',
          salary: ''
        },
        submit: false
     };
    this.showProfile = this.showProfile.bind(this);
    this.showEdit = this.showEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
    this.submitModify = this.submitModify.bind(this);
  }
  render () {
    const Option = Select.Option;
    const { workData, routerId, jobseekId } = this.props;
    const { submit, modifyData, resure } = this.state;
    return (
      <WorkArea id="resumework">
        <WorkTitle>工作经验</WorkTitle>
        {
          routerId === jobseekId ? <WorkButton>
                               <Button type="dashed" onClick={this.showEdit}>
                                 <i className="iconfont">&#xe601;</i>
                                 添加工作经验
                               </Button>
                             </WorkButton> :
                              null
        }
        <CSSTransition
            in={ this.state.fade === 1 }
            timeout={1000}
            classNames='fade'
            unmountOnExit
        >
          <WorkList>
            {
              workData.map((item,index)=>{
                return (
                  <WorkItem key={item.get('Id')}>
                    <span className="index">{++index}、</span>
                    {
                      routerId === jobseekId ? <Popconfirm placement="rightTop" title={resure} onConfirm={()=>{this.handleDelete(item.get('Id'))}} okText="Yes" cancelText="No">
                                           <span className="iconfont">&#xe603;</span>
                                         </Popconfirm> :
                                         null
                    }
                    <div className="container">
                      <span>公司名：</span><p>{item.get('company')}</p>
                    </div>
                    <div className="container">
                      <span>工作时长：</span><p>{item.get('time')}</p>
                    </div>
                    <div className="container">
                      <span>工作职位：</span><p>{item.get('position')}</p>
                    </div>
                    <div className="container">
                      <span>薪资：</span><p>{item.get('salary')}</p>
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
              <label htmlFor="company">公司名</label>
              <Input className="input" name="company" onChange={this.handleChange} placeholder="请输入公司名" allowClear />
              { submit && !modifyData['company'] ? <span className="warn">公司名称必填</span> : null }
            </InputDiv>
            <InputDiv>
              <label htmlFor="time">工作时长</label>
              <Select
                name="time"
                showSearch
                placeholder="请选择工作时长"
                optionFilterProp="children"
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                onChange={this.handleChangeTime}
              >
                <Option value="1-3个月">1-3个月</Option>
                <Option value="3-6个月">3-6个月</Option>
                <Option value="6个月-1年">6个月-1年</Option>
                <Option value="1年-3年">1年-3年</Option>
                <Option value="3年-5年">3年-5年</Option>
                <Option value="5年以上">5年以上</Option>
              </Select>
              { submit && !modifyData['time'] ? <span className="warn">工作时长必填</span> : null }
            </InputDiv>
            <InputDiv>
              <label htmlFor="position">工作职位</label>
              <Input className="input" name="position" onChange={this.handleChange} placeholder="请输入工作职位" allowClear />
              { submit && !modifyData['position'] ? <span className="warn">工作职位必填</span> : null }
            </InputDiv>
            <InputDiv>
              <label htmlFor="salary">工作薪资</label>
              <Input className="input" name="salary" onChange={this.handleChange} placeholder="请输入工作薪资（月工资）" allowClear />
              { submit && !modifyData['salary'] ? <span className="warn">工作薪资必填</span> : null }
            </InputDiv>
            <InputDiv>
              <Button onClick={this.submitModify}>添加</Button>
              <Button onClick={this.showProfile}>取消</Button>
            </InputDiv>
          </WorkEdit>
        </CSSTransition>
      </WorkArea>
    )
  };
  showWork () {
    const { getData, jobSeek } = this.props;
    const NewJobseek = jobSeek.toJS();
    const id = NewJobseek['Id'];
    getData(id);
    this.setState({
      first: false
    })
  };
  componentDidMount () {
    const { loginOrNot, jobSeek } = this.props;
    const newJobseek = jobSeek.toJS();
    const len = Object.keys(newJobseek);
    if (loginOrNot && len.length) {
      this.showWork();
    }
  };
  componentDidUpdate () {
    const { loginOrNot, modifyWork, backState, jobSeek } = this.props;
    const { first } = this.state;
    const newJobseek = jobSeek.toJS();
    const len = Object.keys(newJobseek);
    if (loginOrNot && first && len.length) {
      this.showWork();
    }
    if (modifyWork === 1) {
      this.setState({
        fade: 1,
        submit: false
      });
      backState();
    }
    else if (modifyWork === 2) {
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
  }
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
  }
  handleChangeTime (e) {
    const value = `${e}`;
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
  workData: state.getIn(['resume','workData']),
  loginOrNot: state.getIn(['login','loginOrNot']),
  jobSeek: state.getIn(['login','jobSeek']),
  modifyWork: state.getIn(['resume','modifyWork']),
  routerId: state.getIn(['resume','routerId']),
  jobseekId: state.getIn(['login','jobseekId'])
});

const mapDispatch = (dispatch) => {
  return {
    getData (Id) {
      dispatch(getJobseekWorkData(Id));
    },
    modify (values) {
      dispatch(modifyJobseekWorkData(values));
    },
    backState () {
      dispatch(changeModifyWork(0));
    },
    ajaxSend () {
      dispatch(changeAjax('load'));
    },
    deleteItem (Id,id) {
      dispatch(deleteJobseekWorkData(Id,id));
    }
  }
};

export default connect(mapState,mapDispatch)(ResumeWork);

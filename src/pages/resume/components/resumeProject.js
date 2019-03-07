import React, { PureComponent } from 'react';
import { ProjectArea, ProjectTitle, ProjectButton, ProjectList, InputDiv, ProjectItem, ProjectEdit } from '../style';
import { Popconfirm, message, Button, Input, DatePicker } from 'antd';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { getJobseekProjectData, changeModifyProject, modifyJobseekProjectData, deleteJobseekProjectData } from '../store/actionCreators';
import { changeAjax } from '../../../common/ajax/store/actionCreators';

class ResumeProject extends PureComponent {
  constructor (props) {
      super(props);
      this.state = {
        fade: 1,
        first: true,
        resure: '确认要删除此条',
        modifyData: {
          project: '',
          time: '',
          duty: '',
          desc: ''
        },
        submit: false
     };
    this.showProfile = this.showProfile.bind(this);
    this.showEdit = this.showEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitModify = this.submitModify.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
  }
  render () {
    const { TextArea } = Input;
    const { RangePicker } = DatePicker;
    const { projectData, routerId, jobseekId } = this.props;
    const { submit, modifyData, resure } = this.state;
    return (
      <ProjectArea id="resumeproject">
        <ProjectTitle>项目经验</ProjectTitle>
        {
          routerId === jobseekId ? <ProjectButton>
                               <Button type="dashed" onClick={this.showEdit}>
                                 <i className="iconfont">&#xe601;</i>
                                 添加项目经验
                               </Button>
                             </ProjectButton> :
                              null
        }
        <CSSTransition
            in={ this.state.fade === 1 }
            timeout={1000}
            classNames='fade'
            unmountOnExit
          >
          <ProjectList>
            {
              projectData.map((item,index)=>{
                return (
                  <ProjectItem key={item.get('Id')}>
                    <span className="index">{++index}、</span>
                    {
                      routerId === jobseekId ? <Popconfirm placement="rightTop" title={resure} onConfirm={()=>{this.handleDelete(item.get('Id'))}} okText="Yes" cancelText="No">
                                           <span className="iconfont">&#xe603;</span>
                                         </Popconfirm> :
                                         null
                    }
                    <div className="container">
                      <span>项目名称：</span><p>{item.get('project')}</p>
                    </div>
                    <div className="container">
                      <span>起止时间：</span><p>{item.get('time')}</p>
                    </div>
                    <div className="container">
                      <span>项目职责：</span><p>{item.get('duty')}</p>
                    </div>
                    <div className="container twoLine">
                      <span>项目描述：</span><p>{item.get('desc')}</p>
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
              <label htmlFor="project">项目名称</label>
              <Input className="input" name="project" onChange={this.handleChange} placeholder="请输入项目名称" allowClear />
              { submit && !modifyData['project'] ? <span className="warn">项目名称必填</span> : null }
            </InputDiv>
            <InputDiv>
              <label htmlFor="time">起止时间</label>
              <RangePicker name="time" onChange={this.handleChangeDate} placeholder={['起始日期', '结束日期']}/>
              { submit && !modifyData['time'] ? <span className="warn">项目起止时间必填</span> : null }
            </InputDiv>
            <InputDiv>
              <label htmlFor="duty">项目职责</label>
              <Input className="input" name="duty" onChange={this.handleChange} placeholder="请输入项目中负责任务" allowClear />
              { submit && !modifyData['duty'] ? <span className="warn">项目职责必填</span> : null }
            </InputDiv>
            <InputDiv className="chooseMany">
              <label htmlFor="desc">项目描述</label>
              <TextArea rows={4} name="desc" onChange={this.handleChange} placeholder="请输入在此项目工作中的具体描述"/>
              { submit && !modifyData['desc'] ? <span className="warn">项目描述必填</span> : null }
            </InputDiv>
            <InputDiv>
              <Button onClick={this.submitModify}>添加</Button>
              <Button onClick={this.showProfile}>取消</Button>
            </InputDiv>
          </ProjectEdit>
        </CSSTransition>
      </ProjectArea>
    )
  };
  showProject () {
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
      this.showProject();
    }
  };
  componentDidUpdate () {
    const { loginOrNot, modifyProject, jobSeek, backState } =this.props;
    const { first } = this.state;
    const newJobseek = jobSeek.toJS();
    const len = Object.keys(newJobseek);
    if (loginOrNot && first && len.length) {
      this.showProject();
    }
    if (modifyProject === 1) {
      this.setState({
        fade: 1,
        submit: false
      });
      backState();
    }
    else if (modifyProject === 2) {
      message.error("更新出错");
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
  handleChange (e) {
    const value = e.target.value;
    const name = e.target.name;
    const newModify = {...this.state.modifyData};
    newModify[name] = value;
    this.setState({
      modifyData: newModify
    })
  };
  handleChangeDate (date, dateString) {
    let timeString = '';
    timeString = dateString[0] + ' 至 ' + dateString[1];
    const value = timeString;
    const name = 'time';
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
  projectData: state.getIn(['resume','projectData']),
  loginOrNot: state.getIn(['login','loginOrNot']),
  jobSeek: state.getIn(['login','jobSeek']),
  modifyProject: state.getIn(['resume','modifyProject']),
  routerId: state.getIn(['resume','routerId']),
  jobseekId: state.getIn(['login','jobseekId'])
});

const mapDispatch = (dispatch) => {
  return {
    getData (Id) {
      dispatch(getJobseekProjectData(Id));
    },
    modify (values) {
      dispatch(modifyJobseekProjectData(values));
    },
    backState () {
      dispatch(changeModifyProject(0));
    },
    ajaxSend () {
      dispatch(changeAjax('load'));
    },
    deleteItem (Id,id) {
      dispatch(deleteJobseekProjectData(Id,id));
    }
  }
};

export default connect(mapState,mapDispatch)(ResumeProject);

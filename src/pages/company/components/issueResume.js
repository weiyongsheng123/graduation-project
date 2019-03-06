import React, { PureComponent, Fragment } from 'react';
import { IssueArea, IssueTitle, IssueList } from '../style';
import { Table, Divider, Popconfirm, message } from 'antd';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { showOrHide, getReleaseResume, deleteReleaseResumeItem, changeReleaseResume } from '../store/actionCreators';
import { changeAjax } from '../../../common/ajax/store/actionCreators';

class CompanyIssue extends PureComponent {
  constructor (props) {
      super(props);
      this.state = {
        resure: '确认要删除此条',
        first: true,
        page: 1
      }
    }
  render () {
    const { showEdit, releaseResume, routerId, companyId } = this.props;
    const { resure } = this.state;
    const data = releaseResume.toJS();
    const columns = [{
      title: '职位标题',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => <Link to={"/positions/"+record.resumeId}>{text}</Link>
      }, {
        title: '职位类型',
        dataIndex: 'position',
        key: 'jobseekName',
      }, {
        title: '薪资',
        dataIndex: 'salary',
        key: 'salary',
      }, {
        title: '学历',
        dataIndex: 'education',
        key: 'education'
      }, {
        title: '经验',
        dataIndex: 'experience',
        key: 'experience'
      }, {
        title: '地区',
        dataIndex: 'area',
        key: 'areae'
      }, {
        title: '人数',
        dataIndex: 'numbers',
        key: 'numbers'
      }, {
        title: '发布公司',
        dataIndex: 'companyName',
        key: 'companyName'
      }, {
        title: '发布时间',
        dataIndex: 'time',
        key: 'time',
      }, {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <span onClick={()=>this.upTop(record.Id)}>置顶</span>
            {
              routerId === companyId ? <Fragment>
                                         <Divider type="vertical" />
                                         <Popconfirm placement="rightTop" title={resure} onCancel={(e)=>{e.stopPropagation();e.preventDefault();}} onConfirm={(e)=>{this.handleDelete(record.Id,e)}} okText="Yes" cancelText="No">
                                           <span>删除</span>
                                         </Popconfirm>
                                       </Fragment> :
                                       null
            }
          </span>
        ),
    }];
    const setPage = {
      defaultPageSize: 5,
      total: data.length,
      showTotal: (total, range) => `${range[0]}-${range[1]} 条，共 ${total} 条`,
      onChange: this.handleChange
    }
    return (
      <IssueArea>
        <IssueTitle>
          <span className="left">
            <i className="iconfont">&#xe626;</i>
            已发布的简历
          </span>
          {
            routerId === companyId ? <span className="right" onClick={()=>showEdit(true)}>
                                 <i className="iconfont">&#xe601;</i>
                                 发布新的
                               </span> :
                               null
          }
        </IssueTitle>
        <IssueList>
          <Table columns={columns} pagination={setPage} dataSource={data} />
        </IssueList>
      </IssueArea>
    )
  };
  showResumeItem () {
    const { loginOrNot, company, loadResumeItem, releaseResume, companyId } = this.props;
    const { first } = this.state;
    let Id = this.props.match.params.Id;
    const newCompany = company.toJS();
    const len = Object.keys(newCompany);
    const newRelease = releaseResume.toJS();
    const len1 = Object.keys(newRelease);
    if (loginOrNot && len.length && first && (!len1.length || Id !== companyId || Id !== newCompany['Id'])) {
      loadResumeItem(Id);
      this.setState({
        first: false
      })
    }
  };
  componentDidMount () {
    this.showResumeItem();
  };
  componentDidUpdate () {
    this.showResumeItem();
  };
  handleChange = (page) => {
    this.setState({
      page: page
    });
  };
  upTop (Id) {
    const { changeIndex, releaseResume} = this.props;
    const { page } = this.state;
    let newRelease = releaseResume.toJS();
    let index = 0;
    for (var i = 0; i<newRelease.length;i++) {
      if (newRelease[i]['Id']===Id) {
        index = i;
        break;
      }
    }
    let upItem = newRelease[index];
    newRelease.splice(index,1);
    let newIndex = (page-1)*5;
    newRelease.splice(newIndex,0,upItem);
    changeIndex(newRelease);
  };
  handleDelete (id,e) {
    e.stopPropagation();
    e.preventDefault();
    message.info('删除中...');
    const { company, deleteItem, ajaxSend } = this.props;
    const NewCompany = company.toJS();
    const Id = NewCompany['Id'];
    deleteItem(Id,id);
    ajaxSend();
  };
};

const mapState = (state) => ({
  loginOrNot: state.getIn(['login','loginOrNot']),
  company: state.getIn(['login','company']),
  releaseResume: state.getIn(['company','releaseResume']),
  routerId: state.getIn(['company','routerId']),
  companyId: state.getIn(['login','companyId'])
});

const mapDispatch = (dispatch) => {
  return {
    showEdit (show) {
      dispatch(showOrHide(show));
      if (show) {
        window.onmousewheel = document.onmousewheel= () => {return false};
      }
    },
    loadResumeItem (Id) {
      dispatch(getReleaseResume(Id));
    },
    deleteItem (Id,id) {
      dispatch(deleteReleaseResumeItem(Id,id));
    },
    ajaxSend () {
      dispatch(changeAjax('throw'));
    },
    changeIndex (values) {
      dispatch(changeReleaseResume(values));
    }
  }
};

export default connect(mapState,mapDispatch)(withRouter(CompanyIssue));

import React, { PureComponent, Fragment } from 'react';
import { ReseriveArea, ReseriveTitle, ReseriveList } from '../style';
import { connect } from 'react-redux';
import { Table, Divider, Popconfirm, message } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { getReseriveResumeList, deleteReseriveResumeItem, changeReseriveResume } from '../store/actionCreators';
import { changeAjax } from '../../../common/ajax/store/actionCreators';

class CompanyReserive extends PureComponent {
  constructor (props) {
      super(props);
      this.state = {
        resure: '确认要删除此条',
        first: true,
        page: 1
      }
    }
  render () {
    const { reseriveList, routerId, companyId } = this.props;
    const { resure } = this.state;
    const data = reseriveList.toJS();
    const columns = [{
      title: '职位名',
      dataIndex: 'resumeName',
      key: 'resumenName',
      render: (text, record) => <Link to={"/positions/"+record.resumeId}>{text}</Link>
      }, {
        title: '申请人',
        dataIndex: 'jobseekName',
        key: 'jobseekName',
        render: (text, record) => <Link to={"/resume/"+record.jobseekId}>{text}</Link>
      }, {
        title: '性别',
        dataIndex: 'jobseekSex',
        key: 'jobseekSex',
      }, {
        title: '年龄',
        dataIndex: 'jobseekAge',
        key: 'jobseekAge'
      }, {
        title: '发布公司',
        dataIndex: 'companyName',
        key: 'companyName'
      }, {
        title: '申请时间',
        dataIndex: 'time',
        key: 'time',
      }, {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <span onClick={()=>this.upTop(record.Id)}>置顶</span>
            <Divider type="vertical" />
            <Popconfirm placement="rightTop" title={resure} onCancel={(e)=>{e.stopPropagation();e.preventDefault();}} onConfirm={(e)=>{this.handleDelete(record.Id,e)}} okText="Yes" cancelText="No">
              <span>删除</span>
            </Popconfirm>
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
      <ReseriveArea>
        {
          routerId === companyId ? 
           <Fragment>
             <ReseriveTitle>
               <span className="iconfont">&#xe629;</span>
               已收到的申请
             </ReseriveTitle>
             <ReseriveList>
               <Table columns={columns} pagination={setPage} dataSource={data} />
             </ReseriveList>
           </Fragment> :
           null
        }
      </ReseriveArea>
    )
  };
  handleChange = (page) => {
    this.setState({
      page: page
    });
  };
  upTop (Id) {
    const { changeIndex, reseriveList } = this.props;
    const { page } = this.state;
    let newReserive = reseriveList.toJS();
    let index = 0;
    for (var i = 0; i<newReserive.length;i++) {
      if (newReserive[i]['Id']===Id) {
        index = i;
        break;
      }
    }
    let upItem = newReserive[index];
    newReserive.splice(index,1);
    let newIndex = (page-1)*5;
    newReserive.splice(newIndex,0,upItem);
    changeIndex(newReserive);
  };
  handleDelete (id,e) {
    message.info('删除中...');
    e.preventDefault();
    e.stopPropagation();
    const { company, deleteItem, ajaxSend } = this.props;
    const NewCompany = company.toJS();
    const Id = NewCompany['Id'];
    deleteItem(Id,id);
    ajaxSend();
  };
  getReserive () {
    const { getReseriveResume } = this.props;
    let companyId = this.props.match.params.Id;
    getReseriveResume(companyId);
    this.setState({
      first: false
    })
  };
  componentDidMount () {
    const { loginOrNot } = this.props;
    if ( loginOrNot ) {
      this.getReserive();
    }
  };
  componentDidUpdate () {
    const { loginOrNot } = this.props;
    const { first } = this.state;
    if ( first && loginOrNot ) {
      this.getReserive();
    }
  };
};

const mapState = (state) => ({
  loginOrNot: state.getIn(['login','loginOrNot']),
  company: state.getIn(['login','company']),
  reseriveList: state.getIn(['company','reseriveList']),
  routerId: state.getIn(['company','routerId']),
  companyId: state.getIn(['login','companyId'])
});

const mapDispatch = (dispatch) => {
  return {
    getReseriveResume (companyId) {
      dispatch(getReseriveResumeList(companyId));
    },
    deleteItem (Id,id) {
      dispatch(deleteReseriveResumeItem(Id,id));
    },
    ajaxSend () {
      dispatch(changeAjax('throw'));
    },
    changeIndex (values) {
      dispatch(changeReseriveResume(values));
    }
  }
};

export default connect(mapState,mapDispatch)(withRouter(CompanyReserive));

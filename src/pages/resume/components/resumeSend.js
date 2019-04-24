import React, { PureComponent } from 'react';
import { SendArea } from '../style';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Table, Divider, Popconfirm, message } from 'antd';
import { getSendResumeList, deleteSendResumeItem, changeSendResumeList } from '../store/actionCreators';
import { changeAjax } from '../../../common/ajax/store/actionCreators';

class ResumeSend extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      resure: '确认要删除此条',
      first: true,
      page: 1
    }
  }
  render () {
    const { sendResumeList } = this.props;
    const { resure } = this.state;
    const data = sendResumeList.toJS();
    const columns = [{
      title: '职位名',
      dataIndex: 'resumeName',
      key: 'resumeName',
      render: (text, record) => <Link to={"/positions/"+record.resumeId}>{text}</Link>
    }, {
      title: '申请人',
      dataIndex: 'jobseekName',
      key: 'jobseekName',
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
      key: 'companyName',
      render: (text, record) => <Link to={"/company/"+record.companyId}>{text}</Link>
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
      <SendArea>
        <Table columns={columns} pagination={setPage} dataSource={data} />
      </SendArea>
    )
  };
  handleChange = (page) => {
    this.setState({
      page: page
    });
  };
  upTop (Id) {
    const { changeIndex, sendResumeList } = this.props;
    const { page } = this.state;
    let newSend = sendResumeList.toJS();
    let index = 0;
    for (var i = 0; i<newSend.length;i++) {
      if (newSend[i]['Id']===Id) {
        index = i;
        break;
      }
    }
    let upItem = newSend[index];
    newSend.splice(index,1);
    let newIndex = (page-1)*5;
    newSend.splice(newIndex,0,upItem);
    changeIndex(newSend);
  }
  handleDelete (id,e) {
    message.info('删除中...');
    let Id = this.props.match.params.Id;
    const { deleteItem, ajaxSend } = this.props;
    deleteItem(Id,id);
    ajaxSend();
  };
  showProject () {
    const { getData } = this.props;
    let Id = this.props.match.params.Id;
    getData(Id);
    this.setState({
      first: false
    })
  };
  componentDidMount () {
    const { loginOrNot } =this.props;
    if (loginOrNot) {
      this.showProject();
    }
  };
  componentDidUpdate () {
    const { loginOrNot } =this.props;
    const { first } = this.state;
    if (loginOrNot && first) {
      this.showProject();
    }
  };
};

const mapState = (state) => ({
  loginOrNot: state.getIn(['login','loginOrNot']),
  sendResumeList: state.getIn(['resume','sendResumeList'])
});

const mapDispatch = (dispatch) => {
  return {
    getData (Id) {
      dispatch(getSendResumeList(Id));
    },
    deleteItem (Id,id) {
      dispatch(deleteSendResumeItem(Id,id));
    },
    ajaxSend () {
      dispatch(changeAjax('throw'));
    },
    changeIndex (values) {
      dispatch(changeSendResumeList(values));
    }
  }
};

export default connect(mapState,mapDispatch)(withRouter(ResumeSend));

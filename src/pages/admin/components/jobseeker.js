import React, { PureComponent } from 'react';
import { TableArea } from '../style';
import { connect } from 'react-redux';
import { Table, Divider, Popconfirm, message } from 'antd';
import { getJobseeker, changeJobseeker, deleteJobseekItem } from '../store/actionCreators';
import { changeAjax } from '../../../common/ajax/store/actionCreators';

class AdminJobseeker extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      resure: '确认要删除此条',
      page: 1
    }
  }
  render () {
    const { jobseeker } = this.props;
    const { resure } = this.state;
    const data = jobseeker.toJS();
    const columns = [{
        title: 'Id',
        dataIndex: 'Id',
        key: 'Id',
        }, {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        }, {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age'
        }, {
        title: '手机号前缀',
        dataIndex: 'prefix',
        key: 'prefix',
        }, {
        title: '手机号',
        dataIndex: 'telNumber',
        key: 'telNumber',
        }, {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email',
        }, {
        title: '密码',
        dataIndex: 'password',
        key: 'password',
        }, {
        title: '地区',
        dataIndex: 'area',
        key: 'area',
        }, {
        title: '经验',
        dataIndex: 'experience',
        key: 'experience',
        }, {
        title: '头像地址',
        dataIndex: 'photo',
        key: 'photo',
        }, {
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <span>
            <span style={{"color":"#F4A460"}} onClick={()=>this.upTop(record.Id)}>置顶</span>
            <Divider type="vertical" />
            <Popconfirm placement="rightTop" title={resure} onCancel={(e)=>{e.stopPropagation();e.preventDefault();}} onConfirm={(e)=>{this.handleDelete(record.Id,e)}} okText="Yes" cancelText="No">
                <span style={{"color":"#F08080"}}>删除</span>
            </Popconfirm>
            </span>
        ),
    }];
   const setPage = {
     defaultPageSize: 10,
     total: data.length,
     showTotal: (total, range) => `${range[0]}-${range[1]} 条，共 ${total} 条`,
     onChange: this.handleChange
   }
    return (
      <TableArea>
        <Table columns={columns} pagination={setPage} dataSource={data} />
      </TableArea>
    )
  };
  handleChange = (page) => {
    this.setState({
      page: page
    });
  };
  upTop (Id) {
    const { changeIndex, jobseeker } = this.props;
    const { page } = this.state;
    let newSend = jobseeker.toJS();
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
  handleDelete (Id,e) {
    message.info('删除中...');
    const { deleteItem, ajaxSend } = this.props;
    deleteItem(Id);
    ajaxSend();
  };
  componentDidMount () {
      this.props.getJobseek();
  }
};

const mapState = (state) => ({
  jobseeker: state.getIn(['admin','jobseeker'])
});

const mapDispatch = (dispatch) => {
  return {
    getJobseek () {
        dispatch(getJobseeker());
    },
    deleteItem (Id) {
        dispatch(deleteJobseekItem(Id));
    },
    ajaxSend () {
        dispatch(changeAjax('throw'));
    },
    changeIndex (values) {
        dispatch(changeJobseeker(values));
    }
  }
};

export default connect(mapState,mapDispatch)(AdminJobseeker);

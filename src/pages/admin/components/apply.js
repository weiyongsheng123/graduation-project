import React, { PureComponent } from 'react';
import { TableArea } from '../style';
import { connect } from 'react-redux';
import { Table, Divider, Popconfirm, message } from 'antd';
import { getApply, changeApply, deleteApplyItem } from '../store/actionCreators';
import { changeAjax } from '../../../common/ajax/store/actionCreators';

class AdminApply extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      resure: '确认要删除此条',
      page: 1
    }
  }
  render () {
    const { apply } = this.props;
    const { resure } = this.state;
    const data = apply.toJS();
    const columns = [{
        title: 'Id',
        dataIndex: 'Id',
        key: 'Id',
        }, {
        title: '职位Id',
        dataIndex: 'resumeId',
        key: 'resumeId',
        }, {
        title: '求职者Id',
        dataIndex: 'jobseekId',
        key: 'jobseekId',
        }, {
        title: '公司Id',
        dataIndex: 'companyId',
        key: 'companyId',
        }, {
        title: '职位名',
        dataIndex: 'resumeName',
        key: 'resumeName',
        }, {
        title: '职位发布公司名',
        dataIndex: 'companyName',
        key: 'companyName',
        }, {
        title: '求职者姓名',
        dataIndex: 'jobseekName',
        key: 'jobseekName'
        }, {
        title: '求职者性别',
        dataIndex: 'jobseekSex',
        key: 'jobseekSex',
        }, {
        title: '求职者年龄',
        dataIndex: 'jobseekAge',
        key: 'jobseekAge',
        }, {
        title: '申请时间',
        dataIndex: 'time',
        key: 'time',
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
    const { changeIndex, apply } = this.props;
    const { page } = this.state;
    let newSend = apply.toJS();
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
      this.props.getApply();
  }
};

const mapState = (state) => ({
  apply: state.getIn(['admin','apply'])
});

const mapDispatch = (dispatch) => {
  return {
    getApply () {
        dispatch(getApply());
    },
    deleteItem (Id) {
        dispatch(deleteApplyItem(Id));
    },
    ajaxSend () {
        dispatch(changeAjax('throw'));
    },
    changeIndex (values) {
        dispatch(changeApply(values));
    }
  }
};

export default connect(mapState,mapDispatch)(AdminApply);

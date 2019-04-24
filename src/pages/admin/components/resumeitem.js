import React, { PureComponent } from 'react';
import { TableArea } from '../style';
import { connect } from 'react-redux';
import { Table, Divider, Popconfirm, message } from 'antd';
import { getResumeItem, changeResumeItem, deleteResumeItem } from '../store/actionCreators';
import { changeAjax } from '../../../common/ajax/store/actionCreators';

class AdminResumeItem extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      resure: '确认要删除此条',
      page: 1
    }
  }
  render () {
    const { resumeitem } = this.props;
    const { resure } = this.state;
    const data = resumeitem.toJS();
    const columns = [{
        title: 'Id',
        dataIndex: 'Id',
        key: 'Id',
        }, {
        title: '标题',
        dataIndex: 'title',
        key: 'title',
        }, {
        title: '职位种类',
        dataIndex: 'position',
        key: 'position',
        }, {
        title: '发布公司',
        dataIndex: 'companyName',
        key: 'companyName'
        }, {
        title: '薪资',
        dataIndex: 'salary',
        key: 'salary',
        }, {
        title: '学历要求',
        dataIndex: 'education',
        key: 'education',
        }, {
        title: '经验要求',
        dataIndex: 'experience',
        key: 'experience',
        }, {
        title: '工作地址',
        dataIndex: 'area',
        key: 'area',
        }, {
        title: '招聘人数',
        dataIndex: 'numbers',
        key: 'numbers',
        }, {
        title: '职责要求',
        dataIndex: 'request',
        key: 'request',
        }, {
        title: '发布时间',
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
    const { changeIndex, resumeitem } = this.props;
    const { page } = this.state;
    let newSend = resumeitem.toJS();
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
      this.props.getResumeItem();
  }
};

const mapState = (state) => ({
  resumeitem: state.getIn(['admin','resumeitem'])
});

const mapDispatch = (dispatch) => {
  return {
    getResumeItem () {
        dispatch(getResumeItem());
    },
    deleteItem (Id) {
        dispatch(deleteResumeItem(Id));
    },
    ajaxSend () {
        dispatch(changeAjax('throw'));
    },
    changeIndex (values) {
        dispatch(changeResumeItem(values));
    }
  }
};

export default connect(mapState,mapDispatch)(AdminResumeItem);

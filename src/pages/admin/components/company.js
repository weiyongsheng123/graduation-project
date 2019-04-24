import React, { PureComponent } from 'react';
import { TableArea } from '../style';
import { connect } from 'react-redux';
import { Table, Divider, Popconfirm, message } from 'antd';
import { getCompany, changeCompany, deleteCompanyItem } from '../store/actionCreators';
import { changeAjax } from '../../../common/ajax/store/actionCreators';

class AdminCompany extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      resure: '确认要删除此条',
      page: 1
    }
  }
  render () {
    const { company } = this.props;
    const { resure } = this.state;
    const data = company.toJS();
    const columns = [{
        title: 'Id',
        dataIndex: 'Id',
        key: 'Id',
        }, {
        title: '公司名',
        dataIndex: 'name',
        key: 'name',
        }, {
        title: '地区',
        dataIndex: 'area',
        key: 'area',
        }, {
        title: '法人姓名',
        dataIndex: 'legalName',
        key: 'legalName'
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
        title: '从业方向',
        dataIndex: 'direction',
        key: 'direction',
        }, {
        title: '成立时间',
        dataIndex: 'beginTime',
        key: 'beginTime',
        }, {
        title: '规模',
        dataIndex: 'scale',
        key: 'scale',
        }, {
        title: 'logo地址',
        dataIndex: 'logoUrl',
        key: 'logoUrl',
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
    const { changeIndex, company } = this.props;
    const { page } = this.state;
    let newSend = company.toJS();
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
      this.props.getCompany();
  }
};

const mapState = (state) => ({
  company: state.getIn(['admin','company'])
});

const mapDispatch = (dispatch) => {
  return {
    getCompany () {
        dispatch(getCompany());
    },
    deleteItem (Id) {
        dispatch(deleteCompanyItem(Id));
    },
    ajaxSend () {
        dispatch(changeAjax('throw'));
    },
    changeIndex (values) {
        dispatch(changeCompany(values));
    }
  }
};

export default connect(mapState,mapDispatch)(AdminCompany);

import React, { PureComponent } from 'react';
import { TableArea } from '../style';
import { connect } from 'react-redux';
import { Table, Divider, Popconfirm, message } from 'antd';
import { getSuggest, changeSuggest, deleteSuggestItem } from '../store/actionCreators';
import { changeAjax } from '../../../common/ajax/store/actionCreators';

class AdminSuggest extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      resure: '确认要删除此条',
      page: 1
    }
  }
  render () {
    const { suggest } = this.props;
    const { resure } = this.state;
    const data = suggest.toJS();
    const columns = [{
        title: 'Id',
        dataIndex: 'Id',
        key: 'Id',
        }, {
        title: '提交人姓名',
        dataIndex: 'submitPerson',
        key: 'submitPerson',
        }, {
        title: '主题',
        dataIndex: 'title',
        key: 'title',
        }, {
        title: '内容',
        dataIndex: 'content',
        key: 'content',
        }, {
        title: '时间',
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
    const { changeIndex, suggest } = this.props;
    const { page } = this.state;
    let newSend = suggest.toJS();
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
      this.props.getSuggest();
  }
};

const mapState = (state) => ({
  suggest: state.getIn(['admin','suggest'])
});

const mapDispatch = (dispatch) => {
  return {
    getSuggest () {
        dispatch(getSuggest());
    },
    deleteItem (Id) {
        dispatch(deleteSuggestItem(Id));
    },
    ajaxSend () {
        dispatch(changeAjax('throw'));
    },
    changeIndex (values) {
        dispatch(changeSuggest(values));
    }
  }
};

export default connect(mapState,mapDispatch)(AdminSuggest);

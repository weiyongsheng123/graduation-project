import React, { PureComponent } from 'react';
import { ReseriveArea, ReseriveTitle, ReseriveList, ReseriveItem } from '../style';
import { connect } from 'react-redux';
import { Popconfirm, message } from 'antd';
import { getReseriveResumeList, deleteReseriveResumeItem } from '../store/actionCreators';
import { changeAjax } from '../../../common/ajax/store/actionCreators';

class CompanyReserive extends PureComponent {
  constructor (props) {
      super(props);
      this.state = {
        resure: '确认要删除此条',
        first: true
      }
    }
  render () {
    const { reseriveList } = this.props;
    const { resure } = this.state;
    const newList = reseriveList.toJS();
    return (
      <ReseriveArea>
        <ReseriveTitle>
          <span className="iconfont">&#xe629;</span>
          已收到的申请
        </ReseriveTitle>
        <ReseriveList>
          {
            newList.map((item,index)=>{
              return (
                <ReseriveItem key={index}>
                  <span className="left">{item['jobseekName']}</span>
                  <span className="left max">{item['resumeName']}</span>
                  <Popconfirm placement="top" title={resure} onConfirm={()=>{this.handleDelete(item['Id'])}} okText="Yes" cancelText="No">
                    <span className="iconfont">&#xe603;</span>
                  </Popconfirm>
                  <span className="right">{item['time']}</span>
                </ReseriveItem>
              )
            })
          }
        </ReseriveList>
      </ReseriveArea>
    )
  };
  handleDelete (id) {
    message.info('删除中...');
    const { company, deleteItem, ajaxSend } = this.props;
    const NewCompany = company.toJS();
    const Id = NewCompany['Id'];
    deleteItem(Id,id);
    ajaxSend();
  };
  getReserive () {
    const { company, getReseriveResume } = this.props;
    const newCompany = company.toJS();
    let companyId = newCompany['Id'];
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
}

const mapState = (state) => ({
  loginOrNot: state.getIn(['login','loginOrNot']),
  company: state.getIn(['login','company']),
  reseriveList: state.getIn(['company','reseriveList'])
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
    }
  }
};

export default connect(mapState,mapDispatch)(CompanyReserive);

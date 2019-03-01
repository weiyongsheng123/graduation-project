import React, { PureComponent } from 'react';
import { ReseriveArea, ReseriveTitle, ReseriveList, ReseriveItem } from '../style';
import { connect } from 'react-redux';
import { Popconfirm, message } from 'antd';
import { Link } from 'react-router-dom';
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
    const { reseriveList, routerId } = this.props;
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
                <Link to={"/resume/" + item['jobseekId']} key={item['Id']}>
                <ReseriveItem>
                  <span className="left">{item['jobseekName']}</span>
                  <span className="left max">{item['resumeName']}</span>
                  {
                    routerId === '0' ? <Popconfirm placement="top" title={resure} onCancel={(e)=>{e.stopPropagation();}} onConfirm={(e)=>{this.handleDelete(item['Id'],e)}} okText="Yes" cancelText="No">
                                         <span className="iconfont">&#xe603;</span>
                                       </Popconfirm> :
                                       null
                  }
                  <span className="right">{item['time']}</span>
                </ReseriveItem>
                </Link>
              )
            })
          }
        </ReseriveList>
      </ReseriveArea>
    )
  };
  handleDelete (id,e) {
    message.info('删除中...');
    e.preventDefault();
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
    const { loginOrNot, company } = this.props;
    const newCompany = company.toJS();
    const len = Object.keys(newCompany);
    if ( loginOrNot && len.length ) {
      this.getReserive();
    }
  };
  componentDidUpdate () {
    const { loginOrNot, company } = this.props;
    const { first } = this.state;
    const newCompany = company.toJS();
    const len = Object.keys(newCompany);
    if ( first && loginOrNot && len.length ) {
      this.getReserive();
    }
  };
};

const mapState = (state) => ({
  loginOrNot: state.getIn(['login','loginOrNot']),
  company: state.getIn(['login','company']),
  reseriveList: state.getIn(['company','reseriveList']),
  routerId: state.getIn(['company','routerId'])
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

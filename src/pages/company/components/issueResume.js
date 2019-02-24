import React, { PureComponent } from 'react';
import { IssueArea, IssueTitle, IssueList, IssueItem } from '../style';
import { Popconfirm, message } from 'antd';
import { connect } from 'react-redux';
import { showOrHide, getReleaseResume, deleteReleaseResumeItem } from '../store/actionCreators';
import { changeAjax } from '../../../common/ajax/store/actionCreators';

class CompanyIssue extends PureComponent {
  constructor (props) {
      super(props);
      this.state = {
        resure: '确认要删除此条',
        first: true
      }
    }
  render () {
    const { showEdit, releaseResume } = this.props;
    const { resure } = this.state;
    return (
      <IssueArea>
        <IssueTitle>
          <span className="left">
            <i className="iconfont">&#xe626;</i>
            已发布的简历
          </span>
          <span className="right" onClick={()=>showEdit(true)}>
            <i className="iconfont">&#xe601;</i>
            发布新的
          </span>
        </IssueTitle>
        <IssueList>
          {
            releaseResume.map((item)=>{
              return (
                <IssueItem key={item.get('Id')}>
                  <span className="left">{item.get('title')}</span>
                  <Popconfirm placement="rightTop" title={resure} onConfirm={()=>{this.handleDelete(item.get('Id'))}} okText="Yes" cancelText="No">
                    <span className="iconfont">&#xe603;</span>
                  </Popconfirm>
                  <span className="right">{item.get('time')}</span>
                </IssueItem>
              )
            })
          }
        </IssueList>
      </IssueArea>
    )
  };
  showResumeItem () {
    const { loadResumeItem, company } = this.props;
    const NewCompany = company.toJS();
    const id = NewCompany['Id'];
    loadResumeItem(id);
    this.setState({
      first: false
    })
  };
  componentDidMount () {
    const { loginOrNot } = this.props;
    if (loginOrNot) {
      this.showResumeItem();
    }
  };
  componentDidUpdate () {
    const { loginOrNot } =this.props;
    const { first } = this.state;
    if (loginOrNot && first) {
      this.showResumeItem();
    }
  }
  handleDelete (id) {
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
  releaseResume: state.getIn(['company','releaseResume'])
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
      dispatch(changeAjax(true));
    }
  }
};

export default connect(mapState,mapDispatch)(CompanyIssue);

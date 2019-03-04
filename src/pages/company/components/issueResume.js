import React, { PureComponent } from 'react';
import { IssueArea, IssueTitle, IssueList, IssueItem } from '../style';
import { Popconfirm, message } from 'antd';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
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
    const { showEdit, releaseResume, routerId, companyId } = this.props;
    const { resure } = this.state;
    const newRelease = releaseResume.toJS();
    return (
      <IssueArea>
        <IssueTitle>
          <span className="left">
            <i className="iconfont">&#xe626;</i>
            已发布的简历
          </span>
          {
            routerId === companyId ? <span className="right" onClick={()=>showEdit(true)}>
                                 <i className="iconfont">&#xe601;</i>
                                 发布新的
                               </span> :
                               null
          }
        </IssueTitle>
        <IssueList>
          {
            newRelease.map((item)=>{
              return (
                <Link to={"/positions/" + item['Id']} key={item['Id']}>
                <IssueItem>
                  <span className="left">{item['title']}</span>
                  {
                    routerId === companyId ? <Popconfirm placement="rightTop" title={resure} onCancel={(e)=>{e.stopPropagation();e.preventDefault();}} onConfirm={(e)=>{this.handleDelete(item['Id'],e)}} okText="Yes" cancelText="No">
                                         <span className="iconfont">&#xe603;</span>
                                       </Popconfirm> :
                                       null
                  }
                  <span className="right">{item['time']}</span>
                </IssueItem>
                </Link>
              )
            })
          }
        </IssueList>
      </IssueArea>
    )
  };
  showResumeItem () {
    const { loginOrNot, company, loadResumeItem, releaseResume, companyId } = this.props;
    const { first } = this.state;
    let Id = this.props.match.params.Id;
    const newCompany = company.toJS();
    const len = Object.keys(newCompany);
    const newRelease = releaseResume.toJS();
    const len1 = Object.keys(newRelease);
    if (loginOrNot && len.length && first && (!len1.length || Id !== companyId)) {
      loadResumeItem(Id);
      this.setState({
        first: false
      })
    }
  };
  componentDidMount () {
    this.showResumeItem();
  };
  componentDidUpdate () {
    this.showResumeItem();
  };
  handleDelete (id,e) {
    e.stopPropagation();
    e.preventDefault();
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
  releaseResume: state.getIn(['company','releaseResume']),
  routerId: state.getIn(['company','routerId']),
  companyId: state.getIn(['login','companyId'])
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
      dispatch(changeAjax('throw'));
    }
  }
};

export default connect(mapState,mapDispatch)(withRouter(CompanyIssue));

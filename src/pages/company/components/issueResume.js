import React, { PureComponent } from 'react';
import { IssueArea, IssueTitle, IssueList, IssueItem } from '../style';
import { Popconfirm, message } from 'antd';
import { connect } from 'react-redux';
import { showOrHide } from '../store/actionCreators';

class CompanyIssue extends PureComponent {
  constructor (props) {
      super(props);
      this.state = {
        resure: '确认要删除此条',
        list: [
          {
            resumeName: 'web前端高级开发',
            issueTime: '2017-9-12'
          },
          {
            resumeName: 'web前端高级开发',
            issueTime: '2017-9-12'
          },
          {
            resumeName: 'web前端高级开发',
            issueTime: '2017-9-12'
          },
          {
            resumeName: 'web前端高级开发',
            issueTime: '2017-9-12'
          }
        ]
      }
    }
  render () {
    const { showEdit } = this.props;
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
            this.state.list.map((item,index)=>{
              return (
                <IssueItem key={index}>
                  <span className="left">{item.resumeName}</span>
                  <Popconfirm placement="rightTop" title={resure} onConfirm={()=>{this.handleDelete(item.get('Id'))}} okText="Yes" cancelText="No">
                    <span className="iconfont">&#xe603;</span>
                  </Popconfirm>
                  <span className="right">{item.issueTime}</span>
                </IssueItem>
              )
            })
          }
        </IssueList>
      </IssueArea>
    )
  };
  handleDelete (id) {
    message.info('删除中...');
    
  };
};

const mapState = (state) => ({
  
});

const mapDispatch = (dispatch) => {
  return {
    showEdit (show) {
      dispatch(showOrHide(show))
    }
  }
};

export default connect(mapState,mapDispatch)(CompanyIssue);

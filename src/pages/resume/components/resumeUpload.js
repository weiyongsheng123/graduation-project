import React, { PureComponent } from 'react';
import { UploadArea, UploadTitle, DownloadArea, Upload } from '../style';
import { Popconfirm, message, Button } from 'antd';
import { connect } from 'react-redux';
import { getJobseekFileData } from '../store/actionCreators';

class ResumeUpload extends PureComponent {
  constructor (props) {
    super(props);
    this.state={
      first: true,
      resure: '确认要删除此条'
    }
  }
  render () {
    const { fileData } = this.props;
    const { resure } = this.state;
    return (
      <UploadArea id="resumeupload">
        <UploadTitle>简历等附件上传</UploadTitle>
        <DownloadArea>
          <span className="title">已上传内容：</span>
          {
            fileData.map((item,index)=>{
              return (
                <div className="item" key={item.get('Id')}>
                  <a href={item.get('href')} download>{item.get('title')}</a>
                  <i className="iconfont">&#xe627;</i>
                  <Popconfirm placement="top" title={resure} onConfirm={()=>{this.handleDelete(item.get('Id'))}} okText="Yes" cancelText="No">
                    <span className="iconfont">&#xe603;</span>
                  </Popconfirm>
                </div>
              )
            })
          }
        </DownloadArea>
        <Upload>
          <span className="tips">选择上传内容：</span>
          <input type="file"/>
          <Button>提交</Button>
        </Upload>
      </UploadArea>
    )
  };
  showFile () {
    const { getData, jobSeek } = this.props;
    const NewJobseek = jobSeek.toJS();
    const id = NewJobseek['Id'];
    getData(id);
    this.setState({
      first: false
    })
  };
  componentDidMount () {
    const { loginOrNot } =this.props;
    if (loginOrNot) {
      this.showFile();
    }
  };
  componentDidUpdate () {
    const { loginOrNot } =this.props;
    const { first } = this.state;
    if (loginOrNot && first) {
      this.showFile();
    }
  };
  handleDelete (id) {
    message.info('删除中...');
    const { jobSeek, deleteItem, ajaxSend } = this.props;
    const NewJobseek = jobSeek.toJS();
    const Id = NewJobseek['Id'];
    deleteItem(Id,id);
    ajaxSend();
  };
};

const mapState = (state) => ({
  fileData: state.getIn(['resume','fileData']),
  loginOrNot: state.getIn(['login','loginOrNot']),
  jobSeek: state.getIn(['login','jobSeek'])
});

const mapDispatch = (dispatch) => {
  return {
    getData (Id) {
      dispatch(getJobseekFileData(Id));
    }
  }
};

export default connect(mapState,mapDispatch)(ResumeUpload);

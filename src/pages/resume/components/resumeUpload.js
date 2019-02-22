import React, { PureComponent } from 'react';
import { UploadArea, UploadTitle, DownloadArea, Uploading } from '../style';
import { Popconfirm, message, Button, Upload, Icon, } from 'antd';
import { connect } from 'react-redux';
import { getJobseekUploadData, deleteJobseekUploadData } from '../store/actionCreators';
import { changeAjax } from '../../../common/ajax/store/actionCreators';

class ResumeUpload extends PureComponent {
  constructor (props) {
    super(props);
    this.state={
      first: true,
      resure: '确认要删除此条',
    };
  }
  render () {
    const { uploadData, getData, jobSeek } = this.props;
    const { resure } = this.state;
    const NewJobseek = jobSeek.toJS();
    const id = NewJobseek['Id'];
    const props = {
      name: 'file',
      action: 'modifyJobseekUploadData.php',
      data: {
        Id: id
      },
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          getData(id);
          message.success(`${info.file.name} 上传成功`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} 上传失败`);
        }
      },
    }
    return (
      <UploadArea id="resumeupload">
        <UploadTitle>简历等附件上传</UploadTitle>
        <DownloadArea>
          <span className="title">已上传内容：</span>
          {
            uploadData.map((item,index)=>{
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
        <Uploading>
         <span className="title">上传区域：</span>
         <Upload {...props} className="upload">
           <Button>
             <Icon type="upload" /> 上传简历等附件
           </Button>
         </Upload>
        </Uploading>
      </UploadArea>
    )
  };
  showUpload () {
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
      this.showUpload();
    }
  };
  componentDidUpdate () {
    const { loginOrNot } =this.props;
    const { first } = this.state;
    if (loginOrNot && first) {
      this.showUpload();
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
  uploadData: state.getIn(['resume','uploadData']),
  loginOrNot: state.getIn(['login','loginOrNot']),
  jobSeek: state.getIn(['login','jobSeek'])
});

const mapDispatch = (dispatch) => {
  return {
    getData (Id) {
      dispatch(getJobseekUploadData(Id));
    },
    ajaxSend () {
      dispatch(changeAjax(true));
    },
    deleteItem (Id,id) {
      dispatch(deleteJobseekUploadData(Id,id));
    }
  }
};

export default connect(mapState,mapDispatch)(ResumeUpload);

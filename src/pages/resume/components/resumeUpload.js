import React, { PureComponent } from 'react';
import { UploadArea, UploadTitle, DownloadArea, Upload } from '../style';
import { Button } from 'antd';

class ResumeUpload extends PureComponent {
  constructor (props) {
    super(props);
    this.state={
      UploadHrefList: [{
        uploadHref: '',
        uploadContent: '图片链接'
      },
      {
        uploadHref: '',
        uploadContent: '接'
      },
      {
        uploadHref: '',
        uploadContent: '图片接'
      },
      {
        uploadHref: '',
        uploadContent: '图ddddd片链接'
      }
      ]
    }
  }
  render () {
    return (
      <UploadArea id="resumeupload">
        <UploadTitle>简历等附件上传</UploadTitle>
        <DownloadArea>
          <span className="title">已上传内容：</span>
          {
            this.state.UploadHrefList.map((item,index)=>{
              return (
                <div className="item" key={item.uploadContent}>
                  <a href={item.uploadHref} download>{item.uploadContent}</a>
                  <span className="iconfont" onClick={this.delete.bind(this,index)}>&#xe603;</span>
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
  delete (index) {
    let list = [...this.state.UploadHrefList];
    list.splice(index,1);
    this.setState({
      UploadHrefList: list
    })
  }
};

export default ResumeUpload;
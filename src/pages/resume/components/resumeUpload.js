import React, { PureComponent } from 'react';
import { UploadArea, UploadTitle } from '../style';
import { Button } from 'antd';

class ResumeUpload extends PureComponent {

  render () {
    return (
      <UploadArea>
        <UploadTitle>简历等附件上传</UploadTitle>
        <input type="file" placeholder="aaaaa"/>
        <Button>提交</Button>
      </UploadArea>
    )
  };
};

export default ResumeUpload;
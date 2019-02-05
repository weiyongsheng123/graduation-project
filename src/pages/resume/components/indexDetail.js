import React, { PureComponent } from 'react';
import { DetailWrapper } from '../style';
import ResumeName from './resumeName';
import ResumeIntent from './resumeIntent';
import ResumeWork from './resumeWork';
import ResumeProject from './resumeProject';
import ResumeEducate from './resumeEducate';
import ResumeUpload from './resumeUpload';

class ResumeDetail extends PureComponent {
  render () {
    return (
      <DetailWrapper>
        <ResumeName/>
        <ResumeIntent/>
        <ResumeWork/>
        <ResumeProject/>
        <ResumeEducate/>
        <ResumeUpload/>
      </DetailWrapper>
    )
  }
};

export default ResumeDetail;
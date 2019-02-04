import React, { PureComponent } from 'react';
import { DetailWrapper } from '../style';
import ResumeName from './resumeName';

class ResumeDetail extends PureComponent {

  render () {
    return (
      <DetailWrapper>
        <ResumeName/>
      </DetailWrapper>
    )
  }
};

export default ResumeDetail;
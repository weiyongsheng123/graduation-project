import React, { PureComponent } from 'react';
import Head from '../../common/head';
import { ResumeWrapper } from './style';
import ResumeHeader from './components/resumeHeader';
import ResumeDetail from './components/indexDetail';

class Resume extends PureComponent {

  render () {
    return (
      <ResumeWrapper>
        <Head/>
        <ResumeHeader/>
        <ResumeDetail/>
      </ResumeWrapper>
    )
  }
};

export default Resume;
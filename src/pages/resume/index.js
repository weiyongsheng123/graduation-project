import React, { PureComponent } from 'react';
import Head from '../../common/head';
import Suspension from '../../common/suspension';
import Ajax from '../../common/ajax';
import { ResumeWrapper, ResumeContent } from './style';
import ResumeHeader from './components/resumeHeader';
import ResumeDetail from './components/indexDetail';
import ResumeNav from './components/resumeNav';

class Resume extends PureComponent {

  render () {
    return (
      <ResumeWrapper>
        <Head father='resume'/>
        <ResumeHeader/>
        <ResumeContent>
          <ResumeDetail/>
          <ResumeNav/>
        </ResumeContent>
        <Suspension/>
        <Ajax/>
      </ResumeWrapper>
    )
  }
  componentDidMount () {
    window.scrollTo( 0, 0);
  }
};

export default Resume;
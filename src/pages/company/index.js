import React, { PureComponent } from 'react';
import { CompanyWrapper, CompanyContent } from './style';
import Head from '../../common/head';
import Suspension from '../../common/suspension';
import Ajax from '../../common/ajax';
import CompanyDesc from './components/companyDesc';
import CompanyIssue from './components/issueResume';
import CompanyReserive from './components/reseriveResume';
import AddNewResume from './components/addNewResume';

class Company extends PureComponent {

  render () {
    return (
      <CompanyWrapper>
        <Head/>
        <CompanyDesc/>
        <CompanyContent>
          <CompanyIssue/>
          <CompanyReserive/>
        </CompanyContent>
        <AddNewResume/>
        <Suspension/>
        <Ajax/>
      </CompanyWrapper>
    )
  }
  componentDidMount () {
    window.scrollTo( 0, 0);
  }
};

export default Company;
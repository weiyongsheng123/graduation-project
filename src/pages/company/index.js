import React, { PureComponent } from 'react';
import { CompanyWrapper, CompanyContent } from './style';
import Head from '../../common/head';
import Suspension from '../../common/suspension';
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
      </CompanyWrapper>
    )
  }
};

export default Company;
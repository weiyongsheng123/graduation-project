import React, { PureComponent } from 'react';
import { CompanyWrapper } from './style';
import Head from '../../common/head';
import CompanyDesc from './components/companyDesc';
class Company extends PureComponent {

  render () {
    return (
      <CompanyWrapper>
        <Head/>
        <CompanyDesc/>
      </CompanyWrapper>
    )
  }
};

export default Company;
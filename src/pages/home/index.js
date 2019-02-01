import React, { PureComponent } from 'react';
import { HomeWrapper } from './style';
import Head from '../../common/head';

class Home extends PureComponent {

  render () {
    return (
      <HomeWrapper>
        <Head/>
      </HomeWrapper>
    )
  }
};

export default Home;
import React, { PureComponent } from 'react';
import { HomeWrapper, SearchWrapper } from './style';
import Head from '../../common/head';
import InputSearch from './components/inputSearch';
import LogoCity from './components/logoCity';
import AdvertiseMent from './components/advertisement';
import NewRecruit from './components/newRecruit';
import Suspension from '../../common/suspension';
import SomethingElse from './components/somethingElse';

class Home extends PureComponent {

  render () {
    return (
      <HomeWrapper>
        <Head/>
        <SearchWrapper>
          <InputSearch/>
          <LogoCity/>
        </SearchWrapper>
        <AdvertiseMent/>
        <NewRecruit/>
        <SomethingElse/>
        <Suspension/>
      </HomeWrapper>
    )
  }
  componentDidMount () {
    window.scrollTo( 0, 0);
  }
};

export default Home;
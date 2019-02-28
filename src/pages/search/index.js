import React, { PureComponent } from 'react';
import { SearchWrapper } from './style';
import Head from '../../common/head';
import Ajax from '../../common/ajax';
import Suspension from '../../common/suspension';
import SearchInput from './components/searchInput';
import SomeChooice from './components/someChooice';
import SearchDetail from './components/searchDetail';
import SearchPage from './components/searchPage';

class Search extends PureComponent {

  render () {
    return (
      <SearchWrapper>
        <Head/>
        <SearchInput/>
        <SomeChooice/>
        <SearchDetail/>
        <SearchPage/>
        <Suspension/>
        <Ajax/>
      </SearchWrapper>
    )
  }
  componentDidMount () {
    window.scrollTo( 0, 0);
  }
};

export default Search;
import React, { PureComponent } from 'react';
import { SearchWrapper } from './style';
import Head from '../../common/head';
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
      </SearchWrapper>
    )
  }
};

export default Search;
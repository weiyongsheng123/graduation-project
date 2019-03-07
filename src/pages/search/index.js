import React, { PureComponent } from 'react';
import { SearchWrapper } from './style';
import Head from '../../common/head';
import Ajax from '../../common/ajax';
import Tips from '../../common/tips';
import Suspension from '../../common/suspension';
import SearchInput from './components/searchInput';
import SomeChooice from './components/someChooice';
import SearchDetail from './components/searchDetail';
import SearchPage from './components/searchPage';
import { changeSearchFirstTip } from './store/actionCreators';
import { connect } from 'react-redux';

class Search extends PureComponent {

  render () {
    const { firstTip } = this.props;
    return (
      <SearchWrapper>
        <Head/>
        <Tips first={firstTip} tipContent="查询心仪的职位请选好查询条件"/>
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
  };
  componentWillUnmount () {
    this.props.changeFirst();
  };
};

const mapState = (state) => ({
  firstTip: state.getIn(['search','firstTip'])
});

const mapDispatch = (dispatch) => {
  return {
    changeFirst () {
      dispatch(changeSearchFirstTip(false));
    }
  }
};

export default connect(mapState,mapDispatch)(Search);

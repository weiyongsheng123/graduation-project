import React, { PureComponent } from 'react';
import { HomeWrapper, SearchWrapper } from './style';
import Head from '../../common/head';
import Tips from '../../common/tips';
import InputSearch from './components/inputSearch';
import LogoCity from './components/logoCity';
import AdvertiseMent from './components/advertisement';
import NewRecruit from './components/newRecruit';
import Suspension from '../../common/suspension';
import SomethingElse from './components/somethingElse';
import { changeFeedBackSuccess } from '../feedback/store/actionCreators';
import { changeHomeFirstTip } from './store/actionCreators';
import { connect } from 'react-redux';

class Home extends PureComponent {

  render () {
    const { firstTip } = this.props;
    return (
      <HomeWrapper>
        <Head/>
        <Tips first={firstTip} tipContent="道路千万条，安全第一条！行车不规范，亲人两行泪。"/>
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
    this.props.revise();
  };
  componentWillUnmount () {
    this.props.changeFirst();
  };
};

const mapState = (state) => ({
  firstTip: state.getIn(['home','firstTip'])
});

const mapDispatch = (dispatch) => {
  return {
    revise () {
      dispatch(changeFeedBackSuccess(false));
    },
    changeFirst () {
      dispatch(changeHomeFirstTip(false));
    }
  }
};

export default connect(mapState,mapDispatch)(Home);

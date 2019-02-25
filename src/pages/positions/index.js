import React, { PureComponent } from 'react';
import { PositionWrapper } from './style';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Head from '../../common/head';
import Suspension from '../../common/suspension';
import WarnInfo from './components/warnInfo';
import PositionTitle from './components/positionTitle';
import PositionDetail from './components/positionDetail';

class Positions extends PureComponent {

  render () {
    return (
      <PositionWrapper>
        <Head/>
        <WarnInfo/>
        <PositionTitle/>
        <PositionDetail/>
        <Suspension/>
      </PositionWrapper>
    )
  }
  componentDidMount () {
    window.scrollTo( 0, 0);
    console.log(this.props.match.params.Id);
  }
};

const mapState = (state) => ({
  
});

const mapDispatch = (dispatch) => {
 return {
   
 }
}

export default connect(mapState,mapDispatch)(withRouter(Positions));

import React, { PureComponent } from 'react';
import { PositionWrapper } from './style';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Head from '../../common/head';
import Ajax from '../../common/ajax';
import Suspension from '../../common/suspension';
import WarnInfo from './components/warnInfo';
import PositionTitle from './components/positionTitle';
import PositionDetail from './components/positionDetail';
import { showPositionId } from './store/actionCreators';

class Positions extends PureComponent {

  render () {
    return (
      <PositionWrapper>
        <Head/>
        <WarnInfo/>
        <PositionTitle/>
        <PositionDetail/>
        <Suspension/>
        <Ajax/>
      </PositionWrapper>
    )
  }
  componentDidMount () {
    window.scrollTo(0, 0);
    let Id = this.props.match.params.Id;
    this.props.getId(Id);
  }
};

const mapState = (state) => ({
  
});

const mapDispatch = (dispatch) => {
 return {
   getId (Id) {
     dispatch(showPositionId(Id));
   }
 }
}

export default connect(mapState,mapDispatch)(withRouter(Positions));

import React, { PureComponent } from 'react';
import { PositionWrapper } from './style';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Head from '../../common/head';
import Ajax from '../../common/ajax';
import Tips from '../../common/tips';
import Suspension from '../../common/suspension';
import WarnInfo from './components/warnInfo';
import PositionTitle from './components/positionTitle';
import PositionDetail from './components/positionDetail';
import { showPositionId, changePositionFirstTip } from './store/actionCreators';

class Positions extends PureComponent {

  render () {
    const { firstTip } = this.props;
    return (
      <PositionWrapper>
        <Head/>
        <Tips first={firstTip} tipContent="投职请确认信息安全，再进行申请。"/>
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
  };
  componentWillUnmount () {
    this.props.changeFirst();
  };
};

const mapState = (state) => ({
  firstTip: state.getIn(['positions','firstTip'])
});

const mapDispatch = (dispatch) => {
 return {
   getId (Id) {
     dispatch(showPositionId(Id));
   },
   changeFirst () {
     dispatch(changePositionFirstTip(false));
   }
 }
}

export default connect(mapState,mapDispatch)(withRouter(Positions));

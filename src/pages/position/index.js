import React, { PureComponent } from 'react';
import { PositionWrapper } from './style';
import Head from '../../common/head';
import Suspension from '../../common/suspension';
import WarnInfo from './components/warnInfo';
import PositionTitle from './components/positionTitle';
import PositionDetail from './components/positionDetail';

class Position extends PureComponent {

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
  }
};

export default Position;
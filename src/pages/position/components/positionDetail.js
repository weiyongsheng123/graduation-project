import React, { PureComponent } from 'react';
import { DetailArea } from '../style';
import PositionInfo from './positionInfo';
import PositionCompany from './positionCompany';

class PositionDetail extends PureComponent {

  render () {
    return (
      <DetailArea>
        <PositionInfo/>
        <PositionCompany/>
      </DetailArea>
    )
  }
};

export default PositionDetail;
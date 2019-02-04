import React, { PureComponent } from 'react';
import { NameArea, Name } from '../style';

class ResumeHeader extends PureComponent {

  render () {
    return (
      <NameArea>
        <Name>魏勇胜的简历</Name>
      </NameArea>
    )
  }
};

export default ResumeHeader;
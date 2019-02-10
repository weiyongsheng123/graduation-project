import React, { PureComponent } from 'react';
import { HeadArea } from '../style';

class HelpHead extends PureComponent {

  render () {
    return (
      <HeadArea>
        <span className="iconfont">&#xe612;</span>帮助中心
      </HeadArea>
    )
  }
};

export default HelpHead;
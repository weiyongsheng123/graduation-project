import React, { PureComponent } from 'react';
import { HeadArea } from '../style';

class HelpHead extends PureComponent {

  render () {
    return (
      <HeadArea>
        <span className="iconfont">&#xe632;</span>密码找回与修改信息
      </HeadArea>
    )
  }
};

export default HelpHead;
import React, { PureComponent } from 'react';
import { WarnArea } from '../style';


class WarnInfo extends PureComponent {

  render () {
    return (
      <WarnArea>
        <span className="iconfont">&#xe736;</span>
        <p>若用人单位存在提供虚假招聘信息、发布虚假招聘广告，以担保或者其他任何名义向求职者收取财物（如办卡费、押金、培训费），扣押或以保管为名 索要身份证、毕业证及其他证件等行为，均属违法，请您提高警惕并注意保护个人信息！</p>
      </WarnArea>
    )
  }
};

export default WarnInfo;
import React, { PureComponent } from 'react';
import { InfoArea, InfoDesc } from '../style';

class PositionInfo extends PureComponent {

  render () {
    return (
      <InfoArea>
        <InfoDesc>
          <p><span className="iconfont">&#xe618;</span>职位信息</p>
          <div className="content">
            【岗位要求】<br/>
               1.毕业两年内，大专及以上学历。<br/>
               2.专业不限。<br/>
               3.有较强的抗压能力，沟通能力佳，有上进心。<br/>
               4.认同企业文化及发展方向，愿意从基层开始。愿意从基层开始。
          </div>
        </InfoDesc>
        <InfoDesc>
          <p><span className="iconfont">&#xe6a2;</span>职位要求</p>
          <div className="content">
            【岗位要求】<br/>
               1.毕业两年内，大专及以上学历。<br/>
               2.专业不限。<br/>
               3.有较强的抗压能力，沟通能力佳，有上进心。<br/>
               4.认同企业文化及发展方向，愿意从基层开始。愿意从基层开始。
          </div>
        </InfoDesc>
        <InfoDesc>
          <p><span className="iconfont">&#xe6a4;</span>福利待遇</p>
          <div className="content">
            【岗位要求】<br/>
               1.毕业两年内，大专及以上学历。<br/>
               2.专业不限。<br/>
               3.有较强的抗压能力，沟通能力佳，有上进心。<br/>
               4.认同企业文化及发展方向，愿意从基层开始。愿意从基层开始。
          </div>
        </InfoDesc>
        <InfoDesc>
          <p><span className="iconfont">&#xe62e;</span>详细地址</p>
          <div className="content">
            【岗位要求】<br/>
               1.毕业两年内，大专及以上学历。<br/>
               2.专业不限。<br/>
               3.有较强的抗压能力，沟通能力佳，有上进心。<br/>
               4.认同企业文化及发展方向，愿意从基层开始。愿意从基层开始。
          </div>
        </InfoDesc>
      </InfoArea>
    )
  }
};

export default PositionInfo;
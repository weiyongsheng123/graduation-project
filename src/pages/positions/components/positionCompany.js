import React, { PureComponent } from 'react';
import { CompanyArea, CompanyImg, CompanyDetail } from '../style';


class PositionCompany extends PureComponent {

  render () {
    return (
      <CompanyArea>
        <CompanyImg src="https://zhaopin-rd5-pub.oss-cn-beijing.aliyuncs.com/imgs/company/b0817b8b41539d8c24aa234697078b17.jpg" alt=""/>
        <CompanyDetail>
          <span className="iconfont">&#xe70a;</span>
          <span className="detail">马化腾牛逼有限公司</span>
        </CompanyDetail>
        <CompanyDetail>
          <span className="iconfont">&#xe61f;</span>
          <span className="detail">互联网</span>
        </CompanyDetail>
        <CompanyDetail>
          <span className="iconfont">&#xe611;</span>
          <span className="detail">2018-09-11</span>
        </CompanyDetail>
        <CompanyDetail>
          <span className="iconfont">&#xe604;</span>
          <span className="detail">名企/888人以上</span>
        </CompanyDetail>
        <CompanyDetail>
          <span className="iconfont">&#xe681;</span>
          <span className="detail small">阿里巴巴网络技术有限公司（简称：阿里巴巴集团）是以曾担任英语教师的马云为首的18人于1999年在浙江杭州创立的公司。 [1-2] 
            阿里巴巴集团经营多项业务，另外也从关联公司的业务和服务中取得经营商业生态系统上的支援。业务和关联公司的业务包括：淘宝网、天猫、聚划算、全球速卖通、阿里巴巴国际交易市场、1688、阿里妈妈、阿里云、蚂蚁金服、菜鸟网络等。 [3] 
            2014年9月19日，阿里巴巴集团在纽约证券交易所正式挂牌上市，股票代码“BABA”，创始人和董事局主席为马云。
            2018年7月19日，全球同步《财富》世界500强排行榜发布，阿里巴巴集团排名300位。 [4]  2018年12月，阿里巴巴入围2018世界品牌500强。</span>
        </CompanyDetail>
      </CompanyArea>
    )
  }
};

export default PositionCompany;
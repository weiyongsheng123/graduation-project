import React, { PureComponent } from 'react';
import { AdvertiseMent, AdvertiseItem, AdvertiseOne, AdvertiseTwo } from '../style';
import { connect } from 'react-redux';


class Advertisement extends PureComponent {

  render () {
    return (
      <AdvertiseMent>
        <AdvertiseItem imgUrl="https://static.ahjob.com.cn/img/files/dztl.jpg" href="http://www.baidu.com"></AdvertiseItem>
        <AdvertiseItem imgUrl="https://static.ahjob.com.cn/img/files/1000_61.jpg" href="http://www.baidu.com"></AdvertiseItem>
        <AdvertiseItem imgUrl="https://static.ahjob.com.cn/img/files/cy_sytl.jpg" href="http://www.baidu.com"></AdvertiseItem>
        <AdvertiseItem imgUrl="https://static.ahjob.com.cn/img/files/dztl.jpg" href="http://www.baidu.com"></AdvertiseItem>
        <AdvertiseItem imgUrl="https://static.ahjob.com.cn/img/files/cy_sytl.jpg" href="http://www.baidu.com"></AdvertiseItem>
        <AdvertiseItem imgUrl="https://static.ahjob.com.cn/img/files/dztl.jpg" href="http://www.baidu.com"></AdvertiseItem>
        <AdvertiseOne><a href="http://special.zhaopin.com/2019/nh/11237/ahyx013152/careers.html"><img src="https://img02.zhaopin.cn/img_button/201901/31/01_120047558691.gif" alt=""/></a></AdvertiseOne>
        <AdvertiseTwo><a href="https://xiaoyuan.zhaopin.com/"><img src="https://img00.zhaopin.cn/img_button/201901/18/02_180934127172.jpg" alt=""/></a></AdvertiseTwo>
      </AdvertiseMent>
    )
  };
};

const mapState = (state) => ({

});

export default connect(mapState,null)(Advertisement);

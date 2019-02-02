import React, { PureComponent } from 'react';
import { AdvertiseMent, AdvertiseItem } from '../style';
import { connect } from 'react-redux';


class Advertisement extends PureComponent {

  render () {
    return (
      <AdvertiseMent>
        <AdvertiseItem imgUrl="https://static.ahjob.com.cn/img/files/dztl.jpg" href="http://www.baidu.com"></AdvertiseItem>
        <AdvertiseItem imgUrl="https://static.ahjob.com.cn/img/files/1000_61.jpg" href="http://www.baidu.com"></AdvertiseItem>
        <AdvertiseItem imgUrl="https://static.ahjob.com.cn/img/files/cy_sytl.jpg" href="http://www.baidu.com"></AdvertiseItem>
        <AdvertiseItem imgUrl="https://static.ahjob.com.cn/img/files/dlzp_0107.gif" href="http://www.baidu.com"></AdvertiseItem>
        <AdvertiseItem imgUrl="https://static.ahjob.com.cn/img/files/cy_sytl.jpg" href="http://www.baidu.com"></AdvertiseItem>
        <AdvertiseItem imgUrl="https://static.ahjob.com.cn/img/files/dlzp_0107.gif" href="http://www.baidu.com"></AdvertiseItem>
      </AdvertiseMent>
    )
  };
};

const mapState = (state) => ({

});

export default connect(mapState,null)(Advertisement);

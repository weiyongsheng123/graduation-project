import React, { PureComponent } from 'react';
import { AdvertiseMent, AdvertiseItem, AdvertiseOne, AdvertiseTwo } from '../style';
import { connect } from 'react-redux';
import { getAdvertisement } from '../store/actionCreators';

class Advertisement extends PureComponent {

  render () {
    const { advertisementList } = this.props;
    const newAdvertisement = advertisementList.toJS();
    let adv1 = [];
    let adv2 = [];
    let side = null;
    if (newAdvertisement.length) {
      adv1 = newAdvertisement[0];
      adv2 = newAdvertisement[1];
      side = <div>
               <AdvertiseOne><a href={adv2[0]['href']} title={adv2[0]['title']}><img src={adv2[0]['imgUrl']} alt=""/></a></AdvertiseOne>
               <AdvertiseTwo><a href={adv2[1]['href']} title={adv2[1]['title']}><img src={adv2[1]['imgUrl']} alt=""/></a></AdvertiseTwo>
             </div>;
    }
    return (
      <AdvertiseMent>
        {
          adv1.map((item)=>{
            return (
              <AdvertiseItem imgUrl={item['imgUrl']} key={item['Id']} href={item['href']} title={item['title']}></AdvertiseItem>
            )
          })
        }
        {side}
      </AdvertiseMent>
    )
  };
  componentDidMount () {
    const { advertisementList, getAdver } = this.props;
    let existAList = advertisementList.toJS();
    if (!existAList.lentgh) {
      getAdver();
    }
  }
};

const mapState = (state) => ({
  advertisementList: state.getIn(['home','advertisementList'])
});

const mapDispatch = (dispatch) => {
  return {
    getAdver () {
      dispatch(getAdvertisement());
    }
  }
};

export default connect(mapState,mapDispatch)(Advertisement);

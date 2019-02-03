import React, { PureComponent } from 'react';
import { ScrollTop, Suggest, AdvertiseOne, AdvertiseTwo } from '../style';
import { connect } from 'react-redux';
import { changeSuspension } from '../store/actionCreators';
import { Tooltip } from 'antd';
import 'antd/dist/antd.css';

class Suspension extends PureComponent {


  render () {
    const { isShow } = this.props;
    const backTop = '回到顶部';
    const suggest = '意见反馈';
    return (
      <div>
       {
         isShow ? <div>
                    <Tooltip placement="left" title={backTop}>
                      <ScrollTop onClick={this.handleScrollTop}><i className="iconfont">&#xe732;</i></ScrollTop>
                    </Tooltip>
                    <Tooltip placement="left" title={suggest}>
                      <Suggest><i className="iconfont">&#xe614;</i></Suggest>
                    </Tooltip>
                  </div>
                  : null
       }
       <AdvertiseOne><a href="http://special.zhaopin.com/2019/nh/11237/ahyx013152/careers.html"><img src="https://img02.zhaopin.cn/img_button/201901/31/01_120047558691.gif" alt=""/></a></AdvertiseOne>
       <AdvertiseTwo><a href="https://xiaoyuan.zhaopin.com/"><img src="https://img00.zhaopin.cn/img_button/201901/18/02_180934127172.jpg" alt=""/></a></AdvertiseTwo>
      </div>
    )
  };
  handleScrollTop() {
    window.scrollTo( 0, 0);
  };
  componentDidMount () {
    window.addEventListener('scroll',this.props.showScoll);
  };
  componentWillUnmount () {
    window.removeEventListener('scroll',this.props.showScoll);
  };
};

const mapState = (state) => ({
  isShow: state.getIn(['home','isShow'])
});

const mapDispatch = (dispatch) => {
  return {
    showScoll () {
      if(document.documentElement.scrollTop >= 400) {
        dispatch(changeSuspension(true))
      }
      else {
        dispatch(changeSuspension(false))
      }
    }
  }
}

export default connect(mapState,mapDispatch)(Suspension);

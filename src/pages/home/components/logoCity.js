import React, { PureComponent } from 'react';
import { LogoCityArea } from '../style';
import { connect } from 'react-redux';

class LogoCity extends PureComponent {

  render () {
    const { nowCity } = this.props;
    let city = nowCity;
    if ( nowCity === '城市求职') {
      city = '地区'
    }
    return (
      <LogoCityArea>
        <img src="./files/image/logoName.png" alt=""/>
        <h3>{ city }</h3>
      </LogoCityArea>
    )
  };
};

const mapState = (state) => ({
  nowCity: state.getIn(['head','nowCity'])
});

const mapDispatch = (dispatch) => {
  return {

  }
}

export default connect(mapState,mapDispatch)(LogoCity);

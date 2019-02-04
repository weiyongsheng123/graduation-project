import React, { PureComponent } from 'react';
import { LogoCityArea } from '../style';
import { connect } from 'react-redux';

class LogoCity extends PureComponent {

  render () {
    const { logoUrl, nowCity } = this.props;
    let city = nowCity;
    if ( nowCity === '城市求职') {
      city = '地区'
    }
    return (
      <LogoCityArea>
        <img src={logoUrl} alt=""/>
        <h3>{ city }</h3>
      </LogoCityArea>
    )
  };
};

const mapState = (state) => ({
  logoUrl: state.getIn(['header','logoUrl']),
  nowCity: state.getIn(['head','nowCity'])
});

export default connect(mapState,null)(LogoCity);

import React, { PureComponent } from 'react';
import { LogoCityArea } from '../style';
import { connect } from 'react-redux';
import { getAreaSalary } from '../store/actionCreators';
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
  componentDidMount () {
    this.props.getAreaSalaryList();
  }
};

const mapState = (state) => ({
  logoUrl: state.getIn(['header','logoUrl']),
  nowCity: state.getIn(['head','nowCity'])
});

const mapDispatch = (dispatch) => {
  return {
    getAreaSalaryList () {
      dispatch(getAreaSalary());
    }
  }
}

export default connect(mapState,mapDispatch)(LogoCity);

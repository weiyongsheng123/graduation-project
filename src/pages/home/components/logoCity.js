import React, { PureComponent } from 'react';
import { LogoCityArea } from '../style';
import { connect } from 'react-redux';


class LogoCity extends PureComponent {

  render () {
    const { logoUrl } = this.props;
    return (
      <LogoCityArea>
        <img src={logoUrl} alt=""/>
        <h3>淮南</h3>
      </LogoCityArea>
    )
  };
};

const mapState = (state) => ({
  logoUrl: state.getIn(['header','logoUrl']),
});

export default connect(mapState,null)(LogoCity);

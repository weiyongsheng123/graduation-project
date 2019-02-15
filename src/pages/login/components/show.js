import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ImgShow, Img } from '../style';

class Show extends PureComponent {
  
  render () {
    const { pattern } = this.props;
    let img = null;
    if (pattern === '求职者端') {
      img = <Img src="./files/personLogin.png"/>
    }
    else {
      img = <Img src="./files/companyLogin.png"/>
    }
    return (
      <ImgShow>
        { img }
      </ImgShow>
    )
  }
};

const mapState = (state) => ({
  pattern: state.getIn(['header','pattern'])
});

export default connect(mapState,null)(Show);

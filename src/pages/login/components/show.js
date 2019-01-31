import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ImgShow, Img } from '../style';
import personLogin from '../../../statics/personLogin.png';
import companyLogin from '../../../statics/companyLogin.png';

class Show extends PureComponent {
  
  render () {
    const { pattern } = this.props;
    let img = null;
    if (pattern === '求职者端') {
      img = <Img src={ personLogin }/>
    }
    else {
      img = <Img src={ companyLogin }/>
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

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ImgShow, Img } from '../style';

class Show extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      
    };
  }
  render () {
    const { pattern } = this.props;
    let img = null;
    if (pattern === '求职者端') {
      img = <Img src="https://recruit.applinzi.com/files/image/personLogin.png"/>
    }
    else {
      img = <Img src="https://recruit.applinzi.com/files/image/companyLogin.png"/>
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

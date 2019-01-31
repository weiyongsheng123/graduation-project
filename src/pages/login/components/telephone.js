import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TelephoneShow } from '../style';

class Show extends PureComponent {
  
  render () {
    const { phoneNumber } = this.props;
    return (
      <TelephoneShow>
        热线电话:{phoneNumber}
      </TelephoneShow>
    )
  }
};

const mapState = (state) => ({
  phoneNumber: state.getIn(['login','telephonenumber'])
});

export default connect(mapState,null)(Show);

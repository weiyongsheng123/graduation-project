import React, { PureComponent } from 'react';
import { NameArea, Name } from '../style';
import { connect } from 'react-redux';

class ResumeHeader extends PureComponent {

  render () {
    const { jobSeek } = this.props;
    return (
      <NameArea>
        <Name>{jobSeek.get('name')}的简历</Name>
      </NameArea>
    )
  }
};

const mapState = (state) => ({
  jobSeek: state.getIn(['login','jobSeek'])
});

const mapDispatch = (dispatch) => {
  return {
    
  }
};

export default connect(mapState,mapDispatch)(ResumeHeader);

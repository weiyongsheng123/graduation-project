import React, { PureComponent } from 'react';
import { NameArea, Name, SendResume } from '../style';
import { connect } from 'react-redux';
import { changeShowResume } from '../store/actionCreators';

class ResumeHeader extends PureComponent {
  render () {
    const { jobSeek, showResume, routerId, jobseekId } = this.props;
    return (
      <NameArea>
        <Name className={showResume ? 'active' : ''} onClick={()=>this.changeResumeShow(true)}>{jobSeek.get('name')}的简历</Name>
        {
          routerId === jobseekId ? <SendResume className={showResume ? '' : 'active'} onClick={()=>this.changeResumeShow(false)}>已经发出的申请</SendResume>
                                 :
                                   null
        }
      </NameArea>
    )
  };
  changeResumeShow (value) {
    this.props.change(value);
  };
};

const mapState = (state) => ({
  jobSeek: state.getIn(['login','jobSeek']),
  showResume: state.getIn(['resume','showResume']),
  routerId: state.getIn(['resume','routerId']),
  jobseekId: state.getIn(['login','jobseekId'])
});

const mapDispatch = (dispatch) => {
  return {
    change (value) {
      dispatch(changeShowResume(value));
    }
  }
};

export default connect(mapState,mapDispatch)(ResumeHeader);

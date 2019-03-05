import React, { PureComponent } from 'react';
import Head from '../../common/head';
import Suspension from '../../common/suspension';
import Ajax from '../../common/ajax';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ResumeWrapper, ResumeContent } from './style';
import ResumeHeader from './components/resumeHeader';
import ResumeDetail from './components/indexDetail';
import ResumeNav from './components/resumeNav';
import ResumeSend from './components/resumeSend';
import { companyShowJobseek, getRouterJobseekId } from './store/actionCreators';

class Resume extends PureComponent {

  render () {
    const { showResume } = this.props;
    return (
      <ResumeWrapper>
        <Head/>
        <ResumeHeader/>
        {
          showResume ? <ResumeContent>
                         <ResumeDetail/>
                         <ResumeNav/>
                       </ResumeContent>
                     :
                       <ResumeSend/>
        }
        <Suspension/>
        <Ajax/>
      </ResumeWrapper>
    )
  }
  componentDidMount () {
    window.scrollTo( 0, 0);
    const { getId } = this.props;
    let Id = this.props.match.params.Id;
    if (Id !== '0') {
      getId(Id);
    }
  }
};

const mapState = (state) => ({
  showResume: state.getIn(['resume','showResume'])
});

const mapDispatch = (dispatch) => {
 return {
   getId (Id) {
     dispatch(companyShowJobseek(Id));
     dispatch(getRouterJobseekId(Id));
   }
 }
}

export default connect(mapState,mapDispatch)(withRouter(Resume));

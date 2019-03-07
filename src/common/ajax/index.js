import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { AjaxArea, AjaxLight, AjaxImg, AjaxSend, SendImg, SendName, AjaxThrow } from './style';

class Ajax extends PureComponent {
  
  render () {
    const { ajax, jobSeek, company, pattern } = this.props;
    let ajaxHappen = null;
    if (ajax === 'load') {
      ajaxHappen = <AjaxArea>
                     <AjaxLight src="https://recruit.applinzi.com/files/image/light.png"/>
                     <AjaxImg src="https://recruit.applinzi.com/files/image/load.gif"/>
                   </AjaxArea>;
    }
    else if (ajax === 'send') {
      let name = '';
      if (pattern === '求职者端') {
        name = jobSeek.get('name');
      }
      else {
        name = company.get('name');
      }
      ajaxHappen = <AjaxArea>
                     <AjaxSend>
                       <SendImg src="https://recruit.applinzi.com/files/image/send.gif"/>
                       <SendName>{name}</SendName>
                     </AjaxSend>
                   </AjaxArea>;
    }
    else if (ajax === 'throw') {
      ajaxHappen = <AjaxArea>
                     <AjaxThrow src="https://recruit.applinzi.com/files/image/throw.gif"/>
                   </AjaxArea>;
    }
    else {
      ajaxHappen = null;
    }
    return (
      <Fragment>
        {ajaxHappen}
      </Fragment>
    )
  }
};

const mapState = (state) => ({
  ajax: state.getIn(['ajax','ajax']),
  pattern: state.getIn(['header','pattern']),
  jobSeek: state.getIn(['login','jobSeek']),
  company: state.getIn(['login','company'])
});

export default connect(mapState,null)(Ajax);

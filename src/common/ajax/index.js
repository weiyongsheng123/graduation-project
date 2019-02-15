import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { AjaxArea, AjaxLight, AjaxImg } from './style';

class Ajax extends PureComponent {
  
  render () {
    const { ajax } = this.props;
    return (
      <Fragment>
        {ajax ? <AjaxArea><AjaxLight src="./files/light.png"/><AjaxImg src="./files/load.gif"/></AjaxArea> : null}
      </Fragment>
    )
  }
};

const mapState = (state) => ({
  ajax: state.getIn(['ajax','ajax'])
});

export default connect(mapState,null)(Ajax);

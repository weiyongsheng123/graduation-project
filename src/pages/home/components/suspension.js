import React, { PureComponent } from 'react';
import { ScrollTop, Suggest } from '../style';
import { connect } from 'react-redux';

class Suspension extends PureComponent {

  render () {

    return (
      <div>
        <ScrollTop><i className="iconfont">&#xe732;</i></ScrollTop>
        <Suggest><i className="iconfont">&#xe614;</i></Suggest>
        <div style={{"width":"100px","height":"100px","background":"red"}} onMouseOver={()=>{alert("aaa")}}><div style={{"width":"50px","height":"50px","background":"green"}}></div></div>
      </div>
    )
  };
};

const mapState = (state) => ({
  
});

export default connect(mapState,null)(Suspension);

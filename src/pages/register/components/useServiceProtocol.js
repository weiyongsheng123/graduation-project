import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ServiceWrapper } from '../style';

class UseServiceProtocol extends PureComponent {

  render () {
    return (
      <ServiceWrapper>
       <p>
         在大啊回单卡号地块哈萨克的哈客户端
           大家都卡健身卡佳都科技阿肯德基按揭贷款骄傲肯德基爱可登
       </p>
       <p>
         在大啊回单卡号地块哈萨克的哈客户端
           大家都卡健身卡佳都科技阿肯德基按揭贷款骄傲肯德基爱可登
       </p>
      </ServiceWrapper>
    )
  }
};

const mapState = (state) => ({
  
});

const mapDispatch = (dispatch) => {
  return {
    
  }
};

export default connect(mapState,mapDispatch)(UseServiceProtocol);

import React, { PureComponent } from 'react';
import { CompanyArea, CompanyImg, CompanyDetail } from '../style';
import { connect } from 'react-redux';

class PositionCompany extends PureComponent {

  render () {
    const { companyData } = this.props;
    let newData = companyData.toJS();
    if (!newData['logoUrl']) {
      newData['logoUrl'] = "http://localhost:3000/files/image/companyLogoUrl.jpg";
    }
    return (
      <CompanyArea>
        <CompanyImg src={newData['logoUrl']} alt={newData['name']}/>
        <CompanyDetail>
          <span className="iconfont">&#xe70a;</span>
          <span className="detail">{newData['name']}</span>
        </CompanyDetail>
        <CompanyDetail>
          <span className="iconfont">&#xe61f;</span>
          <span className="detail">{newData['direction']}</span>
        </CompanyDetail>
        <CompanyDetail>
          <span className="iconfont">&#xe611;</span>
          <span className="detail">{newData['beginTime']}</span>
        </CompanyDetail>
        <CompanyDetail>
          <span className="iconfont">&#xe604;</span>
          <span className="detail">{newData['scale']}</span>
        </CompanyDetail>
        <CompanyDetail>
          <span className="iconfont">&#xe681;</span>
          <span className="detail small">{newData['desc']}</span>
        </CompanyDetail>
      </CompanyArea>
    )
  }

};

const mapState = (state) => ({
  companyData: state.getIn(['positions','companyData'])
});

const mapDispatch = (dispatch) => {
  return {
    
  }
};

export default connect(mapState,mapDispatch)(PositionCompany);

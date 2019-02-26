import React, { PureComponent } from 'react';
import { NewsArea, NewsH3, NewsItem } from '../style';
import { connect } from 'react-redux';
import { getResumePositionList } from '../../search/store/actionCreators';

class NewRecruit extends PureComponent {

  render () {
    const { positionResumeList } = this.props;
    let newList = positionResumeList.toJS();
    let bestNewList = [];
    if(newList.length) {
      newList.sort(this.compared);
      for (let i=0;i<9;i++) {
        bestNewList.push(newList[i]);
      }
    }
    return (
      <NewsArea>
        <NewsH3>最新岗位</NewsH3>
        {
          bestNewList.map((item)=>{
            return (
              <NewsItem key={item['Id']}>
                <h3 title={item['title']}>{item['title']}</h3>
                <span className="salary">{item['salary']}</span>
                <p className="areaStudyExper"><span className="area">{item['area']}</span>&nbsp;&nbsp;&nbsp;<span className="study">{item['education']}</span>&nbsp;&nbsp;&nbsp;<span className="experience">{item['experience']}</span></p>
                <hr className="hr"/>
                <h4>{item['companyName']}</h4>
                <p className="desc">{item['scale']}</p>
              </NewsItem>
            )
          })
        }
      </NewsArea>
    )
  };
  componentDidMount () {
    const { positionResumeList, getList } = this.props;
    let existPlist = positionResumeList.toJS();
    if (!existPlist.length) {
      getList();
    }
  }
  compared (obj1, obj2) {
    var val1 = obj1.time;
    var val2 = obj2.time;
    if (val1 < val2) {
        return 1;
    } else if (val1 > val2) {
        return -1;
    } else {
        return 0;
    }
  };
};

const mapState = (state) => ({
  positionResumeList: state.getIn(['search','positionResumeList'])
});

const mapDispatch = (dispatch) => {
  return {
    getList () {
      dispatch(getResumePositionList());
    }
  }
};

export default connect(mapState,mapDispatch)(NewRecruit);

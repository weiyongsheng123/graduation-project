import React, { PureComponent } from 'react';
import { DetailArea, DetailTitle, DetailList, DetailItem, DetailEmpty } from '../style';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { getResumePositionList, getNewPositionArray } from '../store/actionCreators';

class SearchDetail extends PureComponent {
  constructor (props) {
    super(props);
    this.state={
      list: []
    };
    this.sortTime = this.sortTime.bind(this);
    this.sortSalary = this.sortSalary.bind(this);
  }
  render () {
    const { showPositionList, page, pattern } = this.props;
    const newList = showPositionList.toJS();
    const list = [];
    if(newList.length) {
      for ( let i = (page-1)*10 ; i < page*10 ; i ++) {
        if (newList[i]) {
          list.push(newList[i]);
        }
        else {
          break;
        }
      }
    }
    return (
      <DetailArea>
        <DetailTitle>
          <span className="tip">排序选择</span>
          <span className="click" onClick={this.sortSalary}>薪资最高</span>
          <span className="click" onClick={this.sortTime}>最新发布</span>
        </DetailTitle>
        { list.length? 
          <DetailList>
          {
            list.map((item)=>{
              return (
                <Link to={"/positions/" + item['Id']} key={item['Id']}>
                <DetailItem>
                  <i className="iconfont hover">&#xe6dd;</i>
                  <h4>{item['title']}</h4>
                  <p className="companyName"><i className="iconfont">&#xe647;</i>{item['companyName']}</p>
                  <p className="need">
                    <span>{item['area']}</span>
                    <span>{item['education']}</span>
                    <span>{item['numbers']}</span>
                    <span>{item['experience']}</span>
                    <span className="right">{item['time']}</span>
                  </p>
                  <p className="salary"><i className="iconfont">&#xe615;</i>{item.salary}</p>
                  <p className="continue">招聘中</p>
                  <Button type="primary" disabled={pattern === '求职者端' ? false : true} title={pattern === '求职者端' ? "立刻申请" : "企业端不可选"} onClick={(e)=>{e.preventDefault()}}>立即申请</Button>
                </DetailItem>
                </Link>
              )
            })
          }
          </DetailList>
          :
          <DetailList>
            <DetailEmpty imgUrl="./files/image/emptyList.png" title="未查询到相关数据"/>
          </DetailList>
        }
      </DetailArea>
    )
  };
  sortTime () {
    const { showPositionList, changeSort } =this.props;
    let newsPositionList = showPositionList.toJS();
    var compare = function (obj1, obj2) {
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
    newsPositionList.sort(compare);
    changeSort(newsPositionList);
  };
  sortSalary () {
    const { showPositionList, changeSort } =this.props;
    let newsPositionList = showPositionList.toJS();
    var compare = function (obj1, obj2) {
      var val1 = obj1.salary;
      var val2 = obj2.salary;
      if (val1 < val2) {
          return 1;
      } else if (val1 > val2) {
          return -1;
      } else {
          return 0;
      }
    };
    newsPositionList.sort(compare);
    changeSort(newsPositionList);
  };
  componentDidMount () {
   const { positionResumeList, getList } = this.props;
    let existPlist = positionResumeList.toJS();
    if (!existPlist.length) {
      getList();
    }
  };
};

const mapState = (state) => ({
  positionResumeList: state.getIn(['search','positionResumeList']),
  showPositionList: state.getIn(['search','showPositionList']),
  page: state.getIn(['search','page']),
  pattern: state.getIn(['header','pattern'])
});

const mapDispatch = (dispatch) => {
  return {
    getList () {
      dispatch(getResumePositionList());
    },
    changeSort (values) {
      dispatch(getNewPositionArray(values));
    }
  }
};

export default connect(mapState,mapDispatch)(SearchDetail);

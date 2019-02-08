import React, { PureComponent } from 'react';
import { DetailArea, DetailTitle, DetailList, DetailItem } from '../style';
import { connect } from 'react-redux';
import { Button } from 'antd';

class SearchDetail extends PureComponent {

  render () {
    const { positionList, page } = this.props;
    const newList = positionList.toJS();
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
          <span className="click">薪资最高</span>
          <span className="click">最新发布</span>
        </DetailTitle>
        <DetailList>
          {
            list.map((item,index)=>{
              return (
                <DetailItem key={index}>
                  <i className="iconfont hover">&#xe6dd;</i>
                  <h4>{item.position}</h4>
                  <p className="companyName"><i className="iconfont">&#xe647;</i>{item.company}</p>
                  <p className="need">
                    <span>{item.city}</span>
                    <span>{item.educate}</span>
                    <span>{item.numbers}</span>
                    <span>{item.experience}</span>
                  </p>
                  <p className="salary"><i className="iconfont">&#xe615;</i>{item.salary}</p>
                  <p className="continue">招聘中</p>
                  <Button type="primary">立即申请</Button>
                </DetailItem>
              )
            })
          }
        </DetailList>
      </DetailArea>
    )
  };
};

const mapState = (state) => ({
  positionList: state.getIn(['search','positionList']),
  page: state.getIn(['search','page'])
});

export default connect(mapState,null)(SearchDetail);
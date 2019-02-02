import React, { PureComponent } from 'react';
import { NewsArea, NewsH3, NewsItem } from '../style';
import { connect } from 'react-redux';


class NewRecruit extends PureComponent {

  render () {
    return (
      <NewsArea>
        <NewsH3>最新岗位</NewsH3>
        <NewsItem>
          <h3>销售管理培训生</h3>
          <span className="salary">3000-5000</span>
          <p className="areaStudyExper"><span className="area">合肥</span>&nbsp;&nbsp;&nbsp;<span className="study">本科</span>&nbsp;&nbsp;&nbsp;<span className="experience">两年经验</span></p>
          <hr className="hr"/>
          <h4>蚌埠平头哥学院</h4>
          <p className="desc">民营0-50人</p>
        </NewsItem>
        <NewsItem>
          <h3>销售管理培训生</h3>
          <span className="salary">3000-5000</span>
          <p className="areaStudyExper"><span className="area">合肥</span>&nbsp;&nbsp;&nbsp;<span className="study">本科</span>&nbsp;&nbsp;&nbsp;<span className="experience">两年经验</span></p>
          <hr className="hr"/>
          <h4>蚌埠平头哥学院</h4>
          <p className="desc">民营0-50人</p>
        </NewsItem>
        <NewsItem>
          <h3>销售管理培训生</h3>
          <span className="salary">3000-5000</span>
          <p className="areaStudyExper"><span className="area">合肥</span>&nbsp;&nbsp;&nbsp;<span className="study">本科</span>&nbsp;&nbsp;&nbsp;<span className="experience">两年经验</span></p>
          <hr className="hr"/>
          <h4>蚌埠平头哥学院</h4>
          <p className="desc">民营0-50人</p>
        </NewsItem>
        <NewsItem>
          <h3>销售管理培训生</h3>
          <span className="salary">3000-5000</span>
          <p className="areaStudyExper"><span className="area">合肥</span>&nbsp;&nbsp;&nbsp;<span className="study">本科</span>&nbsp;&nbsp;&nbsp;<span className="experience">两年经验</span></p>
          <hr className="hr"/>
          <h4>蚌埠平头哥学院</h4>
          <p className="desc">民营0-50人</p>
        </NewsItem>
        <NewsItem>
          <h3>销售管理培训生</h3>
          <span className="salary">3000-5000</span>
          <p className="areaStudyExper"><span className="area">合肥</span>&nbsp;&nbsp;&nbsp;<span className="study">本科</span>&nbsp;&nbsp;&nbsp;<span className="experience">两年经验</span></p>
          <hr className="hr"/>
          <h4>蚌埠平头哥学院</h4>
          <p className="desc">民营0-50人</p>
        </NewsItem>
        <NewsItem>
          <h3>销售管理培训生</h3>
          <span className="salary">3000-5000</span>
          <p className="areaStudyExper"><span className="area">合肥</span>&nbsp;&nbsp;&nbsp;<span className="study">本科</span>&nbsp;&nbsp;&nbsp;<span className="experience">两年经验</span></p>
          <hr className="hr"/>
          <h4>蚌埠平头哥学院</h4>
          <p className="desc">民营0-50人</p>
        </NewsItem>
        <NewsItem>
          <h3>销售管理培训生</h3>
          <span className="salary">3000-5000</span>
          <p className="areaStudyExper"><span className="area">合肥</span>&nbsp;&nbsp;&nbsp;<span className="study">本科</span>&nbsp;&nbsp;&nbsp;<span className="experience">两年经验</span></p>
          <hr className="hr"/>
          <h4>蚌埠平头哥学院</h4>
          <p className="desc">民营0-50人</p>
        </NewsItem>
        <NewsItem>
          <h3>销售管理培训生</h3>
          <span className="salary">3000-5000</span>
          <p className="areaStudyExper"><span className="area">合肥</span>&nbsp;&nbsp;&nbsp;<span className="study">本科</span>&nbsp;&nbsp;&nbsp;<span className="experience">两年经验</span></p>
          <hr className="hr"/>
          <h4>蚌埠平头哥学院</h4>
          <p className="desc">民营0-50人</p>
        </NewsItem>
        <NewsItem>
          <h3>销售管理培训生</h3>
          <span className="salary">3000-5000</span>
          <p className="areaStudyExper"><span className="area">合肥</span>&nbsp;&nbsp;&nbsp;<span className="study">本科</span>&nbsp;&nbsp;&nbsp;<span className="experience">两年经验</span></p>
          <hr className="hr"/>
          <h4>蚌埠平头哥学院</h4>
          <p className="desc">民营0-50人</p>
        </NewsItem>
      </NewsArea>
    )
  };
};

const mapState = (state) => ({

});

export default connect(mapState,null)(NewRecruit);

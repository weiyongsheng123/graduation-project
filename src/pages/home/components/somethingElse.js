import React, { PureComponent } from 'react';
import { SomethingWrapper, WorkInfo, InterviewSkill } from '../style';
import { connect } from 'react-redux';
import { getRecommendWork, getRecommendSkill } from '../store/actionCreators';

class SomethingElse extends PureComponent {

  render () {
    const { recommendWorkList, recommendSkillList } = this.props;
    let workList = recommendWorkList.toJS();
    let skillList = recommendSkillList.toJS();
    let workTitle = [];
    let workItem = [];
    let skillTitle = [];
    let skillItem = [];
    let workTle = null;
    let skillTle = null;
    if (workList.length) {
      workTitle = workList[0][0];
      workItem = workList[1];
      workTle = <div className="msg">
              <a className="tname" target="_blank" rel="noopener noreferrer" href={workTitle['href']} title={workTitle['title']}>
                <strong>{workTitle['title']}</strong>
              </a>
              <p className="p">{workTitle['desc']}
                <a target="_blank" rel="noopener noreferrer" href={workTitle['href']}>
                  <span>阅读全文&gt;&gt;</span>
                </a>
              </p>
           </div>
    }
    if (skillList.length) {
      skillTitle = skillList[0][0];
      skillItem = skillList[1];
      skillTle = <div>
                   <a href={skillTitle['href']} target="_blank" rel="noopener noreferrer" >
                     <img className="infoBoxPic" src={skillTitle['imgUrl']} alt={skillTitle['title']}/>
                   </a>
                   <br/>
                   <a className="desc" href={skillTitle['href']} target="_blank" rel="noopener noreferrer" >
                     {skillTitle['title']}
                   </a>
                 </div>
    }
    return (
      <SomethingWrapper>
         <WorkInfo>
           <strong className="tle">职场资讯</strong>
           { workTle }
           <ul className="dcon">
             {
               workItem.map((item)=>{
                 return (
                   <li key={item['Id']}>
                     <a target="_blank" rel="noopener noreferrer" href={item['href']} title={item['title']}>{item['desc']}</a>
                     <img src="./files/image/new.png" alt="最新"/>
                   </li>
                 )
               })
             }
          </ul>
         </WorkInfo>
         <InterviewSkill>
           <strong className="tle">面试技巧</strong>
           <dd>
             { skillTle }
             <ul>
               {
                 skillItem.map((item)=>{
                   return (
                     <li key={item['Id']}>
                       <a href={item['href']} target="_blank" rel="noopener noreferrer" >{item['title']}</a>
                     </li>
                   )
                 })
               }
             </ul>
           </dd>
         </InterviewSkill>
      </SomethingWrapper>
    )
  };
  componentDidMount () {
    this.props.getRecommend();
  }
};

const mapState = (state) => ({
  recommendWorkList: state.getIn(['home','recommendWorkList']),
  recommendSkillList: state.getIn(['home','recommendSkillList'])
});

const mapDispatch = (dispatch) => {
  return {
    getRecommend () {
      dispatch(getRecommendWork());
      dispatch(getRecommendSkill());
    }
  }
};

export default connect(mapState,mapDispatch)(SomethingElse);

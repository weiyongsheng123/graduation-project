import React, { PureComponent } from 'react';
import { ChooiceArea, RadioArea } from '../style';
import { connect } from 'react-redux';
import {
  Radio
} from 'antd';

class SomeChooice extends PureComponent {

  render () {
    const RadioGroup = Radio.Group;
    const { areaList, salaryList, experienceList } = this.props;
    return (
      <ChooiceArea>
        <RadioArea>
          <label className="label" htmlFor="area">地区：</label>
            <RadioGroup>
              {
                areaList.map((item)=>{
                  return (
                    <Radio name="area" className="area" value={ item } key ={ item }>{ item }</Radio>
                  )
                })
              }
              
            </RadioGroup>
        </RadioArea>
        <RadioArea>
          <label className="label" htmlFor="salary">月薪：</label>
            <RadioGroup>
              {
                salaryList.map((item)=>{
                  return (
                    <Radio name="salary" className="salary" value={ item } key ={ item }>{ item }</Radio>
                  )
                })
              }
            </RadioGroup>
        </RadioArea>
        <RadioArea>
          <label className="label" htmlFor="experience">经验：</label>
            <RadioGroup>
              {
                experienceList.map((item)=>{
                  return (
                    <Radio name="experience" className="experience" value={ item } key ={ item }>{ item }</Radio>
                  )
                })
              }
            </RadioGroup>
        </RadioArea>
      </ChooiceArea>
    )
  };
};

const mapState = (state) => ({
  areaList: state.getIn(['home','areaList']),
  salaryList: state.getIn(['home','salaryList']),
  experienceList: state.getIn(['home','experienceList'])
});

export default connect(mapState,null)(SomeChooice);

import React, { PureComponent } from 'react';
import { ChooiceArea, RadioArea } from '../style';
import { connect } from 'react-redux';
import {
  Radio
} from 'antd';
import { changeNeeds } from '../store/actionCreators';

class SomeChooice extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      needs: {
        areaNeed: '',
        salaryNeed: '',
        experienceNeed: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }
  render () {
    const RadioGroup = Radio.Group;
    const { areaList, salaryList, experienceList } = this.props;
    return (
      <ChooiceArea>
        <RadioArea>
          <label className="label" htmlFor="areaNeed">地区：</label>
            <RadioGroup name="areaNeed" onChange={this.handleChange}>
              {
                areaList.map((item)=>{
                  return (
                    <Radio name="areaNeed" className="area" value={ item } key ={ item }>{ item }</Radio>
                  )
                })
              }
              
            </RadioGroup>
        </RadioArea>
        <RadioArea>
          <label className="label" htmlFor="salaryNeed">月薪：</label>
            <RadioGroup name="salaryNeed" onChange={this.handleChange}>
              {
                salaryList.map((item)=>{
                  return (
                    <Radio name="salaryNeed" className="salary" value={ item } key ={ item }>{ item }</Radio>
                  )
                })
              }
            </RadioGroup>
        </RadioArea>
        <RadioArea>
          <label className="label" htmlFor="experienceNeed">经验：</label>
            <RadioGroup name="experienceNeed" onChange={this.handleChange}>
              {
                experienceList.map((item)=>{
                  return (
                    <Radio name="experienceNeed" className="experience" value={ item } key ={ item }>{ item }</Radio>
                  )
                })
              }
            </RadioGroup>
        </RadioArea>
      </ChooiceArea>
    )
  };
  handleChange (e) {
    const value = e.target.value;
    const name = e.target.name;
    const newNeed = {...this.state.needs};
    newNeed[name] = value;
    this.setState({
      needs: newNeed
    });
    this.props.onChangeNeeds(newNeed);
  }
};

const mapState = (state) => ({
  areaList: state.getIn(['home','areaList']),
  salaryList: state.getIn(['home','salaryList']),
  experienceList: state.getIn(['home','experienceList'])
});

const mapDispatch = (dispatch) => {
  return {
    onChangeNeeds (values) {
      dispatch(changeNeeds(values));
    }
  }
};

export default connect(mapState,mapDispatch)(SomeChooice);

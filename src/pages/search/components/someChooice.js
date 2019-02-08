import React, { PureComponent } from 'react';
import { ChooiceArea, RadioArea } from '../style';
import { connect } from 'react-redux';
import {
  Radio
} from 'antd';

class SomeChooice extends PureComponent {

  render () {
    const RadioGroup = Radio.Group;
    return (
      <ChooiceArea>
        <RadioArea>
          <label className="label" htmlFor="area">地区：</label>
            <RadioGroup>
              <Radio name="area" value='在职'>在职</Radio>
              <Radio name="area" value='离职'>离职</Radio>
              <Radio name="area" value='a'>在校</Radio>
              <Radio name="area" value='a职'>在职</Radio>
              <Radio name="area" value='w职'>离职</Radio>
              <Radio name="area" value='在e校'>在校</Radio>
              <Radio name="area" value='awae职'>在职</Radio>
              <Radio name="area" value='weawe职'>离职</Radio>
              <Radio name="area" value='在waewa校'>在校</Radio>
              <Radio name="area" value='awea职'>在职</Radio>
              <Radio name="area" value='wwea职'>离职</Radio>
              <Radio name="area" value='在aae校'>在校</Radio>
              <Radio name="area" value='在职'>在职</Radio>
              <Radio name="area" value='离职'>离职</Radio>
              <Radio name="area" value='a'>在校</Radio>
              <Radio name="area" value='a职'>在职</Radio>
              <Radio name="area" value='w职'>离职</Radio>
              <Radio name="area" value='在e校'>在校</Radio>
              <Radio name="area" value='awae职'>在职</Radio>
              <Radio name="area" value='weawe职'>离职</Radio>
              <Radio name="area" value='在waewa校'>在校</Radio>
              <Radio name="area" value='awea职'>在职</Radio>
              <Radio name="area" value='wwea职'>离职</Radio>
              <Radio name="area" value='在aae校'>在校</Radio>
            </RadioGroup>
        </RadioArea>
        <RadioArea>
          <label className="label" htmlFor="salary">月薪：</label>
            <RadioGroup>
              <Radio name="salary" value='在职'>在职</Radio>
              <Radio name="salary" value='离职'>离职</Radio>
              <Radio name="salary" value='a'>在校</Radio>
              <Radio name="salary" value='在职'>在职</Radio>
              <Radio name="salary" value='离职'>离职</Radio>
              <Radio name="salary" value='a'>在校</Radio>
              <Radio name="salary" value='在职'>在职</Radio>
              <Radio name="salary" value='离职'>离职</Radio>
              <Radio name="salary" value='a'>在校</Radio>
              <Radio name="salary" value='在职'>在职</Radio>
              <Radio name="salary" value='离职'>离职</Radio>
              <Radio name="salary" value='a'>在校</Radio>
              <Radio name="salary" value='在职'>在职</Radio>
              <Radio name="salary" value='离职'>离职</Radio>
              <Radio name="salary" value='a'>在校</Radio>
              <Radio name="salary" value='在职'>在职</Radio>
              <Radio name="salary" value='离职'>离职</Radio>
              <Radio name="salary" value='a'>在校</Radio>
              <Radio name="salary" value='在职'>在职</Radio>
              <Radio name="salary" value='离职'>离职</Radio>
              <Radio name="salary" value='a'>在校</Radio>
            </RadioGroup>
        </RadioArea>
        <RadioArea>
          <label className="label" htmlFor="experience">经验：</label>
            <RadioGroup>
              <Radio name="experience" value='在职'>在职</Radio>
              <Radio name="experience" value='离职'>离职</Radio>
              <Radio name="experience" value='a'>在校</Radio>
              <Radio name="experience" value='在职'>在职</Radio>
              <Radio name="experience" value='离职'>离职</Radio>
              <Radio name="experience" value='a'>在校</Radio>
              <Radio name="experience" value='在职'>在职</Radio>
              <Radio name="experience" value='离职'>离职</Radio>
              <Radio name="experience" value='a'>在校</Radio>
              <Radio name="experience" value='在职'>在职</Radio>
              <Radio name="experience" value='离职'>离职</Radio>
              <Radio name="experience" value='a'>在校</Radio>
              <Radio name="experience" value='在职'>在职</Radio>
              <Radio name="experience" value='离职'>离职</Radio>
              <Radio name="experience" value='a'>在校</Radio>
              <Radio name="experience" value='在职'>在职</Radio>
              <Radio name="experience" value='离职'>离职</Radio>
              <Radio name="experience" value='a'>在校</Radio>
              <Radio name="experience" value='在职'>在职</Radio>
              <Radio name="experience" value='离职'>离职</Radio>
              <Radio name="experience" value='a'>在校</Radio>
            </RadioGroup>
        </RadioArea>
      </ChooiceArea>
    )
  };
};

const mapState = (state) => ({
  
});

export default connect(mapState,null)(SomeChooice);

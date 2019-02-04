import React, { PureComponent } from 'react';
import { ResumeNameArea, ResumeNameAreaProfile, ResumeNameAreaEdit, InputDiv } from '../style';
import { Input, Radio, InputNumber, Select, Upload, message, Button, Icon } from 'antd';

class ResumeName extends PureComponent {

  render () {
   const RadioGroup = Radio.Group;
   const Option = Select.Option;
   const files = {
    name: 'file',
    action: '',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
    return (
      <ResumeNameArea>
        <ResumeNameAreaProfile>
          <img src="http://mypics.zhaopin.cn//avatar/2018/1/19/ce2e873a-2b33-421a-a0f5-926a7a7d8110.jpg" alt=""/>
          <p className="one">
            <span title="魏勇胜">魏勇胜</span>
          </p>
          <p className="two">
            <span>
              男
            </span>
            <span >22岁</span>
            <span>
              淮南
            </span>
            <span>无工作经验</span>
          </p>
          <p className="three">
            <i className="iconfont phone">&#xe6ba;</i>
            <span>159****3019</span>
            <i className="iconfont email">&#xe64b;</i>
            <span>84675****@qq.com</span>
          </p>
          <span className="four">
            <span className="iconfont">&#xe609;</span>
            编辑
          </span>
        </ResumeNameAreaProfile>
        <ResumeNameAreaEdit>
          <InputDiv>
            <label htmlFor="name">用户名</label>
            <Input className="input" name="name" placeholder="请输入邮箱或手机号" allowClear />
          </InputDiv>
          <InputDiv>
            <label htmlFor="sex">性别</label>
            <RadioGroup value='男'>
              <Radio name="sex" value='男'>男</Radio>
              <Radio name="sex" value='女'>女</Radio>
            </RadioGroup>
          </InputDiv>
          <InputDiv>
            <label htmlFor="age">年龄</label>
            <InputNumber name="age" min={1} max={100} defaultValue={23}/>
          </InputDiv>
          <InputDiv>
            <label htmlFor="area">地区</label>
            <Select
              name="area"
              showSearch
              placeholder="请选择地区"
              optionFilterProp="children"
              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              <Option value="淮南">淮南</Option>
              <Option value="合肥">合肥</Option>
              <Option value="蚌埠">蚌埠</Option>
            </Select>
          </InputDiv>
          <InputDiv>
            <label htmlFor="experience">经验</label>
            <Select
              name="experience"
              showSearch
              placeholder="请选择经验时长"
              optionFilterProp="children"
              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              <Option value="无经验">无经验</Option>
              <Option value="3-6个月">3-6个月</Option>
              <Option value="6个月-1年">6个月-1年</Option>
            </Select>
          </InputDiv>
          <InputDiv>
            <label htmlFor="phone">手机</label>
            <Input className="input" name="phone" placeholder="请输入手机号" allowClear />
          </InputDiv>
          <InputDiv>
            <label htmlFor="email">邮箱</label>
            <Input className="input" name="email" type="email" placeholder="请输入邮箱" allowClear />
          </InputDiv>
          <InputDiv>
            <label htmlFor="file">头像</label>
            <Upload name='file' {...files}>
              <Button>
                <Icon type="upload" /> 上传
              </Button>
            </Upload>
          </InputDiv>
        </ResumeNameAreaEdit>
      </ResumeNameArea>
    )
  }
};

export default ResumeName;
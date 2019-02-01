import React, { PureComponent } from 'react';
import { RegisterDiv, InputArea, RegisterTitle, RegisterForm, BackLogin } from '../style';
import {
  Form, Input, Tooltip, Icon, Select, Row, Col, Checkbox, Button,
} from 'antd';
import 'antd/dist/antd.css';
import Ident from '../../../common/identCode';
import { Link } from 'react-router-dom';

class RegistrationForm extends PureComponent {
  state = {
    confirmDirty: false
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入密码不一致');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  render () {
   const { getFieldDecorator } = this.props.form;
    const { Option } = Select;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );
    return (
      <RegisterDiv>
        <InputArea>
          <RegisterTitle>
            求职者注册
          </RegisterTitle>
          <RegisterForm>
             <Form onSubmit={this.handleSubmit}>
              <Form.Item
                {...formItemLayout}
                label="E-mail"
              >
                {getFieldDecorator('email', {
                  rules: [{
                    type: 'email', message: '输入的email有误',
                  }, {
                    required: true, message: '请输入email',
                  }],
                })(
                  <Input />
                )}
              </Form.Item>
              <Form.Item
                {...formItemLayout}
                label="密码"
              >
                {getFieldDecorator('password', {
                  rules: [{
                    required: true, message: '请输入你的密码！',
                  }, {
                    validator: this.validateToNextPassword,
                  }],
                })(
                  <Input type="password" />
                )}
              </Form.Item>
              <Form.Item
                {...formItemLayout}
                label="确认密码"
              >
                {getFieldDecorator('confirm', {
                  rules: [{
                    required: true, message: '请确认你的密码！',
                  }, {
                    validator: this.compareToFirstPassword,
                  }],
                })(
                  <Input type="password" onBlur={this.handleConfirmBlur} />
                )}
              </Form.Item>
              <Form.Item
                {...formItemLayout}
                label={(
                  <span>
                    称呼&nbsp;
                    <Tooltip title="求职人称呼">
                      <Icon type="question-circle-o" />
                    </Tooltip>
                  </span>
                )}
              >
                {getFieldDecorator('nickname', {
                  rules: [{ required: true, message: '请输入你的称呼', whitespace: true }],
                })(
                  <Input />
                )}
              </Form.Item>
              <Form.Item
                {...formItemLayout}
                label="手机号码"
              >
                {getFieldDecorator('phone', {
                  rules: [{ required: true, message: '请输入你的手机号!' }],
                })(
                  <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                )}
              </Form.Item>
              <Form.Item
                className="decreaseMargin"
                {...formItemLayout}
                label="验证码"
                extra="输入验证码，看不清可点击刷新"
              >
                <Row gutter={8}>
                  <Col span={12}>
                    {getFieldDecorator('captcha', {
                      rules: [{ required: true, message: '请输入你的验证码' }],
                    })(
                      <Input />
                    )}
                  </Col>
                  <Col span={12}>
                    <Ident/>
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item className="decreaseMargin" {...tailFormItemLayout}>
                {getFieldDecorator('agreement', {
                  valuePropName: 'checked',
                })(
                  <Checkbox>
                    我已阅读
                    <Link to="/register/userProtocol">
                    <p className="inline">用户服务协议</p>
                    </Link>
                    <span className="inline">和</span>
                    <Link to="/register/privacyPolicy">
                    <p  className="inline">隐私政策</p>
                    </Link>
                  </Checkbox>
                )}
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">注册</Button>
              </Form.Item>
            </Form>
          </RegisterForm>
          <Link to="/login">
            <BackLogin>已有账号，立即登录</BackLogin>
          </Link>
        </InputArea>
      </RegisterDiv>
    )
  }
};

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);
export default WrappedRegistrationForm;

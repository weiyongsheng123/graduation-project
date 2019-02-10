import styled from 'styled-components';

export const RegisterWrapper = styled.div`
  overflow: hidden;
`;

export const AdvertBackground = styled.div`
  width: 850px;
  height: 500px;
  margin: auto;
  margin-top: 105px;
  background-image: url('http://img01.51jobcdn.com/im/2018/login/newbg.a1df1775.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-color: #fff;
`;

export const RegisterDiv = styled.div`
  width: 100%;
  height: 500px;
  position: absolute;
  top: 85px;
  left: 0px;
`;

export const InputArea = styled.div`
  margin: auto;
  width: 560px;
  min-height: 482px;
  background: #fff;
  padding: 25px 80px;
  box-shadow: 0 0 30px #ddd;
  border-radius: 3px;
  color: #262b33;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.421;
  position: relative;
`;

export const RegisterTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  border-bottom: 1px solid #e7eaf1;
  margin-bottom: 20px;
  padding-bottom: 12px;
  position: relative;
  color: #262b33;
  line-height: 1.421;
  &:after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 90px;
    height: 2px;
    background: #000;
    left: 0;
    bottom: 0;
  }
`;

export const RegisterForm = styled.div`
  overflow: hidden;
  color: #262b33;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.421;
  .ant-btn-primary {
    width: 267px;
  }
  .decreaseMargin {
    margin-bottom: 10px;
  }
  .inline {
    display: inline-block;
  }
`;

export const AnimateArea = styled.div`
  margin: auto;
  width: 580px;
  min-height: 402px;
  background: #fff;
  margin-top: 0px;
  color: #262b33;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.421;
  overflow: hidden;
  position: relative;
`;

export const AnimatePart = styled.div`
  width: 560px;
  min-height: 282px;
  background: #fff;
  padding: 25px 80px;
  box-sizing: border-box;
  color: #262b33;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.421;
  position: absolute;
  top: 10px;
  left: 10px;
  box-shadow: 0 0 30px #ddd;
  border-radius: 3px;
  &.fade-enter {
    left: 590px;
  }
  &.fade-enter-active {
    transition: all 1s ease-out;
    left: 10px;
  }
  &.fade-enter-done {
    left: 10px;
  }
  &.fade-exit {
    left: 10px;
  }
  &.fade-exit-active {
    left: -590px;
    transition: all 1s ease-out;
  }
  &.fade-exit-done {
    left: -590px;
  }
  .checkRead {
    width: 400px;
    height: 54px;
    .ant-checkbox-wrapper {
      width: 180px;
    }
    .inline {
      display: inline-block;
    }
  }
`;

export const InputH3 = styled.h3`
  margin: auto;
  width: 560px;
  height: 59px;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 15px;
  display: block;
  font-size: 12px;
  font-weight: 400;
`;

export const InputSpan = styled.span`
  font-size: 18px;
  color: #262B33;
  font-family: PingFangSC-Medium;
  letter-spacing: 0;
  text-align: center;
  background: #fff;
  cursor: pointer;
  margin-top: 24px;
  margin-right: 20px;
  float: left;
  padding: 0 15px;
  &.active {
    border-bottom: 3px solid #1a8afa;
    height: 34px;
  }
`;

export const InputDiv = styled.div`
  border-bottom: 1px solid #f0f0f0;
  color: rgb(159, 173, 198);
  display: block;
  font-family: "PingFang SC", "Lantinghei SC", "Helvetica Neue", Helvetica, Arial, "Microsoft YaHei", "\\5FAE软雅黑", STHeitiSC-Light, simsun, "\\5B8B体", "WenQuanYi Zen Hei", "WenQuanYi Micro Hei", sans-serif;
  font-size: 12px;
  height: 54px;
  padding-top: 9px;
  box-sizing: border-box;
  width: 400px;
  overflow: hidden;
  margin-bottom: 20px;
  &.second {
    margin-top: 10px;
  }
  label {
    font-size: 16px;
    display: inline-block;
    width: 64px;
    color: #666666;
    vertical-align: baseline;
  }
  .input {
    width: 305px;
    height: 44px
    display: inline-block;
    position: relative;
    background-color: #fff !important;
    &.captcha {
      width: 180px !important;
    }
    input {
      width: 100%;
      padding-right: 15px !important;
      padding-left: 10px !important;
      font-size: 16px;
      line-height: 1.1;
      color: #333 !important;
      border: 0;
      outline: none !important;
      box-sizing: border-box;
      background-color: #fff !important;
      &:focus {
        box-shadow: none;
        border-bottom: 1px solid rgba(24, 144, 255, 0.2);
        border-radius: 0;
      }
    }
    span {
      display: block;
      position: absolute;
      right: -15px;
      top: 25px;
    }
  }
`;

export const InputSubmit = styled.div`
  width: 402px;
  .ant-btn-group {
    width: 400px;
    height: 43px;
    line-height: 43px;
    margin-top: 20px;
    border-radius: 4px;
    color: #fff;
    font-size: 18px;
    text-align: center;
    cursor: pointer;
    button {
      width: 200px;
      height: 43px;
    }
  }
`;

export const IdentContainer = styled.div`
  display: inline-block;
  width: 105px;
  height: 32px;
  vertical-align: middle;
  margin-left: 20px;
`;

export const BackLogin = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #1e9bf5;
  cursor: pointer;
`;

export const ServiceWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 30px;
  box-sizing: border-box;
`;

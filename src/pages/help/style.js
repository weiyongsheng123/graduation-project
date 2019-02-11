import styled from 'styled-components';

export const HelpWrapper = styled.div`
  overflow: hidden;
  background: #f4f6f9;
`;

export const HeadArea = styled.h1`
  width: 300px;
  height: 60px;
  display: block;
  font-size: 30px;
  line-height: 60px;
  font-weight: 550;
  margin: auto;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  .iconfont {
    font-size: 35px;
    margin-right: 5px;
    color: #FFDD55;
    margin-left: -15px;
  }
`;

export const PasswordArea = styled.div`
  width: 1150px;
  height: auto;
  overflow: hidden;
  margin: auto;
  box-sizing: border-box;
  padding: 20px;
`;

export const PasswordTitle = styled.div`
  width: 200px;
  height: 200px;
  display: inline-block;
  background: rgba(230, 230, 230, 1);
  box-shadow: -10px 10px 10px #333;
  overflow: hidden;
  margin-left: 50px;
  cursor: pointer;
  &.active {
    color: #1890ff;
    border: 1px solid #1890ff;
  }
  .iconfont {
    display: block;
    width: 200px;
    height: 55px;
    font-size: 35px;
    line-height: 55px;
    text-align: center;
    margin-top: 45px;
  }
  .content {
    display: block;
    width: 200px;
    height: 55px;
    font-size: 22px;
    line-height: 55px;
    text-align: center;
  }
`;

export const PasswordInput = styled.div`
  width: 550px;
  display: inline-block;
  height: 200px;
  background: rgba(230, 230, 230, 1);
  box-shadow: -10px 10px 10px #333;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  .ant-input-affix-wrapper {
    width: 300px;
    height: 40px;
    margin-top: 20px;
    margin-left: 50px;
  }
  .ant-btn-primary {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50px;
    right: 50px;
    font-size: 24px;
  }
  &.fade-enter {
    width: 0px;
  }
  &.fade-enter-active {
    width: 550px;
    transition: all 0.8s;
  }
  &.fade-enter-done {
    width: 550px;
  }
  &.fade-exit {
    width: 550px;
  }
  &.fade-exit-active {
    width: 0px;
    transition: all 0.8s;
  }
  &.fade-exit-done {
    width: 0px;
  }
`;

export const PasswordSuccess = styled.div`
  display: inline-block;
  width: 250px;
  height: 200px;
  background: rgba(230, 230, 230, 1);
  box-shadow: -10px 10px 10px #333;
  overflow: hidden;
  position: relative;
  .password {
    width: 100%;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 16px;
    display: block;
    margin: auto;
    margin-top: 20px;
    font-weight: bold;
  }
  .ant-input-affix-wrapper {
    width: 200px;
    height: 50px;
    font-size: 18px;
    display: block;
    margin: auto;
    margin-top:20px;
  }
  .ant-btn {
    width: 130px;
    height: 50px;
    font-size: 17px;
    display: block;
    margin: auto;
    margin-top:20px;
  }
  &.fade-enter {
    width: 0px;
  }
  &.fade-enter-active {
    width: 250px;
    transition: all 0.8s;
  }
  &.fade-enter-done {
    width: 250px;
  }
  &.fade-exit {
    width: 250px;
  }
  &.fade-exit-active {
    width: 0px;
    transition: all 0.8s;
  }
  &.fade-exit-done {
    width: 0px;
  }
`;

export const PasswordStep = styled.div`
  width: 1000px;
  height: 50px;
  overflow: hidden;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 25px;
`;

export const InfoArea = styled.div`
  width: 1150px;
  height: auto;
  overflow: hidden;
  margin: auto;
  box-sizing: border-box;
  padding: 20px;
  margin-bottom: 130px;
`;

export const InfoTitle = styled.div`
  width: 200px;
  height: 200px;
  display: inline-block;
  background: rgba(230, 230, 230, 1);
  box-shadow: -10px 10px 10px #333;
  overflow: hidden;
  margin-left: 50px;
  cursor: pointer;
  &.active {
    color: #1890ff;
    border: 1px solid #1890ff;
  }
  .iconfont {
    display: block;
    width: 200px;
    height: 55px;
    font-size: 35px;
    line-height: 55px;
    text-align: center;
    margin-top: 45px;
  }
  .content {
    display: block;
    width: 200px;
    height: 55px;
    font-size: 22px;
    line-height: 55px;
    text-align: center;
  }
`;

export const InfoPassword = styled.div`
  display: inline-block;
  width: 250px;
  height: 200px;
  background: rgba(230, 230, 230, 1);
  box-shadow: -10px 10px 10px #333;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  .Info {
    width: 100%;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 16px;
    display: block;
    margin: auto;
    margin-top: 20px;
    font-weight: bold;
  }
  .ant-input-affix-wrapper {
    width: 200px;
    height: 50px;
    font-size: 18px;
    display: block;
    margin: auto;
    margin-top:20px;
  }
  .ant-btn {
    width: 130px;
    height: 50px;
    font-size: 17px;
    display: block;
    margin: auto;
    margin-top:20px;
  }
  &.fade-enter {
    width: 0px;
  }
  &.fade-enter-active {
    width: 250px;
    transition: all 0.8s;
  }
  &.fade-enter-done {
    width: 250px;
  }
  &.fade-exit {
    width: 250px;
  }
  &.fade-exit-active {
    width: 0px;
    transition: all 0.8s;
  }
  &.fade-exit-done {
    width: 0px;
  }
`;

export const InfoInput = styled.div`
  width: 490px;
  display: inline-block;
  height: 200px;
  background: rgba(230, 230, 230, 1);
  box-shadow: -10px 10px 10px #333;
  overflow: hidden;
  position: relative;
  .ant-input-affix-wrapper {
    width: 300px;
    height: 40px;
    margin-top: 20px;
    margin-left: 50px;
  }
  .ant-btn-primary {
    width: 70px;
    height: 60px;
    position: absolute;
    top: 70px;
    right: 35px;
    font-size: 16px;
    text-align: center;
  }
  &.fade-enter {
    width: 0px;
  }
  &.fade-enter-active {
    width: 490px;
    transition: all 0.8s;
  }
  &.fade-enter-done {
    width: 490px;
  }
  &.fade-exit {
    width: 490px;
  }
  &.fade-exit-active {
    width: 0px;
    transition: all 0.8s;
  }
  &.fade-exit-done {
    width: 0px;
  }
`;

export const InfoSuccess = styled.div`
  width: 120px;
  display: inline-block;
  height: 200px;
  background: rgba(230, 230, 230, 1);
  box-shadow: -10px 10px 10px #333;
  overflow: hidden;
  position: relative;
  .success {
    width: 80px;
    height: 50px;
    display: block;
    font-size: 18px;
    line-height: 50px;
    margin: auto;
    margin-top: 33px;
  }
  .ant-btn {
    width: 70px;
    height: 70px;
    font-size: 14px;
    margin: auto;
    padding: 0;
    text-align: center;
    margin-top: 23px;
    display: block;
    border-radius: 50%;
  }
  &.fade-enter {
    width: 0px;
  }
  &.fade-enter-active {
    width: 100px;
    transition: all 0.8s;
  }
  &.fade-enter-done {
    width: 100px;
  }
  &.fade-exit {
    width: 100px;
  }
  &.fade-exit-active {
    width: 0px;
    transition: all 0.8s;
  }
  &.fade-exit-done {
    width: 0px;
  }
`;

export const InfoStep = styled.div`
  width: 1000px;
  height: 50px;
  overflow: hidden;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 25px;
`;

import styled from 'styled-components';

export const LoadImgArea = styled.div`
  width: 100%;
  height: 600px;
  position: fixed;
  left: 0px;
  top: 0px;
`;

export const LoadImg = styled.img`
  display: block;
  width: 400px;
  height: 350px;
  margin: auto;
  margin-top: 50px;
`;

export const LoadTitle = styled.h2`
  width: 300px;
  height: 40px;
  font-size: 24px;
  line-height: 40px;
  text-align: center;
  display: block;
  margin: auto;
  margin-top: 80px;
`;

export const InputDiv = styled.div`
  color: rgb(159, 173, 198);
  display: inline-block;
  font-family: "PingFang SC", "Lantinghei SC", "Helvetica Neue", Helvetica, Arial, "Microsoft YaHei", "\\5FAE软雅黑", STHeitiSC-Light, simsun, "\\5B8B体", "WenQuanYi Zen Hei", "WenQuanYi Micro Hei", sans-serif;
  font-size: 12px;
  height: 56px;
  width: 324px;
  overflow: hidden;
  margin-top: 18px;
  &.center {
    margin-left: 324px;
  }
  label {
    font-size: 16px;
    font-weight: 600;
    display: inline-block;
    width: 84px;
    text-align: right;
    box-sizing: border-box;
    padding-right: 5px;
    color: #666;
    vertical-align: middle;
  }
  .file {
    height: 54px;
    line-height: 50px;
    border-radius: 50%;
  }
  .ant-input-group-compact {
    width: 229px !important;
    height: 52px;
    line-height: 52px;
    margin-top: 2px;
    vertical-align: middle;
    display: inline-block !important;
    .ant-calendar-picker {
      width: 100%;
      height: 52px;
      font-size: 16px;
      line-height: 1.1;
      color: #333 !important;
      outline: none !important;
      box-sizing: border-box;
      background-color: #fff !important;
      input {
        padding-right: 15px !important;
        padding-left: 10px !important;
        height: 52px;
      }
    }
  }
  .input {
    width: 229px !important;
    height: 52px;
    line-height: 52px;
    margin-top: 2px;
    vertical-align: middle;
    display: inline-block;
    position: relative;
    background-color: #fff !important;
    input {
      width: 100%;
      padding-right: 15px !important;
      padding-left: 10px !important;
      font-size: 16px;
      line-height: 1.1;
      color: #333 !important;
      outline: none !important;
      box-sizing: border-box;
      background-color: #fff !important;
    }
    span {
      display: block;
      position: absolute;
      right: 0px;
      top: 27px;
    }
  }
  .ant-radio-group {
    height: 54px;
    line-height: 54px;
  }
  .ant-input-number {
    height: 54px;
    line-height: 54px;
    width: 229px;
    text-align: center;
    .ant-input-number-input {
      box-sizing: border-box;
      padding-left: 90px;
    }
  }
  .ant-select {
    height: 54px;
    line-height: 54px;
    width: 229px;
    .ant-select-selection {
      height: 54px;
      line-height: 54px;
      .ant-select-selection__rendered {
        height: 54px;
        line-height: 54px;
      }
    }
  }
  .ant-btn {
    width: 117px;
    height: 54px;
    line-height: 54px;
    margin-left: 30px;
  }
  &.less {
    height: 30px;
    label {
      height: 30px;
      line-height: 30px;
      vertical-align: top;
    }
    .file {
      width: 195px;
      height: 30px;
      line-height: 24px;
      margin-left: 30px;
    }
  }
  &.chooseMany {
    height: auto;
    .ant-checkbox-group {
      box-sizing: border-box;
      padding-left: 20px;
    }
    .ant-radio-group {
      box-sizing: border-box;
      padding-left: 25px;
    }
    textarea {
      width: 229px;
      vertical-align: middle;
    }
  }
`;

export const CompanyWrapper = styled.div`
  overflow: hidden;
  background: #f4f6f9;
`;

export const CompanyContent = styled.div`
  width: 1150px;
  height: auto;
  overflow: hidden;
  margin: auto;
  margin-top: 30px;
`;

export const DescArea = styled.div`
  width: 1150px;
  height: auto;
  overflow: hidden;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  background: #fff;
  box-sizing: border-box;
  padding: 25px;
  display: flex;
  box-shadow: 0 0 30px #eee;
  position: relative;
  .edit {
    cursor: pointer;
    font-size: 14px;
    letter-spacing: 1.21px;
    position: absolute;
    top: 10px;
    right: 10px;
    &:hover {
      color: #1787fb;
      transition: color 0.3s;
    }
    span {
      margin-right: 5px;
      font-size: 16px;
      font-style: normal;
    }
  }
`;

export const DescImg = styled.img`
  width: 200px;
  height: 200px;
  overflow: hidden;
`;

export const DescInfo = styled.div`
  width: 400px;
  height: 200px;
  box-sizing: border-box;
  padding-left: 20px;
  p {
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    color: #333;
    margin-bottom: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    span {
      font-weight: 550;
      margin-right: 15px;
    }
  }
`;

export const DescDetail = styled.div`
  flex: 1;
  height: 200px;
  p {
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    font-weight: 550;
    margin-bottom: 0;
  }
  div {
    width: 100%;
    height: 150px;
    overflow: hidden;
    position: relative;
    &:after {
      content:"......";
      height: 21px;
      width: 38px;
      line-height: 21px;
      position:absolute;
      bottom:0;
      right:0;
      background: #fff;
    }
  }
`;

export const EditArea = styled.div`
  width: 100%;
  height: 700px;
  position: fixed;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.2);
  &.fade-enter {
    left: -1350px;
  }
  &.fade-enter-active {
    transition: all 1s ease-in-out;
    left: 0px;
  }
  &.fade-enter-done {
    left: 0px;
  }
  &.fade-exit {
    left: 0px;
  }
  &.fade-exit-active {
    left: 1450px;
    transition: all 1s ease-in-out;
  }
  &.fade-exit-done {
    left: 1450px;
  }
`;

export const EditDetail = styled.div`
  width: 550px;
  height: auto;
  margin: auto;
  margin-top: 30px;
  background: #fff;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
  padding-left: 112px;
  position: relative;
  .close {
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 24px;
    cursor: pointer;
    color: #333;
    &:hover {
      color: #1787fb;
      transition: color 0.3s;
    }
  }
`;

export const IssueArea = styled.div`
  width: 550px;
  height: auto;
  overflow: hidden;
  float: left;
  background: #fff;
  box-shadow: 0 0 30px #eee;
`;

export const ReseriveArea =styled.div`
  width: 550px;
  height: auto;
  overflow: hidden;
  float: right;
  background: #fff;
  box-shadow: 0 0 30px #eee;
`;

export const IssueTitle = styled.h3`
  height: 50px;
  width: 100%;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  line-height: 50px;
  border-bottom: 1px solid #f0f0f0;
  overflow: hidden;
  .left {
    float: left;
    font-size: 18px;
    font-weight: 550;
    .iconfont {
      margin-right: 10px;
      color: #1890ff;
    }
  }
  .right {
    float: right;
    font-size: 16px;
    cursor: pointer;
    .iconfont {
      color: #1890ff;
    }
    &:hover {
      font-size: 18px;
      transition: all 0.1s;
    }
  }
`;

export const IssueList = styled.ul`
  width: 100%;
  height: 400px;
  box-sizing: border-box;
  padding: 5px;
  overflow: auto;
`;

export const IssueItem = styled.li`
  width: 100%;
  height: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: 1px solid #f0f0f0;
  .left {
    float: left;
    display: block;
    margin-left: 30px;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    font-weight: 550;
  }
  .right { 
    float: right;
    display: block;
    margin-right: 25px;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
  }
  .iconfont { 
    float: right;
    display: block;
    margin-right: 30px;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      color: red;
      transition: color 0.3s;
    }
  }
`;

export const ReseriveTitle = styled.h3`
  height: 50px;
  width: 100%;
  box-sizing: border-box;
  padding-left: 20px;
  font-size: 18px;
  font-weight: 550;
  line-height: 50px;
  border-bottom: 1px solid #f0f0f0;
  span {
    margin-right: 10px;
    color: #1890ff;
  }
`;

export const ReseriveList = styled.ul`
  width: 100%;
  height: 400px;
  box-sizing: border-box;
  padding: 5px;
  overflow: auto;
`;

export const ReseriveItem = styled.li`
  width: 100%;
  height: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: 1px solid #f0f0f0;
  .left {
    float: left;
    display: block;
    margin-right: 15px;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    &:first-of-type {
      margin-left: 30px;
      font-weight: 550;
    }
  }
  .right { 
    float: right;
    display: block;
    margin-right: 25px;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
  }
  .iconfont { 
    float: right;
    display: block;
    margin-right: 30px;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      color: red;
      transition: color 0.3s;
    }
  }
`;

export const NewArea = styled.div`
  width: 100%;
  height: 600px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  left: 0px;
  top: 0px;
  &.fade-enter {
    top: -650px;
  }
  &.fade-enter-active {
    top: 0;
    transition: all 1s ease-in-out;
  }
  &.fade-enter-done {
    top: 0;
  }
  &.fade-exit {
    top: 0;
  }
  &.fade-exit-active {
    top: 650px;
    transition: all 1s ease-in-out;
  }
  &.fade-exit-done {
    top: 650px;
  }
`;

export const InputTitle = styled.h3`
  width: 100%;
  height: 60px;
  display: block;
  box-sizing: border-box;
  padding-left: 50px;
  font-size: 20px;
  font-weight: 550;
  line-height: 60px;
  font-family: "华文仿宋";
  border-bottom: 2px solid #f0f0f0;
  position: relative;
  .iconfont {
    position: absolute;
    right: 20px;
    top: 0px;
    color: #9fadc6;
    font-size: 25px;
    cursor: pointer;
    &:hover {
      color: #1890ff;
      transition: color: 0.3s;
    }
  }
`;

export const NewInputs = styled.div`
  width: 1050px;
  height: 600px;
  overflow: auto;
  margin: auto;
  background: #fff;
`;

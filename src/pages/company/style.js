import styled from 'styled-components';

export const InputDiv = styled.div`
  color: rgb(159, 173, 198);
  display: block;
  font-family: "PingFang SC", "Lantinghei SC", "Helvetica Neue", Helvetica, Arial, "Microsoft YaHei", "\\5FAE软雅黑", STHeitiSC-Light, simsun, "\\5B8B体", "WenQuanYi Zen Hei", "WenQuanYi Micro Hei", sans-serif;
  font-size: 12px;
  height: 56px;
  margin-bottom: 15px;
  width: 324px;
  overflow: hidden;
  label {
    font-size: 16px;
    font-weight: 600;
    display: inline-block;
    width: 84px;
    color: #9fadc6;
    vertical-align: middle;
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
    }
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
      right: -15px;
      top: 30px;
    }
  }
  .ant-radio-group {
    height: 54px;
    line-height: 54px;
  }
  .ant-input-number {
    height: 54px;
    line-height: 54px;
  }
  .ant-select {
    height: 54px;
    line-height: 54px;
    width: 150px;
    .ant-select-selection {
      height: 54px;
      line-height: 54px;
      .ant-select-selection__rendered {
        height: 54px;
        line-height: 54px;
      }
    }
  }
  .file {
    height: 54px;
    line-height: 50px;
    border-radius: 50%;
  }
  .ant-btn {
    height: 54px;
    line-height: 54px;
    margin-left: 55px;
    &:first-of-type {
      margin-left: 85px;
    }
  }
`;

export const CompanyWrapper = styled.div`
  overflow: hidden;
  background: #f4f6f9;
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
  margin-top: 50px;
  background: #fff;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
  padding-left: 112px;
  padding-top: 30px;
  position: relative;
  .close {
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 24px;
    cursor: pointer;
    color: #333;
  }
`;

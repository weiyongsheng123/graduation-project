import styled from 'styled-components';

export const ResumeWrapper = styled.div`
  overflow: hidden;
  background: #f4f6f9;
`;

export const NameArea = styled.div`
  font-size: 14px;
  color: #999;
  background: #fff;
  letter-spacing: .71px;
  margin: 15px auto;
  zoom: 1;
  width: 1200px;
  height: 52px;
`;

export const Name = styled.span`
  color: #2788f3;
  border-bottom: 2px solid #2788f3;
  width: 16.6%;
  height: 52px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  line-height: 50px;
  padding: 0 1em;
  cursor: pointer;
  float: left;
  box-sizing: border-box;
  font-size: 14px;
  letter-spacing: .71px;
`;

export const DetailWrapper = styled.div`
  float: left;
  width: 880px;
  background: #fff;
`;

export const ResumeNameArea = styled.div`
  padding: 30px 25px 32px;
  background: #fff;
  border-bottom: 1px solid #eaedf1;
  box-sizing: border-box;
  color: #333;
  overflow: hidden;
`;

export const ResumeNameAreaProfile = styled.div`
  position: relative;
  color: #333;
  box-sizing: border-box;
  overflow: hidden;
  img {
    position: absolute;
    width: 116px;
    height: 116px;
    display: block;
    top: -7px;
    left: 0;
    border: 1px solid #eaedf1;
    box-sizing: border-box;
  }
  .one {
    margin-left: 135px;
    margin-bottom: 24px;
    font-size: 32px;
    line-height: 32px;
    zoom: 1;
    display: block;
    overflow: hidden;
    span {
      display: block;
      text-overflow: ellipsis;
      max-width: 10em;
      overflow: hidden;
      white-space: nowrap;
      height: 35px;
      float: left;
      font-size: 32px;
      line-height: 32px;
    }
  }
  .two {
    margin-left: 135px;
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 14px;
    display: block;
    span {
      padding: 0 24px 0 24px;
      position: relative;
      &:before {
        content: "";
        position: absolute;
        left: 0;
        width: 1px;
        height: 12px;
        background: #dcdcdc;
      }
      &:first-of-type {
        padding: 0 24px 0 0;
        &:before {
          background: transparent;
        }
      }
    }
  }
  .three {
    margin-left: 135px;
    font-size: 16px;
    letter-spacing: .97px;
    line-height: 16px;
    height: 16px;
    overflow: hidden;
    zoom: 1;
    display: block;
    .phone {
      margin-right: 14px;
      font-size: 16px;
      font-style: normal;
      float: left;
      letter-spacing: .97px;
      line-height: 14px;
    }
    .email {
      font-size: 16px;
      margin-right: 14px;
      font-style: normal;
      float: left;
      letter-spacing: .97px;
      line-height: 14px;
    }
    span {
      margin-right: 16px;
      float: left;
      box-sizing: border-box;
      font-size: 16px;
      letter-spacing: .97px;
      line-height: 14px;
    }
  }
  .four {
    cursor: pointer;
    font-size: 14px;
    letter-spacing: 1.21px;
    position: absolute;
    top: 0;
    right: 0;
    span {
      margin-right: 5px;
      font-size: 16px;
      font-style: normal;
    }
  }
`;

export const ResumeNameAreaEdit = styled.div`
  color: #333;
  box-sizing: border-box;
  overflow: hidden;
  padding-left: 180px;
`;

export const InputDiv = styled.div`
  color: rgb(159, 173, 198);
  display: block;
  font-family: "PingFang SC", "Lantinghei SC", "Helvetica Neue", Helvetica, Arial, "Microsoft YaHei", "\\5FAE软雅黑", STHeitiSC-Light, simsun, "\\5B8B体", "WenQuanYi Zen Hei", "WenQuanYi Micro Hei", sans-serif;
  font-size: 12px;
  height: 56px;
  margin-left: 16px;
  margin-bottom: 15px;
  width: 324px;
  overflow: hidden;
  label {
    font-size: 16px;
    display: inline-block;
    width: 64px;
    color: #9fadc6;
    vertical-align: baseline;
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
`;

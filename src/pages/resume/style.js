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
  border-bottom: 5px solid #eaedf1;
  box-sizing: border-box;
  color: #333;
  overflow: hidden;
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: all 0.5s ease-in-out;
    opacity: 1;
  }
  .fade-enter-done {
    opacity: 1;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }
  .fade-exit-done {
    opacity: 0;
  }
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
  position: relative;
  .close {
    position: absolute;
    top: 0;
    right: 30px;
    font-size: 24px;
    cursor: pointer;
    color: #333;
  }
`;

export const IntentArea = styled.div`
  padding: 30px 25px 32px;
  background: #fff;
  border-bottom: 5px solid #eaedf1;
  box-sizing: border-box;
  color: #333;
  overflow: hidden;
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: all 0.5s ease-in-out;
    opacity: 1;
  }
  .fade-enter-done {
    opacity: 1;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }
  .fade-exit-done {
    opacity: 0;
  }
`;

export const IntentProfile = styled.div`
  overflow: hidden;
  position: relative;
  .showEdit {
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

export const IntentTitle = styled.p`
  margin-bottom: 29px;
  font-size: 24px;
  color: #333;
  letter-spacing: 1.21px;
  zoom: 1;
  display: block;
  box-sizing: border-box;
`;

export const IntentDetail = styled.div`
  width: 48%;
  height: 32px;
  margin-bottom: 10px;
  line-height: 32px;
  font-size: 16px;
  float: left;
  span {
    width: 120px;
    display: inline-block;
    font-weight: 550;
  }
  p {
    display: inline-block;
  }
`;

export const IntentEdit = styled.div`
  overflow: hidden;
  position: relative;
  padding-left: 180px;
  .close {
    position: absolute;
    top: 0;
    right: 30px;
    font-size: 24px;
    cursor: pointer;
    color: #333;
  }
`;

export const WorkArea = styled.div`
  padding: 30px 25px 32px;
  background: #fff;
  border-bottom: 5px solid #eaedf1;
  box-sizing: border-box;
  color: #333;
  overflow: hidden;
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: all 0.5s ease-in-out;
    opacity: 1;
  }
  .fade-enter-done {
    opacity: 1;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }
  .fade-exit-done {
    opacity: 0;
  }
`;

export const WorkTitle = styled.p`
  margin-bottom: 29px;
  font-size: 24px;
  color: #333;
  letter-spacing: 1.21px;
  zoom: 1;
  display: block;
  box-sizing: border-box;
`;

export const WorkButton = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 30px;
  .ant-btn-dashed {
    width: 60%;
    height: 50px;
    margin:auto;
    display: block;
  }
`;

export const WorkList = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
`;

export const WorkItem = styled.div`
  width: 100%;
  height: 120px;
  position: relative;
  border-bottom: 1px dashed #d9d9d9;
  &:last-of-type {
    border: 0;
  }
  .index {
    width: 30px;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    font-weight: 550;
    display: block;
    color: #1890ff;
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .iconfont {
    font-size: 20px;
    position: absolute;
    top: 0px;
    right: 0px;
    color: #d9d9d9;
    cursor: pointer;
  }
  .container {
    width: 45%;
    height: 50px;
    display: inline-block;
    margin-left: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    span {
      width: 100px;
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      font-weight: 550;
      display: inline-block;
    }
    p {
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      display: inline-block;
    }
  }
`;

export const WorkEdit = styled.div`
  width: 342px;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  .close {
    position: absolute;
    top: 0;
    right: 30px;
    font-size: 24px;
    cursor: pointer;
    color: #333;
  }
`;

export const ProjectArea = styled.div`
  padding: 30px 25px 32px;
  background: #fff;
  border-bottom: 5px solid #eaedf1;
  box-sizing: border-box;
  color: #333;
  overflow: hidden;
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: all 0.5s ease-in-out;
    opacity: 1;
  }
  .fade-enter-done {
    opacity: 1;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }
  .fade-exit-done {
    opacity: 0;
  }
`;

export const ProjectTitle = styled.p`
  margin-bottom: 29px;
  font-size: 24px;
  color: #333;
  letter-spacing: 1.21px;
  zoom: 1;
  display: block;
  box-sizing: border-box;
`;

export const ProjectButton = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 30px;
  .ant-btn-dashed {
    width: 60%;
    height: 50px;
    margin:auto;
    display: block;
  }
`;

export const ProjectList = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
`;

export const ProjectItem = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  border-bottom: 1px dashed #d9d9d9;
  &:last-of-type {
    border: 0;
  }
  .index {
    width: 30px;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    font-weight: 550;
    display: block;
    color: #1890ff;
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .iconfont {
    font-size: 20px;
    position: absolute;
    top: 0px;
    right: 0px;
    color: #d9d9d9;
    cursor: pointer;
  }
  .container {
    width: 90%;
    height: 50px;
    margin-left: 25px;
    overflow: hidden;
    &.twoLine {
      height: auto;
      overflow: hidden;
      text-overflow: ellipsis;
      p {
        width: 85%;
        height: auto;
        line-height: 50px;
        font-size: 16px;
        display: inline-block;
        white-space: wrap;
      }
    }
    span {
      width: 100px;
      height: 50px;
      line-height: 50px;
      font-weight: 550;
      font-size: 16px;
      display: inline-block;
      vertical-align: top;
    }
    p {
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      display: inline-block;
    }
  }
`;

export const ProjectEdit = styled.div`
  width: 342px;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  .close {
    position: absolute;
    top: 0;
    right: 30px;
    font-size: 24px;
    cursor: pointer;
    color: #333;
  }
`;

export const EducateArea = styled.div`
  padding: 30px 25px 32px;
  background: #fff;
  border-bottom: 5px solid #eaedf1;
  box-sizing: border-box;
  color: #333;
  overflow: hidden;
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: all 0.5s ease-in-out;
    opacity: 1;
  }
  .fade-enter-done {
    opacity: 1;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }
  .fade-exit-done {
    opacity: 0;
  }
`;

export const EducateTitle = styled.p`
  margin-bottom: 29px;
  font-size: 24px;
  color: #333;
  letter-spacing: 1.21px;
  zoom: 1;
  display: block;
  box-sizing: border-box;
`;

export const EducateButton = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 30px;
  .ant-btn-dashed {
    width: 60%;
    height: 50px;
    margin:auto;
    display: block;
  }
`;

export const EducateList = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
`;

export const EducateItem = styled.div`
  width: 100%;
  height: 120px;
  position: relative;
  border-bottom: 1px dashed #d9d9d9;
  &:last-of-type {
    border: 0;
  }
  .index {
    width: 30px;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    font-weight: 550;
    display: block;
    color: #1890ff;
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .iconfont {
    font-size: 20px;
    position: absolute;
    top: 0px;
    right: 0px;
    color: #d9d9d9;
    cursor: pointer;
  }
  .container {
    width: 45%;
    height: 50px;
    display: inline-block;
    margin-left: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    span {
      width: 100px;
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      font-weight: 550;
      display: inline-block;
    }
    p {
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      display: inline-block;
    }
  }
`;

export const EducateEdit = styled.div`
  width: 342px;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  .close {
    position: absolute;
    top: 0;
    right: 30px;
    font-size: 24px;
    cursor: pointer;
    color: #333;
  }
`;

export const UploadArea = styled.div`
  padding: 30px 25px 32px;
  background: #fff;
  border-bottom: 2px solid #eaedf1;
  box-sizing: border-box;
  color: #333;
  overflow: hidden;
`;

export const UploadTitle = styled.p`
  margin-bottom: 29px;
  font-size: 24px;
  color: #333;
  letter-spacing: 1.21px;
  zoom: 1;
  display: block;
  box-sizing: border-box;
`;

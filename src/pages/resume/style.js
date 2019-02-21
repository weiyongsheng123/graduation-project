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
  display: block;
  font-family: "PingFang SC", "Lantinghei SC", "Helvetica Neue", Helvetica, Arial, "Microsoft YaHei", "\\5FAE软雅黑", STHeitiSC-Light, simsun, "\\5B8B体", "WenQuanYi Zen Hei", "WenQuanYi Micro Hei", sans-serif;
  font-size: 12px;
  height: 70px;
  box-sizing: border-box;
  padding-bottom: 15px;
  width: 324px;
  overflow: hidden;
  position: relative;
  label {
    font-size: 16px;
    font-weight: 600;
    display: inline-block;
    width: 84px;
    color: #666;
    vertical-align: middle;
    &.many {
      width: 170px;
    }
  }
  .warn {
    width: 324px;
    height: 15px;
    font-size: 14px;
    line-height: 14px;
    color: red;
    display: block;
    position: absolute;
    left: 0px;
    bottom: 0px;
    text-align: center;
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
  .ant-checkbox-group {
    width: 100%;
    padding-top: 20px;
  }
  .ant-calendar-picker {
    width: 229px !important;
    height: 52px;
    line-height: 52px;
    margin-top: 2px;
    vertical-align: middle;
    display: inline-block;
    .ant-calendar-picker-input {
      height: 52px;
      line-height: 52px;
      padding: 0px;
      .ant-calendar-range-picker-input {
        height: 52px;
        line-height: 52px;
        font-size: 15px;
      }
      .ant-calendar-range-picker-separator {
        height: 52px;
        line-height: 52px;
        font-size: 15px;
      }
    }
  }
`;

export const ResumeWrapper = styled.div`
  overflow: hidden;
  background: #f4f6f9;
`;

export const ResumeContent = styled.div`
  width: 1150px;
  height: auto;
  overflow: hidden;
  margin: auto;
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
    transition: all 0.3s ease-in-out;
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
    transition: all 0.3s ease-in-out;
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
    height: 110px;
    display: block;
    top: 0px;
    left: 0;
    border: 1px solid #eaedf1;
    box-sizing: border-box;
  }
  .one {
    margin-left: 135px;
    margin-bottom: 24px;
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
      font-size: 28px;
      line-height: 35px;
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
    margin-top: 15px;
    font-size: 16px;
    letter-spacing: .97px;
    line-height: 16px;
    height: 16px;
    overflow: hidden;
    zoom: 1;
    display: block;
    .phone {
      margin-right: 8px;
      font-size: 16px;
      font-style: normal;
      float: left;
      letter-spacing: .97px;
      line-height: 16px;
    }
    .email {
      font-size: 16px;
      margin-right: 8px;
      font-style: normal;
      float: left;
      letter-spacing: .97px;
      line-height: 16px;
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
    &:hover {
      color: #1787fb;
    }
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
    &:hover {
      color: #1787fb;
      transition: color 0.3s;
    }
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
    transition: all 0.3s ease-in-out;
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
    transition: all 0.3s ease-in-out;
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
    &:hover {
      color: #1787fb;
    }
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
    &:hover {
      color: #1787fb;
      transition: color 0.3s;
    }
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
    transition: all 0.3s ease-in-out;
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
    transition: all 0.3s ease-in-out;
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
    &:hover {
      color: red;
      transition: color 0.3s;
    }
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
  position: relative;
  .close {
    position: absolute;
    top: -10px;
    right: -50px;
    font-size: 24px;
    cursor: pointer;
    color: #333;
    &:hover {
      color: #1787fb;
      transition: color 0.3s;
    }
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
    transition: all 0.3s ease-in-out;
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
    transition: all 0.3s ease-in-out;
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
    &:hover {
      color: red;
      transition: color 0.3s;
    }
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
  position: relative;
  .close {
    position: absolute;
    top: -10px;
    right: -50px;
    font-size: 24px;
    cursor: pointer;
    color: #333;
    &:hover {
      color: #1787fb;
      transition: color 0.3s;
    }
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
    transition: all 0.3s ease-in-out;
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
    transition: all 0.3s ease-in-out;
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
    &:hover {
      color: red;
      transition: color 0.3s;
    }
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
  position: relative;
  .close {
    position: absolute;
    top: -10px;
    right: -50px;
    font-size: 24px;
    cursor: pointer;
    color: #333;
    &:hover {
      color: #1787fb;
      transition: color 0.3s;
    }
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

export const DownloadArea = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-bottom: 20px;
  .title {
    width: 140px;
    font-weight: 550;
    font-size: 16px;
    line-height: 50px;
    height: 50px;
    display: block;
  }
  .item {
     display: inline-block;
     width: auto;
     margin-right: 50px;
     margin-left: 50px !important;
     padding-right: 65px;
     box-sizing: border-box;
     height: 50px;
     margin-left: 10px;
     font-size: 16px;
     line-height: 50px;
     overflow: hidden;
     position: relative;
     &:hover {
       i {
         color: #1787fb;
         transition: color 0.3s;
       }
     }
     a {
       height: 100%;
       display: inline-block;
       text-overflow: ellipsis;
       margin-right: 5px;
     }
     i {
       display: inline-block;
       cursor: pointer;
     }
     span {
       display: block;
       position: absolute;
       right: 0px;
       top: 0px;
       cursor: pointer;
       &:hover {
         color: red;
         transition: color 0.3s;
       }
     }
  }
`;

export const Upload = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  .tips {
    width: 140px;
    font-weight: 550;
    font-size: 16px;
    line-height: 50px;
    height: 50px;
    display: block;
  }
  input {
    margin-left: 145px;
  }
`;

export const ResumeNavWrapper = styled.div`
  width: 240px;
  float: right;
  height: auto;
  overflow: hidden;
  background: #fff;
`;

export const NavUl = styled.ul`
  width: 100%;
  overflow: hidden;
  margin-top: 10px;
`;

export const NavLi = styled.li`
  width: 100%;
  font-size: 18px;
  height: 52px;
  line-height: 52px;
  overflow: hidden;
  cursor: pointer;
  a {
    text-align: center;
    box-sizing: border-box;
    display: block;
    height: 52px;
    color: #333;
    &.select {
      color: #1787fb;
      border-left: 4px solid #1787fb;
    }
    &:hover {
      transition: color 0.3s;
      color: #333;
    }
  }
`;

export const CallPolice = styled.a`
  width: 100%;
  height: 64px;
  cursor: pointer;
  display: block;
  border: 1px solid #dcdee2;
  overflow: hidden;
  padding-left: 20px;
  &:hover {
    border-color: #1787fb;
  }
  .police {
    background: url(https://common-bucket.zhaopin.cn/zpfe-complonents-alan/assets/net-plice.a4aaf9.png) no-repeat;
    background-size: 100% 100%;
    display: inline-block;
    width: 55px;
    height: 60px;
    vertical-align: bottom;
  }
  span {
    display: inline-block;
    font-size: 16px;
    height: 60px;
    line-height: 60px;
    margin-left: 5px;
  }
`;

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

export const LoginWrapper = styled.div`
  overflow: hidden;
`;

export const ImgShow = styled.div`
  width: 700px;
  height: 480px;
  padding-top: 40px;
  box-sizing: border-box;
  float: left;
`;

export const Img = styled.img`
  width: 500px;
  height: 400px;
  display: block;
  margin: auto;
`;

export const InputArea = styled.div`
  width: 360px;
  min-height: 372px;
  padding: 0 35px;
  background: #fff;
  margin-top: 80px;
  margin-right: 160px;
  float: right;
  box-sizing: content-box;
  background-clip: border-box;
  font-size: 12px;
  color: #9fadc6;
  box-shadow: 0 0 30px #eee;
  border: 1px solid #eee;
`;

export const InputH3 = styled.h3`
  height: 59px;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 15px;
  width: 324px;
  margin-left: 14px;
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
  margin-left: 16px;
  width: 324px;
  overflow: hidden;
  &.second {
    margin-top: 10px;
  }
  label {
    font-size: 16px;
    display: inline-block;
    width: 64px;
    color: #9fadc6;
    vertical-align: baseline;
  }
  .input {
    width: 229px !important;
    height: 100%;
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
      top: 30px;
    }
  }
`;

export const InputRemerber = styled.div`
  width: 326px;
  margin: 0 auto;
  margin-top: 10px;
  color: #9fadc6;
  padding: 0;
  border: 0;
  font-size: 12px;
  label {
    font-size: 12px;
    vertical-align: middle;
  }
  input {
    margin-right: 10px;
    vertical-align: middle;
    outline: none;
    display: inline-block;
    }
`;

export const InputSubmit = styled.div`
  width: 326px;
  position: relative;
  button {
    margin-left: 16px;
    width: 324px;
    height: 43px;
    line-height: 43px;
    margin-top: 20px;
    border-radius: 4px;
    color: #fff;
    font-size: 18px;
    text-align: center;
    cursor: pointer;
  }
  .warning {
    position: absolute;
    left: 16px;
    top: 0px;
    color: red;
    display: block;
    width: 324px;
    text-align: center;
    height: 22px;
    line-height: 22px;
    font-size: 16px;
  }
`;

export const InputForget = styled.div`
  width: 326px;
  margin: 30px auto;
  .left {
    float: left;
    color: #9fadc6;
    font-size: 12px;
    cursor: pointer;
  }
  .right {
    float: right;
    color: #1a8afa;
    cursor: pointer;
  }
`;

export const TelephoneShow = styled.div`
  clear: both;
  width: 100%;
  font-size: 20px;
  line-height: 1.0;
  overflow: hidden;
  height: 50px;
  text-align: right;
  box-sizing: border-box;
  padding-right: 30px;
  padding-top: 30px;
`;

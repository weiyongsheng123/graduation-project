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

export const FeedbackWrapper = styled.div`
  overflow: hidden;
  background: #f4f6f9;
`;

export const FeedbackHead = styled.h1`
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

export const FeedContent = styled.div`
  width: 600px;
  height: auto;
  margin: auto;
  background: rgba(230, 230, 230, 1);
  box-shadow: -10px 10px 10px #AAA;
  margin-bottom: 50px;
  overflow: hidden;
`;

export const InputDiv = styled.div`
  position: relative;
  label {
    font-size: 16px;
    font-weight: 600;
    display: block;
    width: 84px;
    text-align: right;
    box-sizing: border-box;
    padding-right: 5px;
    color: #666;
    height: 40px;
    line-height: 40px;
    margin-top: 20px;
  }
  .ant-input-affix-wrapper {
    width: 90%;
    height: 50px;
    line-height: 50px;
    margin: auto;
    display: block;
    margin-top: 15px;
    .ant-input {
      font-size: 16px;
    }
  }
  .textarea {
    width: 90%;
    font-size: 14px;
    line-height: 30px;
    margin: auto;
    display: block;
    margin-top: 15px;
  }
  .ant-btn {
    width: 150px;
    height: 50px;
    margin-top: 20px;
    margin-left: 100px;
    margin-bottom: 20px;
  }
  .warn {
    display: block;
    width: 600px;
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    color: red;
    position: absolute;
    left: 0px;
    top: 32px;
    text-align: center;
  }
`;

export const BackoutArea = styled.div`
  width: 100%;
  height: 600px;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 9999;
`;

export const Backout = styled.div`
  width: 300px;
  height: 120px;
  margin: auto;
  background: #fff;
  margin-top: 240px;
  border: 1px solid gray;
  h3 {
    width: 100%;
    height: 40px;
    display: block;
    color: gray;
    line-height: 40px;
    font-size: 16px;
    box-sizing: border-box;
    padding-left: 20px;
    border-bottom: 2px solid #f0f0f0;
    margin-bottom: 0px;
  }
  .ant-btn {
    width: 100px;
    height: 40px;
    display: inline-block;
    margin-top: 20px;
    margin-left: 33px;
  }
`;

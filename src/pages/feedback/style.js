import styled from 'styled-components';

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
    font-size: 16px;
    line-height: 50px;
    margin: auto;
    display: block;
    margin-top: 15px;
  }
  .textarea {
    width: 90%;
    font-size: 16px;
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
`;

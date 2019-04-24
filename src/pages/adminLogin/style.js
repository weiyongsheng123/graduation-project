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

export const LoginHeader = styled.h2`
    width: 100%;
    height: 80px;
    margin: 60px 0 20px;
    line-height: 80px;
    font-size: 40px;
    text-align: center;
`;

export const LoginInput = styled.div`
    width: 300px;
    height: 300px;
    margin: auto;
    .ant-input-affix-wrapper {
        margin-bottom: 25px;
    }
    .ant-btn-primary {
        width: 300px;
    }
    .btns {
        position: relative;
        p {
            position: absolute;
            top: -25px;
            left: 0px;
            width: 100%;
            height: 25px;
            font-size: 14px;
            line-height: 25px;
            color: red;
            text-align: center;
        }
    }
`;
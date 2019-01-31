import styled from 'styled-components';

export const CodeWrap = styled.div`
  width: 105px;
  height: 32px;
  position: relative;
  background: #777;
  overflow: hidden;
`;

export const CodeItem = styled.div`
  width: 20px;
  transform-origin: center center;
  position: absolute;
  top: 0px;
  font-size: 22px;
  user-select: none;
  border-radius: 4px;
  &:nth-of-type(1) {
    left: 0px;
  }
  &:nth-of-type(2) {
    left: 30px;
  }
  &:nth-of-type(3) {
    left: 60px;
  }
  &:nth-of-type(4) {
    left: 85px;
  }
`;

export const CodeMask = styled.div`
  font-size: 15px;
  color: white;
  text-align: center;
  padding-top: 0px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  z-index: 999;
  position:absolute;
  left: 0;
  top: 0;
`;
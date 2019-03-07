import styled from 'styled-components';

export const TipArea = styled.div`
  width: 100%;
  height: 30px;
  overflow: hidden;
  z-index: 999;
  position: absolute;
  top: 36px;
  left: 0px;
  background: rgba(0, 0, 0, 0.2);
  &.hide {
    display: none;
  }
`;

export const TipWord = styled.p`
  width: 480px;
  height: 30px;
  line-height: 30px;
  margin-bottom: 0;
  position: absolute;
  top: 0px;
`;

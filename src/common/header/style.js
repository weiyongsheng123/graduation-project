import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 56px;
  line-height: 56px;
  background-color: #1890ff;
  border-bottom: 1px solid #e8e8e8;
`;

export const HeaderImg = styled.img`
  width: auto;
  height: 40px;
  line-height: 56px;
  display: block;
  float: left;
  margin-top: 8px;
  margin-left: 130px;
  cursor: pointer;
`;

export const HeaderPattern = styled.div`
  max-width: 120px;
  height: 40px;
  font-size: 22px;
  color: #fff;
  line-height: 56px;
  float: left;
  font-weight: 400;
  cursor: pointer;
`;

export const HeaderLogin = styled.div`
  max-width: 120px;
  height: 40px;
  font-size: 16px;
  color: #fff;
  line-height: 56px;
  float: right;
  font-weight: 400;
  cursor: pointer;
`;

export const HeaderHelp = styled.div`
  max-width: 120px;
  height: 40px;
  font-size: 16px;
  color: #fff;
  line-height: 56px;
  float: right;
  font-weight: 400;
  margin-right: 130px;
  cursor: pointer;
`;

export const HeaderLine = styled.span`
  height: 40px;
  display: block;
  font-size: 22px;
  color: #fff;
  line-height: 56px;
  color: #8F8F8F;
  font-weight: 400;
  margin: 0 5px;
  &.left {
    float: left;
  }
  &.right {
    float: right;
  }
`;
